import React from "react";
// import 'react-toastify/dist/ReactToastify.css';

import { BsShare } from "react-icons/bs";

import { Link } from "react-router-dom";

import img01 from '../../Images/01.png';

function HomeCard() {
  const cardInfo = [
    {
      id: "1",
      bdCity: "Homagama",
      bdTown: "Habarakada",
      bdCode: "WP10204",
      bdDescription:
        "Boarding House Type: Home",
    },
    {
      id: "2",
      bdCity: "Colombo",
      bdTown: "Borella",
      bdCode: "WP00800",
      bdDescription:
        "Boarding House Type: Apartment",
    },
    {
      id: "3",
      bdCity: "Dehiwalla",
      bdTown: "Mount Lavinia",
      bdCode: "WP10350",
      bdDescription:
        "Boarding House: Room",
    },
    {
      id: "4",
      bdCity: "Nugegoda",
      bdTown: "Gangodavila",
      bdCode: "WP10250",
      bdDescription:
        "Boarding House Type: Apartment",
    },
    {
      id: "5",
      bdCity: "Matara",
      bdTown: "Nupe Junction",
      bdCode: "SP81071",
      bdDescription:
        "Boarding House Type: Room",
    },
    {
      id: "6",
      bdCity: "Kelaniya",
      bdTown: "Dippitigoda",
      bdCode: "WP11600",
      bdDescription:
        "Boarding House Type: House",
    },
  ];

  const imagUrl = img01;

const cardRender = (card, index) => {
return (
    <div className="col-xl-4 col-md-6 py-4 px-4 col d-flex justify-content-center" key={index}>
    <div className="card " style={{ width: "20rem" }}>
        <div className="card-body">
        <div className="container">
            <div className="row">
            <div className="col-4">
                <Link className="btn float-end">
                <BsShare />
                </Link>
            </div>
            </div>
            <div className="row">
            <div className=" col-12">
                <h5 className="card-title">
                {card.bdCity}-{card.bdTown}
                </h5>
                <p className="card-subtitle">{card.bdCode}</p>
            </div>
            </div>
        </div>
        </div>
        <img src={imagUrl} alt="card" />
        <div className="card-body">
        <p className="card-text">{card.bdDescription}</p>
        <Link to={`/element/${card.id}`} className="btn btn-dark">View</Link>
        <button className="btn btn-secondary float-end">Save</button>
        </div>
    </div>
    </div>
);
};

return <div className="row">{cardInfo.map(cardRender)}</div>;
}

export default HomeCard;
