import React from 'react'
import "./Login.css"
import { NavLink } from 'react-router-dom'
import './Property.css'

const baseurl = process.env.REACT_APP_BASE_URL;
const Property = ({ data, isDelete, deleteHandler }) => {
    const onDelete = () => {
        deleteHandler(data._id)
    }

    return (
        <div className="mb-srp__list" id="cardid52661367">
            <div className="mb-srp__card">
                <div className="mb-srp__card__container" style={{ boxSizing: "border-box" }}>
                    <div className="mb-srp__card__photo">
                        <div className="mb-srp__card__photo__fig">
                            <span className="mb-srp__card__photo__fig--count">
                            </span>
                            <img
                                src={baseurl + '/' + data?.photos[0]}
                                decoding="async"
                                alt={data.title}
                                title={data.title}
                                width="100%"
                                height="100%"
                                className="mb-srp__card__photo__fig--graphic customLazy"
                            />
                        </div>
                    </div>
                    <div className="mb-srp__card__info mb-srp__card__info-withoutburger">
                        <h2
                            className="mb-srp__card--title"
                            title={data.title}
                        >
                            {data.title}
                        </h2>
                        <span />
                        <div className="mb-srp__card__summary">
                            <div className="mb-srp__card__summary__list">
                                <div
                                    className="mb-srp__card__summary__list--item"
                                    data-summary="carpet-area"
                                >
                                    <div className="mb-srp__card__summary--label">Carpet Area</div>
                                    <div className="mb-srp__card__summary--value">{data.Size} sqft</div>
                                </div>
                                <div
                                    className="mb-srp__card__summary__list--item"
                                    data-summary="carpet-area"
                                >
                                    <div className="mb-srp__card__summary--label">City</div>
                                    <div className="mb-srp__card__summary--value">{data?.location?.city}</div>
                                </div>
                                <div
                                    className="mb-srp__card__summary__list--item"
                                    data-summary="carpet-area"
                                >
                                    <div className="mb-srp__card__summary--label">Bedrooms</div>
                                    <div className="mb-srp__card__summary--value">{data?.Bedrooms}</div>
                                </div>
                                <div
                                    className="mb-srp__card__summary__list--item"
                                    data-summary="carpet-area"
                                >
                                    <div className="mb-srp__card__summary--label">Bathrooms</div>
                                    <div className="mb-srp__card__summary--value">{data.Bathrooms}</div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-srp__card--desc remove-truncated">
                            <div className="mb-srp__card--desc--text">
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-srp__card__estimate " style={{ boxSizing: "border-box" }}>
                    <div className="mb-srp__card__price">
                        <div className="mb-srp__card__price--amount">
                            <span className="rupees">₹</span>{data.price}
                            <span className="mb-srp__card__price--ico-info" />
                        </div>
                        <div className="mb-srp__card__price--size">
                            <span className="rupees">₹</span>{Math.floor(data.price * 100 / data.Size) / 100} per sqft{" "}
                        </div>
                    </div>
                    <NavLink to={`/details?id=${data._id}`}>
                        <div className="mb-srp__action action--single mb-srp__card__action">
                            <span className="mb-srp__action--btn medium btn-red">
                                View Details
                            </span>
                        </div>
                    </NavLink>
                    {isDelete &&
                        <div className="mb-srp__action action--single mb-srp__card__action" onClick={onDelete}>
                            <span className="mb-srp__action--btn medium btn-red">
                                Delete Property
                            </span>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Property
