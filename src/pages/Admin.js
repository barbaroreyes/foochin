import React, { useState } from 'react';

import {
  API,
  graphqlOperation,
  Storage,
} from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

import {
  AmplifyAuthenticator,
  AmplifySignOut,
} from '@aws-amplify/ui-react';

import config from '../aws-exports';
import { createPlate } from '../graphql/mutations';

// Amplify.configure(config)
const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config


const Admin = () => {
    const [image, setImage] = useState(null);
    const [plateDetails, setPlateDetails] = useState({ name: "", description: "", image: "", own: "", price: "" ,category:''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!plateDetails.name || !plateDetails.price) return
            await API.graphql(graphqlOperation(createPlate, { input: plateDetails }))
            setPlateDetails({ name: "", description: "", image: "", own: "", price: "", category:""})
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    const handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `images/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
        try {
            // Upload the file to s3 with public access level. 
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });
            // Retrieve the uploaded file to display
            const image = await Storage.get(key, { level: 'public' })
            setImage(image);
            setPlateDetails({ ...plateDetails, image: url });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="admin-wrapper">
            <AmplifyAuthenticator>
                <section>
                    <header className="form-header">
                        <h3>Add New Plates</h3>
                        <AmplifySignOut/>
                    </header>
                    <form className="form-wrapper" onSubmit={handleSubmit}>
                        <div className="form-image">
                            {image ? <img className="image-preview" src={image} alt="" /> : <input
                                type="file"
                                accept="image/jpg"
                                onChange={(e) => handleImageUpload(e)} />}

                        </div>
                        <div className="form-fields">
                            <div className="title-form">
                                <p><label htmlFor="title">Name</label></p>
                                <p><input
                                    name="email"
                                    type="title"
                                    placeholder="Type the title"
                                    onChange={(e) => setPlateDetails({ ...plateDetails, name: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="description-form">
                                <p><label htmlFor="description">Description</label></p>
                                <p><textarea
                                    name="description"
                                    type="text"
                                    rows="8"
                                    placeholder="Type the description of the book"
                                    onChange={(e) => setPlateDetails({ ...plateDetails, description: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="author-form">
                                <p><label htmlFor="author">own</label></p>
                                <p><input
                                    name="author"
                                    type="text"
                                    placeholder="Type the own's name"
                                    onChange={(e) => setPlateDetails({ ...plateDetails, own: e.target.value })}
                                    required
                                /></p>
                            </div>
                            <div className="price-form">
                                <p><label htmlFor="price">Price ($)</label>
                                    <input
                                        name="price"
                                        type="text"
                                        placeholder="What is the Price of the book (USD)"
                                        onChange={(e) => setPlateDetails({ ...plateDetails, price: e.target.value })}
                                        required
                                    /></p>
                            </div>
                            <div className="featured-form">
                                <p><label>Featured?</label>
                                    <input type="checkbox"
                                        className="featured-checkbox"
                                        checked={plateDetails.featured}
                                        onChange={() => setPlateDetails({ ...plateDetails, featured: !plateDetails.featured })}
                                    />
                                </p>
                            </div>
                            <div className="submit-form">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </section>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Admin
