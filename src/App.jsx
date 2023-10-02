import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Lounge from "./components/Lounge/Lounge";
import Support from "./components/Support/Support";
import Search from "./components/Search/Search";
import Travelers from "./components/Travelers/Travelers";
import Subscribers from "./components/Subscribers/Subscribers";
import Info from "./components/Info/Info";
const App = () => (
  <div>
    <Navbar />
    <Home />
    <Lounge/>
    <Support/>
    <Search/>
    <Travelers/>
    <Subscribers/>
    <Info/>
  </div>
);

export default App;
