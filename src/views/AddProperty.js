import React, { useEffect, useState } from 'react'
import "./AddProperty.css"
import axios from "axios";
import Map from '../components/Map';

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
        })
            .then((res) => {
                console.log(res.data)
                let temp = res.data?.map((type) => {
                    return { label: type.title, value: type._id }
                })
                setPropertyTypes(temp)
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formData", formData);
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
                    <form action="#">
                        <div className="row">

                            <div className="form-group col-md-4">
                                <label htmlFor="bedrooms">Title</label>
                                <input type="text" className="form-control" value={formData.title} onChange={(e) => {
                                    setFormData({ ...formData, title: e.target.value })
                                }} />
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="ptype">Property Type</label>
                                <select className="form-control" id="ptype" onChange={(e) => {
                                    console.log(e)
                                    setFormData({ ...formData, propertyType: e?.target?.value })
                                }}>
                                    {propertyTypes?.map((p) => {
                                        return (
                                            <option value={p.value}>{p.label}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="bedrooms">Bedrooms</label>
                                <input type="number" className="form-control" id='bedrooms' value={formData.Bedrooms} name="type" onChange={(e) => {
                                    setFormData({ ...formData, Bedrooms: e.target.value })
                                }} />
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="size">Size(In sqr ft)</label>
                                <input type="number" className="form-control" id='size'
                                    value={formData.Size} name="type" onChange={(e) => {
                                        setFormData({ ...formData, Size: e.target.value })
                                    }} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="price">Price(Per Month):</label>
                                <input type="number" className="form-control" id='price'
                                    value={formData.price} name="type" onChange={(e) => {
                                        setFormData({ ...formData, price: e.target.value })
                                    }} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="price">Bathrooms:</label>
                                <input type="number" className="form-control" id='price'
                                    value={formData.Bathrooms} name="type" onChange={(e) => {
                                        setFormData({ ...formData, Bathrooms: e.target.value })
                                    }} />
                            </div>


                            <div className="form-group col-md-4">
                                <label htmlFor="price">Photos(upto 10):</label>
                                <input type="file" multiple
                                    name='photos' className="form-control" id='price'
                                    accept="image/*"
                                    onChange={(e) => {

                                        photos = Array.prototype.slice.call(e.target.files)
                                        setFormData({ ...formData, photos: photos })
                                    }} />
                            </div>

                            <div className="form-group col-md-4">
                                <label htmlFor="desc">Description</label>
                                <textarea className="form-control" id="desc" rows="3"
                                    value={formData.description} onChange={(e) => {
                                        setFormData({ ...formData, description: e.target.value })
                                    }}></textarea>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="desc">Address</label>
                                <textarea className="form-control" id="desc" rows="3"
                                    value={formData.address} onChange={(e) => {
                                        setFormData({ ...formData, address: e.target.value })
                                    }}
                                ></textarea>
                            </div>
                        </div>
                    </form>
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
