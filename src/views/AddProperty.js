import React, { useEffect, useState } from 'react'
import "./AddProperty.css"
import axios from "axios";
import Map from '../components/Map';
import Select from 'react-select';

const baseurl = process.env.REACT_APP_BASE_URL;

const AddProperty = () => {
    const [formData, setFormData] = useState({
        title: '', propertyType: '', description: '', price: '', location: null, Size: '', Bedrooms: '', Bathrooms: '', address: '', photos: []
    });
    const [location, setLocation] = useState({ latitude: '', longitude: '' });
    const [propertyTypes, setPropertyTypes] = useState([]);
    let photos = []
    const getPropertyTypes = () => {
        axios({
            method: "get",
            url: baseurl + "/propertyTypes",
        }).then((res) => {
            console.log(res.data)
            let temp = res.data?.map((type) => {
                return { label: type.title, value: type._id }
            })
            setPropertyTypes(temp)
        }).catch((err) => {
            console.log(err)
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.propertyType || !formData.description || !formData.price || !formData.Size || !formData.Bedrooms || !formData.Bathrooms || !formData.address) {
            alert("Please fill all the details")
            return
        }
        let data = { ...formData, location: location }
        axios({
            method: "post",
            url: baseurl + "/properties",
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: data,
        })
            .then((res) => {
                console.log(res.data)
                alert("Property Added Successfully")
            })
            .catch((err) => {
                console.log(err)
                alert(err.response.data);
            })
    };
    const getCoordinates = (obj) => {
        setLocation(obj)
    };
    useEffect(() => {
        getPropertyTypes()
    }, [])


    return (
        <div className="property-listing">
            <h1>Post Your Property</h1>
            <div className="filters">
                <div>
                    <p>Please Tell us about your Property</p>
                    <div className="search-container" style={{ marginTop: "25px" }}>
                        <div style={{ margin: "0 10px" }}>
                            <span>Title:</span>
                            <input
                                type="text"
                                name="type"
                                value={formData.title}
                                onChange={(e) => {
                                    setFormData({ ...formData, title: e.target.value })
                                }}
                            />
                        </div>
                        <div style={{ textAlign: 'left', margin: "0 10px" }}>
                            <span>Property Type</span>
                            <Select
                                // value={formData.propertyType}
                                options={propertyTypes}
                                isClearable
                                isSearchable
                                onChange={(e) => {
                                    console.log(e)
                                    setFormData({ ...formData, propertyType: e?.value })
                                }}
                            />
                        </div>
                        <div style={{ margin: "0 10px" }}>
                            <span>Bedrooms:</span>
                            <input
                                type="number"
                                name="type"
                                value={formData.Bedrooms}
                                onChange={(e) => {
                                    setFormData({ ...formData, Bedrooms: e.target.value })
                                }}
                            />
                        </div>
                    </div>
                    <div className="search-container" style={{ marginTop: "20px" }}>
                        <div style={{ margin: "0 10px" }}>
                            <span>Size(In sqr ft):</span>
                            <input
                                type="number"
                                name="type"
                                value={formData.Size}
                                onChange={(e) => {
                                    setFormData({ ...formData, Size: e.target.value })
                                }}
                            />
                        </div>
                        <div style={{ textAlign: 'left', margin: "0 10px" }}>
                            <span>Price(Per Month):</span>
                            <input
                                type="number"
                                name="type"
                                value={formData.price}
                                onChange={(e) => {
                                    setFormData({ ...formData, price: e.target.value })
                                }}
                            />
                        </div>
                        <div style={{ margin: "0 10px" }}>
                            <span>Bathrooms:</span>
                            <input
                                type="number"
                                name="type"
                                value={formData.Bathrooms}
                                onChange={(e) => {
                                    setFormData({ ...formData, Bathrooms: e.target.value })
                                }}
                            />
                        </div>
                    </div>
                    <div className="search-container" style={{ marginTop: "20px" }}>
                        <div style={{ margin: "0 10px" }}>
                            <span>Photos(upto 10):</span>
                            <input
                                type="file"
                                multiple
                                name='photos'
                                accept="image/*"
                                // value={formData.photos}
                                onChange={(e) => {

                                    photos = Array.prototype.slice.call(e.target.files)
                                    setFormData({ ...formData, photos: photos })
                                }}
                            />
                        </div>
                        <div style={{ margin: "0 10px" }}>
                            <span>Description:</span>
                            <input
                                type="text"
                                name="type"
                                value={formData.description}
                                onChange={(e) => {
                                    setFormData({ ...formData, description: e.target.value })
                                }}
                            />
                        </div>
                        <div style={{ margin: "0 10px" }}>
                            <span>Address:</span>
                            <input
                                type="text"
                                name="type"
                                value={formData.address}
                                onChange={(e) => {
                                    setFormData({ ...formData, address: e.target.value })
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <p>Please Select location of the Property</p>
            <div className="filters">
                <Map getCoordinates={getCoordinates} />
            </div>
            <div className="search-container" style={{ marginTop: "25px" }}>
                <button type="button" className="button" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default AddProperty
