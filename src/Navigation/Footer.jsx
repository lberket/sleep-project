import logo from "../images/Slika3.png";
import './Footer.css';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const Footer = () => {

    const [cart, setCart] = useState(0)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const buttonStyle = {
        border: "none",
        backgroundColor: "rgba(230, 230, 250, 0)",
        marginTop: "2px"
    }

    return (

        <>
            <footer className="page-footer pt-3">



                <div className="container-fluid text-center text-md-left">
                    <div className="row">


                        <div className="col-md-6 mt-md-0 mt-3" >

                            <div className="info">

                                <h5>
                                    <img src={logo} id="logo1" alt="" />
                                </h5>


                            </div>
                            <p id="about-us">
                            We are a dedicated team composed of young physicians and researchers from Harvard Medical School and Croatia. Our main goal 
                            is to ensure that athletes get the quality sleep they need to perform at their best. We conduct research on the prevalence of sleep quality in clubs, teams, and 
                            individual players to raise awareness of the importance of sleep quality in athletic performance, inform teams and players how they 
                            sleep, as well as created personalized approaches to help them sleep better.
                            </p>
                        </div>


                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-2 mb-md-0 mb-2">
                            <h5 className="text-bold">Product</h5>
                            <ul className="list-unstyled">
                                <li><a className="lll" href="#!">Books</a></li>
                                <li><a className="lll" href="events">Events</a></li>
                                <li><a className="lll" href="articles">Articles</a></li>

                            </ul>
                        </div>

                        <div className="col-md-2 mb-md-0 mb-2">
                            <h5 className="text-bold">Interact</h5>
                            <ul className="list-unstyled">
                                <li><a className="lll" href="https://gmail.us5.list-manage.com/subscribe?u=53a55e95c2046d2c099fcc543&id=4a6cdbd34c">Newsletter</a></li>
                                <li><a className="lll" href="#!">Contact us</a></li>
                                <li><a className="lll" href="#!">Book an event</a></li>
                            </ul>
                        </div>


                        <div className="col-md-2 mb-md-0 mb-2 d-flex justify-content-center align-items-center">

                        <Button variant="light" onClick={handleShow} style={{ fontWeight: 700, fontSize: 20, display: "flex", alignItems: "center" }}>
                                <div style={{ marginRight: '5px' }}>Cart</div>
                                <svg className="w-commerce-commercecartopenlinkicon" width="17px" height="17px" viewBox="0 0 17 17">
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <path d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z" fill="currentColor" fillRule="nonzero">
                                        </path>
                                    </g>
                                </svg>
                            </Button> 


                            <Modal show={show} onHide={handleClose} style={{ top: "20%" }}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Your Cart</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <br />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </div>

                        <div className="footer-copyright text-center py-3">© 2023 SomnoTeam
                        </div>

                    </div>
                </div>


            </footer>
        </>
    )
}

export default Footer