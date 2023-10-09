import paris from "../../assets/paris.webp";
import dubai from "../../assets/dubai.jpg";
import newyork from "../../assets/newyork.webp";

import traveler1 from "../../assets/man.webp";
import traveler2 from "../../assets/man2.jpg";
import traveler3 from "../../assets/man3.jpg";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "Petro Poroshenko",
    socialLink: "@getman",
  },
  {
    id: 2,
    destinationImage: dubai,
    travelerImage: traveler2,
    travelerName: "Hennadii Kernes",
    socialLink: "@gepa",
  },
  {
    id: 3,
    destinationImage: newyork,
    travelerImage: traveler3,
    travelerName: "Arsenii Yachenuk",
    socialLink: "@zaic",
  },
];

const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>
        <div className="travelersContainer grid">
          {travelers.map((item) => (
            <div className="singleTraveler" key={item.id}>
              <img
                src={item.destinationImage}
                className="destinationImage"
                alt="destination Image"
              />
              <div className="travelerPicture">
                <img
                  src={item.travelerImage}
                  alt="traveler image"
                  className="travelerImage"
                />
              </div>
              <div className="travelerName">
                <span>{item.travelerName}</span>
                <p>{item.socialLink}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
