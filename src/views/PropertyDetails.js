import React, { useEffect, useState } from "react";
import "./Login.css"
import axios from "axios";

import { useSearchParams } from "react-router-dom";
import MapView from "../components/MapView";
const baseurl = process.env.REACT_APP_BASE_URL;

export default function PropertyDetails() {
    const [searchParams, setSearchParams] = useSearchParams();
    const propertyId = searchParams.get('id')
    const [propertyDetails, setPropertyDetails] = useState({});
    const [propertyTypes, setPropertyTypes] = useState([]);
    const getPropertyDetails = (id) => {
        axios({
            method: "get",
            url: baseurl + `/properties/${id}`,
        }).then((res) => {
            console.log(res.data)
            setPropertyDetails(res.data)
        }).catch((err) => {
            console.log(err)
        })
    };
    const getPropertyTypes = () => {
        axios({
            method: "get",
            url: baseurl + "/propertyTypes",
        }).then((res) => {
            console.log(res.data)
            setPropertyTypes(res.data)
        }).catch((err) => {
            console.log(err)
        })
    };
    useEffect(() => {
        getPropertyTypes()
        getPropertyDetails(propertyId)
    }, [])
    return (
        <div className="property-listing">
            <h1>Details</h1>
            <div className="filters">
                <div>
                    <h3>{propertyDetails.title}</h3>
                    {propertyDetails?.photos?.length > 0 &&
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                {
                                    propertyDetails?.photos?.map((url, i) => {
                                        return (
                                            <li
                                                data-target="#carouselExampleIndicators"
                                                data-slide-to={i}
                                                className={i == 0 ? "active" : ''}
                                            />
                                        )
                                    })
                                }
                            </ol>
                            <div className="carousel-inner">
                                {
                                    propertyDetails?.photos?.map((url, i) => {
                                        return (
                                            <div className={i == 0 ? "carousel-item active" : 'carousel-item'}>
                                                <img
                                                    className="d-block w-100"
                                                    src={baseurl + '/' + url}
                                                    alt="First slide"
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleIndicators"
                                role="button"
                                data-slide="next"
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    }
                    <h2>{propertyDetails.description}</h2>
                    {propertyDetails?.location?.city &&
                        <h2>City:{propertyDetails?.location?.city || ''}</h2>
                    }
                    <h2>Price: {propertyDetails.price}</h2>
                    <p>{propertyDetails?.propertyType && propertyTypes?.length > 0 && propertyTypes.find((type) => type._id == propertyDetails?.propertyType)?.title}</p>
                    <p>Size: {propertyDetails.Size}</p>
                    <p>Bedrooms: {propertyDetails.Bedrooms}</p>
                    <p>Bathrooms: {propertyDetails.Bathrooms}</p>
                    <p>Address: {propertyDetails.address}</p>
                    <div className="search-container" style={{ marginTop: "25px" }}>
                    </div>
                    <div className="search-container" style={{ marginTop: "25px" }}>
                    </div>
                    {propertyDetails?.location?.latitude && propertyDetails?.location?.longitude &&
                        <>
                            <h4>Location of the Property</h4>
                            <div className="filters">
                                <MapView selectedLocation={{ lat: propertyDetails?.location?.latitude, lng: propertyDetails?.location?.longitude }} />
                            </div>
                        </>
                    }
                    <div>
                        <h1>Owner Details</h1>
                        <p>Name:{propertyDetails?.owner?.firstName + " " + propertyDetails?.owner?.lastName}</p>
                        <p>Mobile:{propertyDetails?.owner?.mobile}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
