import React, { useEffect, useState } from 'react'
import "./Properties.css"
import { NavLink, Outlet } from 'react-router-dom'
import Property from "./Property"
import Select from 'react-select';

import Slider from "../components/Slider"
import Slider2 from "../components/Slider2"
import axios from "axios";

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
    }).then((res) => {
      console.log(res.data)
      let temp = res.data?.map((type) => {
        return { label: type.city, value: type.city }
      })
      setCities(temp)
    });
  };
  const getProperties = () => {
    axios({
      method: "get",
      url: baseurl + "/properties",
    }).then((res) => {
      console.log(res.data)
      setProperties(res.data)
    });
  };

  const searchHandler = () => {
    axios({
      method: "post",
      url: baseurl + "/properties/filter",
      data: { ...filters, minSize, maxSize, maxPrice, minPrice }
    }).then((res) => {
      console.log(res.data)
      setProperties(res.data)
    });
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
    }).then((res) => {
      console.log(res.data)
      let temp = res.data?.map((type) => {
        return { label: type.title, value: type._id }
      })
      setPropertyTypes(temp)
    });
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
      <div className="filters">
        <div>
          <p>Filter Properties based on your choice</p>
          <div className="search-container" style={{ marginTop: "25px" }}>
            <div>
              <span>City</span>
              <Select
                options={cities}
                isClearable
                isSearchable
                onChange={(e) => {
                  console.log(e)
                  setFilters({ ...filters, city: e?.value })
                }}
              />
            </div>
            <div style={{ textAlign: 'left' }}>
              <span>Price:</span>
              <Slider Values={PriceValues}></Slider>
            </div>
            <div>
              <span>Bedrooms</span>
              <input
                type="number"
                name="type"
                value={filters.Bedrooms}
                onChange={(e) => {
                  setFilters({ ...filters, Bedrooms: e.target.value })
                }}
              />
            </div>
          </div>
          <div className="search-container" style={{ marginTop: "25px" }}>
            <div>
              <span>Property Type</span>
              <Select
                options={propertyTypes}
                isClearable
                isSearchable
                onChange={(e) => {
                  console.log(e)
                  setFilters({ ...filters, propertyType: e?.value })
                }}
              />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div>
                <span>Size(in Sqr ft):</span>
                <Slider2 Values={SizeValues}></Slider2>
              </div>
            </div>
            <div>
              <span>Bathrooms</span>
              <input
                type="number"
                name="type"
                value={filters.Bathrooms}
                onChange={(e) => {
                  setFilters({ ...filters, Bathrooms: e.target.value })
                }}
              />
            </div>
          </div>

          <div className="search-container" style={{ marginTop: "15px" }}>
            <button type="button" className="button" onClick={searchHandler}>
              Search
            </button>
            <button type="button" className="button" onClick={clearHandler}>
              Clear Filters
            </button>
          </div>
        </div>
      </div>
      <div>
        {properties.map((property) => (
          <div className="filters">
            <Property data={property} />
          </div>
        ))}
      </div>
    </div>

  )
}

export default FeatureCard
