import logo from "../images/logo.png";
import './Navbar.css';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React from 'react';

const Navbar = ({ onSearch }) => {


  const articles = [
    "Back to school - later? Sleep, school start times and academic performance",
    "Short sleep a day keeps your memories far away",
    "Can regular exercise help you sleep better?"
  ]
  let a = [];
  let l = [];

  const [show, setShow] = useState(false);
  const [showR, setShowR] = useState(false);

  const [selected, setSelected] = useState([]);
  const [links, setLinks] = useState([]);


  const [search, setSearch] = useState("");


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseR = () => setShowR(false);
  const handleShowR = () => setShowR(true);

  const handleSearch = () => {
    a = [];
    l = [];

    onSearch(search);
    setShow(false);


    for (let i = 0; i < articles.length; i++) {
      if ((articles[i].toLowerCase()).includes(search.toLowerCase())) {
        a.push(articles[i])
        l.push(`article${i + 1}`)
      }
    }

    setSelected(a);
    setLinks(l);


    setShowR(true);


  };

  const handleChange = (e) => setSearch(e.target.value);


  const buttonStyle = {
    border: "none",
    backgroundColor: "rgba(230, 230, 250, 0)",
    marginTop: "2px"
  }

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand">
        <img src={logo} alt="" className="logo" />
      </a>
      {/*           <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="articles">
              Articles
            </a>
          </li>
        </ul>



        <ul className="right-nav navbar-nav">

          <li className="nav-item">
            <Button className="subscribe" variant="outline-danger" style={{ fontWeight: "bold" }} href="https://gmail.us5.list-manage.com/subscribe?u=53a55e95c2046d2c099fcc543&id=4a6cdbd34c">Subscribe</Button>
          </li>
          <li className="nav-item">
            <Button style={{ backgroundColor: "rgba(0,0,0,0)", color: "black", border: "none" }} onClick={handleShow}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg></Button>
          </li>

        </ul>




        <Modal show={show} onHide={handleClose} style={{ top: "20%" }}>
          <Modal.Header closeButton>
            <Modal.Title>Search for articles</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Form style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Group className="mb-3" controlId="formBasicEmail" style={{ flexGrow: 1 }}>
                <Form.Control type="search" onChange={handleChange} />
              </Form.Group>

              <Button
                variant="primary"
                type="button"
                style={{ backgroundColor: 'rgba(0,0,0,0)', color: 'black', border: 'none', marginTop: "-1rem" }}
                onClick={handleSearch}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>








        <Modal show={showR} onHide={handleCloseR} style={{ top: "20%" }}>
          <Modal.Header closeButton>
            <Modal.Title>Search result</Modal.Title>
          </Modal.Header>
          <Modal.Body>
{/* 
            {selected.map((element, index) => (
              <React.Fragment key={index}>
                <a href={`${links[index]}`}>{element}</a>
                <hr />
              </React.Fragment>
            ))} */}
 {selected.length > 0 ? (
      selected.map((element, index) => (
        <React.Fragment key={index}>
          <a href={`${links[index]}`}>{element}</a>
          <hr />
        </React.Fragment>
      ))
    ) : (
      <h6 style={{color:"gray"}}>No results</h6>
    )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseR}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>













      </div>
    </nav>
  );
};
export default Navbar;