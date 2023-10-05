import { aeroplane } from "../../assets/aeroplane.png";
const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <a href="https://pikbest.com/video/nature-sky-mountain-peaks-rolling-sunset-mountains-river-time-lapse_6452131.html"></a>

          {/* <video src="" className="video"></video> */}
        </div>
        <img src={aeroplane} alt="" className="plane" />
      </div>
    </div>
  );
};

export default Home;
