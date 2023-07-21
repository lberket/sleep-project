import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import sleep from "../images/sleep1.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import exercise from "../images/exercise1.jpg";
import school from "../images/school.jpg";
import background from "../images/bg.jpg";
import React, { useEffect, useState } from 'react';




function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 700);
      };
  
      handleResize(); // Check initial screen width
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
return(
    <>



{/* 
<div className="beggining" style={{ position: 'relative' }}>
  <img src={background} style={{ width: '100%' }} alt="" />
  <h1
    className='text-title'
  >
    Sleep: the body's <br />
    rest cycle
  </h1>
  <p className="beggining-text">
  Sleep is increasingly recognized as the main pillar of <strong>mental and physical health</strong>. Optimal sleep is essential for <u>cognitive and motor performance, mood, immunity, metabolism and many other important processes</u>.
  </p>
</div> */}

<div className="beggining" style={{ position: 'relative' }}>
      <img src={background} style={{ width: '100%' }} alt="" />


<div className='headpage'>


<h1 className='text-title'>
        Sleep: the body's <br />
        rest cycle
      </h1>
      <p
        className="beggining-text"
        style={{ display: isMobile ? 'none' : 'block' }}
      >
        Sleep is increasingly recognized as the main pillar of <strong>mental and physical health</strong>. Optimal sleep is essential for <u>cognitive and motor performance, mood, immunity, metabolism, and many other important processes</u>.
      <br />
      <Button style={{marginTop:"20px"}} variant="outline-light">
        Read more
      </Button>
      </p>

</div>




    </div>




<hr></hr>


<div className='circles'>
  

<p className='highlights'>
  <b>
    Highlights:
  </b>
</p>


<div className='circle-row'>
  
<div className="circle-container">
      <div className="circle">
        <span>7-9 hours of sleep a day</span>
      </div>

    </div>
    <div className="circle-container">

    <div className="circle">
        <span>1/3 of the population has sleep problems</span>
      </div>
      </div>
      <div className="circle-container">

      <div className="circle">
        <span>15% of people sleepwalk</span>
      </div>
      </div>
</div>
</div>


<hr></hr><br />

<strong style={{fontSize:"44px"}}>Articles</strong>
<br /><br />
<div className="card-container" >


<Card style={{ width: '18rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' }}>
<a href="article1">  <Card.Img variant="top" src={school} />
</a>
  <Card.Body>
    <Card.Title style={{ textAlign: "left" }}>
      <a style={{ color: "#555555" }} href="article1">
        Back to school - later? Sleep, school start times and academic performance
      </a>
    </Card.Title>
    <Card.Text style={{ color: "#b1b1b1", textAlign: "left" }}>
      We all know good sleep is one of the main pillars of mental and physical health. Therefore, it is alarming to hear that...
    </Card.Text>
    <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <Button style={{marginTop:"0.5rem"}} variant="outline-dark" onClick={() => { window.location.pathname = "article1" }}>
        Read me
      </Button>
    </div>
  </Card.Body>
</Card>


    <Card style={{ width: '18rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' }}>
  <a href="article2"> <Card.Img variant="top" src={sleep}/>
    </a>   
      <Card.Body>
        <Card.Title style={{textAlign:"left"}}><a style={{color:"#555555"}} href="article2">   Short sleep a day keeps your memories far away
  </a> </Card.Title>
  <Card.Text style={{color:"#b1b1b1",textAlign:"left"}}>
  We’ve all experienced short-term complete or partial lack of sleep in our lives. The next day we don’t feel great. In fact... 

 </Card.Text>
 <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <Button style={{marginTop:"0.5rem"}} variant="outline-dark" onClick={() => { window.location.pathname = "article2" }}>
        Read me
      </Button>
    </div>
      </Card.Body>
    </Card>    

    <Card style={{ width: '18rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)' }}>
<a href="article3">      <Card.Img variant="top" src={exercise} />
</a>
      <Card.Body>
      <Card.Title style={{textAlign:"left"}}><a style={{color:"#555555"}} href="article3">  Can regular exercise help you sleep better?
  </a> </Card.Title>
  <Card.Text style={{color:"#b1b1b1",textAlign:"left"}}>
  Regular exercise is one of the cheapest and most efficient ways to preserve good health. Similar can be said about sleep... </Card.Text>

  <div style={{ display: "flex", justifyContent: "flex-start" }}>
      <Button style={{marginTop:"0.5rem"}} variant="outline-dark" onClick={() => { window.location.pathname = "article3" }}>
        Read me
      </Button>
    </div>      </Card.Body>
    </Card>




</div>


<a href="articles" style={{textDecoration:"underline", color:"#666666"}}><h5 >See all</h5>
</a>
    
   










<br />
<br />






















    </>
)
}

export default Home;