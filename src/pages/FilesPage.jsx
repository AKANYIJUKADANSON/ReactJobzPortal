import React from 'react';
import { useState } from 'react';
import { IoMdCloudUpload } from 'react-icons/io';


const FilesPage = () => {
    const [attachment, setAttachment] = useState(null);
    const [imgCaption, setImgCaption] = useState('');
    // store image link
    // const [imageLink, setImageLink] = useState('http://jobs.go.ug/sd');
    const [validationError, setValidationError] = useState(null);


    // Validating the file type
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (allowedTypes.includes(file.type)) {
                setAttachment(file);
                setValidationError(null);
                console.log('File selected:', file);
            } else {
                setAttachment([null]);
                setValidationError('Invalid file extension. Please select files of type jpeg, png and jpg')
            }
        }
    };

    const uploadFileData = async(e) => {
        e.preventDefault();

        if (attachment) {
            // initializing formdata
            const formData = new FormData();
            // adding data to the formdata
            formData.append('file', attachment);
            // formData.append('caption', imgCaption);
            formData.append('caption', imgCaption);
            // send data to server
            const response = await fetch('/api/files/upload', {
                method: 'POST',
                body: formData
            });

            const responseData = await response.json();

            if(responseData.status === '200'){
                console.log(responseData.message);
            }else{
                console.log(responseData.message);
            }
            // console.log("Response message: " + responseData.message);
            // console.log("Image_name: " + responseData.file);
            // console.log("Caption: " + responseData.description);
            // set image link
            // setImageLink(responseData.image_link)

        }else{
            setValidationError('Select a file befor uploading');
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 -mt-10">
            <form method='POST' onSubmit={uploadFileData} className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg border" >
                <h2 className="text-2xl font-bold mb-4 text-center">File Upload</h2>
                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col p-2 items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100  ">
                        <div className="flex flex-col items-center justify-center">
                            {!attachment ?

                                <>
                                    <IoMdCloudUpload className=" text-5xl mb-4 text-gray-500 dark:text-gray-400 hover:text-orange-500" />
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </>

                                : <img className='w-full h-full rounded-xl object-contain' src={attachment ? URL.createObjectURL(attachment) : ''} />

                            }

                            <input name='ticketFile' id="dropzone-file" type="file" className='hidden'
                                accept="image/jpeg,image/png, image/jpg"
                                // value = {attachment.name }
                                // onChange = { (e) => setAttachment(e.target.files[0]) }
                                onChange={handleFileChange}
                            />
                        </div>
                    </label>
                </div>

                <div className='mt-4'>
                    <label htmlFor="message"  >Caption</label>
                    <textarea
                    id="message"
                    name="message"
                    value={imgCaption}
                    onChange={ (e) => setImgCaption( e.target.value ) }
                    rows="3"
                    placeholder="Enter image caption here..."
                    className='border-2 p-2 w-full'
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full py-2 px-4 rounded text-white font-semibold bg-blue-500 hover:bg-blue-600"
                >
                    Upload
                </button>
            </form>

            <div className="row">
                <div className="col col-2">&nbsp;</div>
                <div className="col col-3">
                    {validationError && (
                        <p className='text-danger'>{validationError}</p>
                    )}

                    {/* {imageLink && (
                        <div>
                            <p>Uploaded Image: </p>
                            <img src={imageLink} className='img-fluid img-thumbnail' />

                        </div>
                    )} */}
                </div>
            </div>
        </div>
    );
}

export default FilesPage