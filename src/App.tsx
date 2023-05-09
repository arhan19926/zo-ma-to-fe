import React from "react";
import logo from "./logo.svg";
import styles from "./sass/app.module.scss";
import Login from "./pages/login/rightPanelLogin";
import HomePage from "./pages/login/leftPanel";
import Navbar from "./components/navbar";
import Maincontainer from "./pages/login/mainContainer";
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
