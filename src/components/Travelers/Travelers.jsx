import paris from "../../assets/paris.webp";
import traveler1 from "../../assets/man.webp";
const Travelers = () => {
  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2>Top travelers of this month!</h2>

        <div className="travelersContainer grid">
          <div className="singleTraveler">
            <img src={paris} className="destinationImage" alt="" />
            <div className="travelerPicture">
              <img src={traveler1} alt="" className="travelerImage" />
            </div>
            <div className="travelerName">
              <span>Petro Poroshenko</span>
              <p>@getman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelers;
