import React, { useEffect, useState } from 'react'
import "./Properties.css"
import { NavLink, Outlet } from 'react-router-dom'
import Property from "./Property"
import Select from 'react-select';

import Slider from "../components/Slider"
import Slider2 from "../components/Slider2"
import axios from "axios";
import FilProperties from '../components/FilProperties';

const baseurl = process.env.REACT_APP_BASE_URL;
let minSize = 0;
let maxSize = 50000;
let minPrice = 0;
let maxPrice = 50000;
const FeatureCard = () => {
  const [filters, setFilters] = useState({
    propertyType: '', city: '', Bedrooms: '', Bathrooms: ''
  });
  const [cities, setCities] = useState([]);
  const [properties, setProperties] = useState([]);
  const getCities = () => {
    axios({
      method: "get",
      url: baseurl + "/properties/cities",
    })
      .then((res) => {
        console.log(res.data)
        let temp = res.data?.map((type) => {
          return { label: type.city, value: type.city }
        })
        setCities(temp)
      })
      .catch(e => {
        console.log(e);
      })
  };
  const getProperties = () => {
    axios({
      method: "get",
      url: baseurl + "/properties",
    })
      .then((res) => {
        console.log(res.data)
        setProperties(res.data)
      })
      .catch(e => {
        console.log(e);
      })
  };

  const searchHandler = () => {
    axios({
      method: "post",
      url: baseurl + "/properties/filter",
      data: { ...filters, minSize, maxSize, maxPrice, minPrice }
    })
      .then((res) => {
        console.log(res.data)
        setProperties(res.data)
      })
      .catch(e => {
        console.log(e);
      })
  };
  const clearHandler = () => {
    getProperties()
    minSize = 0;
    maxSize = 50000;
    minPrice = 0;
    maxPrice = 50000;
    setFilters({
      propertyType: '', city: '', Bedrooms: '', Bathrooms: ''
    })
  };
  const [propertyTypes, setPropertyTypes] = useState([]);
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
      .catch(e => {
        console.log(e);
      })
  };

  const SizeValues = (min, max) => {
    minSize = min
    maxSize = max
  };

  useEffect(() => {
    getCities()
    getProperties()
    getPropertyTypes()
  }, [])
  const PriceValues = (minP, maxP) => {
    minPrice = minP
    maxPrice = maxP
  };

  return (
    <div className="property-listing">
      <h1>Properties For Rent</h1>

      <FilProperties />
      {properties?.length > 0 &&
        <div className="container">
          <div className="row">
            {properties?.map((property) => (
              <div className="col">
                <Property data={property} />
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  )
}

export default FeatureCard
