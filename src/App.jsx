import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.jsx";
import Footer from "./Navigation/Footer.jsx";
import Home from "./Components/Home"
import Articles from "./Components/Articles"
import Events from "./Components/Events"
import Search from "./Components/Search"
import { useState, useEffect, useRef } from 'react';
import A1 from "./Components/Articles/A1"
import A2 from "./Components/Articles/A2"
import A3 from "./Components/Articles/A3"




function App() {

  const [tema, postaviTemu] = useState("User");
  const [searchFor, setSearchFor] = useState("");
  const [show, setShow] = useState(false);

  const handleSearch = (search) => {
    setSearchFor(search);
    setShow(true);
  }; 
  
  

  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home></Home>
      break
    case "/articles":
      component = <Articles admin={tema}></Articles>
      break
    case "/events":
      component = <Events admin={tema}></Events>
      break
    case "/article1":
      component = <A1 />
      break
    case "/article2":
      component = <A2 />
      break
    case "/article3":
      component = <A3 />
      break

  }

  function promjenaTeme() {
    postaviTemu(tema == "User" ? "Admin" : "User");
  }

  return (
    <>

      <Navbar onSearch={handleSearch} />

      {component}




      <Footer />

    </>
  )
}

export default App
