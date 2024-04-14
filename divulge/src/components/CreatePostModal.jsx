import React, { useState, useEffect } from 'react';
import './CreatePost.css';

const CreatePostModal = () => {
    const [previewUrl, setPreviewUrl] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('File Name:', file.name);
            console.log('File Size:', file.size);
            console.log('File Type:', file.type);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <div className="app">
            <div className="box">
                <label htmlFor="file-upload" className="file-upload-label">Browse</label>

                <input type="file" accept=".jpg, .jpeg, .png" id="file-upload" onChange={handleFileUpload} />

                <div>
                    {previewUrl && <img src={previewUrl} alt="Preview Uploaded Image" id="file-preview" />}
                </div>
                
            </div>

            {previewUrl && (
                <>
                    <div className='post-details'>
                        {/* <p>Title</p> */}
                        <input type="text" placeholder='Give your post a title...'/>
                        {/* <p>Description</p> */}
                        <input type="text" placeholder='Add a description' />
                        {/* <p>Discord Username</p> */}
                        <input type="text" placeholder='Discord Username, e.g. aloofist'/>
                        
                        <p>Everything good?</p>

                        <button className='post special-button'>Post</button>

                    </div>

                </>
            )}
        </div>
    );
}

export default CreatePostModal
