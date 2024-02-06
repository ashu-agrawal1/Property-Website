import React, { useEffect, useState } from "react";
import "./Filters.css";
import Select from "react-select";
import Slider from "./Slider";
import Slider2 from "./Slider2";
import axios from "axios";
const baseurl = process.env.REACT_APP_BASE_URL;
let minSize = 0;
let maxSize = 50000;
let minPrice = 0;
let maxPrice = 50000;

export default function FilProperties() {
  const [filters, setFilters] = useState({
    propertyType: "",
    city: "",
    Bedrooms: "",
    Bathrooms: "",
  });
  const [cities, setCities] = useState([]);
  const [properties, setProperties] = useState([]);
  const getCities = () => {
    axios({
      method: "get",
      url: baseurl + "/properties/cities",
    })
      .then((res) => {
        console.log(res.data);
        let temp = res.data?.map((type) => {
          return { label: type.city, value: type.city };
        });
        setCities(temp);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getProperties = () => {
    axios({
      method: "get",
      url: baseurl + "/properties",
    })
      .then((res) => {
        console.log(res.data);
        setProperties(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const searchHandler = () => {
    axios({
      method: "post",
      url: baseurl + "/properties/filter",
      data: { ...filters, minSize, maxSize, maxPrice, minPrice },
    })
      .then((res) => {
        console.log(res.data);
        setProperties(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const clearHandler = () => {
    getProperties();
    minSize = 0;
    maxSize = 50000;
    minPrice = 0;
    maxPrice = 50000;
    setFilters({
      propertyType: "",
      city: "",
      Bedrooms: "",
      Bathrooms: "",
    });
  };
  const [propertyTypes, setPropertyTypes] = useState([]);
  const getPropertyTypes = () => {
    axios({
      method: "get",
      url: baseurl + "/propertyTypes",
    })
      .then((res) => {
        console.log(res.data);
        let temp = res.data?.map((type) => {
          return { label: type.title, value: type._id };
        });
        setPropertyTypes(temp);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const SizeValues = (min, max) => {
    minSize = min;
    maxSize = max;
  };

  useEffect(() => {
    getCities();
    getProperties();
    getPropertyTypes();
  }, []);
  useEffect(() => {
    // var slider = new Slider(document.getElementById(""),{});
  }, []);
  const PriceValues = (minP, maxP) => {
    minPrice = minP;
    maxPrice = maxP;
  };

  //     <div className="search-container" style={{ marginTop: "25px" }}>
  //
  // </div>
  // <div className="search-container" style={{ marginTop: "25px" }}>
  //     <div>
  //         <span>Property Type</span>
  //         {/* <Select
  //             options={propertyTypes}
  //              isClearable
  //             isSearchable
  //             onChange={(e) => {
  //             console.log(e)
  //             setFilters({ ...filters, propertyType: e?.value })
  //                 }}
  //             className='form-select '
  //             /> */}
  // <select className="form-select form-select-lg" onChange={(e) => {
  //     console.log(e)
  //     setFilters({ ...filters, propertyType: e?.value })
  // }}>
  //             {propertyTypes?.map((p) => {
  //                 return (
  //                     <option value={p.value}>{p.label}</option>
  //                 )
  //             })}
  //         </select>
  //     </div>
  //     <div style={{ textAlign: 'left' }}>
  //         <div>
  //             <span>Size(in Sqr ft):</span>
  //             <Slider2 Values={SizeValues}></Slider2>
  //         </div>
  //     </div>
  // </div>
  return (
    <div className="filters-f">
      <p className="f-p">Filter Properties based on your choice</p>
      <div className="f-container">
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            className="form-control"
            id="city"
            onChange={(e) => {
              console.log(e);
              setFilters({ ...filters, city: e?.value });
            }}
          >
            {cities?.map((p) => {
              return <option value={p.value}>{p.label}</option>;
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ptype">Property Type</label>
          <select
            className="form-control"
            id="ptype"
            onChange={(e) => {
              console.log(e);
              setFilters({ ...filters, propertyType: e?.value });
            }}
          >
            {propertyTypes?.map((p) => {
              return <option value={p.value}>{p.label}</option>;
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            type="number"
            className="form-control"
            id="bedrooms"
            max={"10"}
            value={filters.Bedrooms}
            onChange={(e) => {
              setFilters({ ...filters, Bedrooms: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            type="number"
            className="form-control"
            id="bathrooms"
            max={"10"}
            value={filters.Bathrooms}
            onChange={(e) => {
              setFilters({ ...filters, Bathrooms: e.target.value });
            }}
          />
        </div>

        <div>
          <button
            type="button"
            className=" btn btn-danger"
            onClick={searchHandler}
            style={{
              marginRight: "15px",
              marginBottom: "20px",
              borderRadius: "50px",
            }}
          >
            Search
          </button>
          <button
            type="button"
            className=" btn btn-danger"
            onClick={clearHandler}
            style={{
              marginRight: "15px",
              marginBottom: "20px",
              borderRadius: "50px",
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}
