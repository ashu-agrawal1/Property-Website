import React from 'react'
import "./Login.css"
import { NavLink } from 'react-router-dom'
import "./property.scss"

const baseurl = process.env.REACT_APP_BASE_URL;
const Property = ({ data, isDelete, deleteHandler }) => {
    const onDelete = () => {
        deleteHandler(data._id)
    }

    return (
        <div
            className="swiper-slide swiper-slide-active"
            role="group"
            aria-label="1 / 8"
            style={{ width: 296, marginRight: 16 }}
        >
            <div className="mb-home__owner-prop__card card-shadow">
                <a
                    href="javascript:void(0);"
                    onclick="fireDynamicPropGTM(event,'Owner Property','https://www.magicbricks.com/propertyDetails/3-BHK-100-Sq-yrd-Multistorey-Apartment-FOR-Sale-Kiran-Garden-in-New-Delhi&id=4d423730353631333135');mbHomeWeb.redirectURL(event, 'https://www.magicbricks.com/propertyDetails/3-BHK-100-Sq-yrd-Multistorey-Apartment-FOR-Sale-Kiran-Garden-in-New-Delhi&id=4d423730353631333135');"
                >
                    <div className="mb-home__owner-prop__card--graphic">
                        <img
                            className="swiper-lazy swiper-lazy-loaded"
                            src={baseurl + '/' + data?.photos[0]}
                            width={294}
                            height={156}
                            alt={data.title}
                            title={data.title}
                        />
                    </div>
                    <div className="mb-home__owner-prop__card--content">
                        <div className="mb-home__owner-prop__card--type">{data.propertyType}</div>
                        <div className="mb-home__owner-prop__card--price">
                            <span className="rupees">₹</span>{data.price}
                            <span className="mb-home__owner-prop__card--size">{data.Size} sqft</span>
                        </div>
                        <div className="mb-home__owner-prop__card--loc">
                            {data?.location?.city}
                        </div>
                        <div className="mb-home__owner-prop__card--status">Ready to Move</div>
                        <NavLink to={`/details?id=${data._id}`}>
                            <div className="mb-home__action">
                                <span className="mb-home__action--btn btn-red medium">
                                    View Details
                                </span>
                            </div>
                        </NavLink>
                        {isDelete &&
                            <div className="mb-home__action" style={{ left: "150px" }} onClick={onDelete}>
                                <span className="mb-home__action--btn btn-red medium">
                                    Delete
                                </span>
                            </div>}
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Property
