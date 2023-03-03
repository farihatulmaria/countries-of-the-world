import React from 'react';

const Country = ({country}) => {
    const {flags,name,capital,region,subregion} =country;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-10 mx-auto">
            <figure>
                <img src={flags.png} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name.common}</h2>
                <h3>Capital: {capital}</h3>
                <h3>Region: {region}</h3>
                <h3>Sub Region: {subregion}</h3>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default Country;
