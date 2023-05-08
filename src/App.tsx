import React from "react";
import logo from "./logo.svg";
import styles from "./sass/app.module.scss";
import Login from "./components/Login";
import HomePage from "./components/branding";
import Navbar from "./components/navbar";
import Maincontainer from "./components/main-container";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AppRoutes/>

    </div>
  );
}

export default App;
