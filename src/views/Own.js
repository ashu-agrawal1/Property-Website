import React, { useEffect, useState } from 'react'
import "./Properties.css"
import Property from "./Property"
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const baseurl = process.env.REACT_APP_BASE_URL;
const Own = () => {

  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const getProperties = () => {
    axios({
      method: "get",
      url: baseurl + "/properties/own",
    }).then((res) => {
      console.log(res.data)
      setProperties(res.data)
    }).catch((err) => {
      console.log(err)
      alert(err?.response?.data);
      navigate("/login")
    })
  };

  const deleteHandler = (id) => {
    axios({
      method: "delete",
      url: baseurl + "/properties/" + id,
    }).then((res) => {
      console.log(res.data)
      alert("Property Deleted Successfully")
      getProperties()
    })
      .catch((err) => {
        console.log(err)
        alert(err?.response?.data?.error);
      })
  };

  useEffect(() => {
    getProperties()
  }, [])
  return (
    <div className="property-listing">
      <h1>Your Properties</h1>
      <div>
        {properties.map((property) => (
          <div className="filters">
            <Property data={property} isDelete="true" deleteHandler={deleteHandler} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Own
