import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = () => {
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

                {previewUrl && <img src={previewUrl} alt="Preview Uploaded Image" id="file-preview" />}

            </div>

            <button className='upload'>Upload</button>
        </div>
    );
};

export default CreatePost;
