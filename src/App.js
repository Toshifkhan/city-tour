import { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourLists from "./components/TourList";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <TourLists />
      </>
    );
  }
}

export default App;
