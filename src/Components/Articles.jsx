import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Articles(props) {

    const articles =[
        "Back to school - later? Sleep, school start times and academic performance",
        "Short sleep a day keeps your memories far away",
        "Can regular exercise help you sleep better?"
    ]


    
return(
    <>

    
    <h1 className='articles-title'>Articles</h1>


    <Card

          className={"mb-2 articles"}
        >
          <Card.Header style={{textAlign:"left", fontSize:"smaller"}}>Date: </Card.Header>
          <Card.Body>
            <Card.Title style={{textAlign:"left"}}><a style={{color:"#555555"}} href="article1">   Back to school - later? Sleep, school start times and academic performance </a> </Card.Title>
            <Card.Text style={{color:"#b1b1b1",textAlign:"left"}}>
          We all know good sleep is one of the main pillars of mental and physical health. Therefore, it is alarming to hear that a third of adults have trouble sleeping at any given time, elevating their risk of a whole spectrum of cardiometabolic, neurological and psychiatric disorders in the long term.
           </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card

className="mb-2 articles"
>
<Card.Header style={{textAlign:"left", fontSize:"smaller"}}>Date: </Card.Header>
<Card.Body>
  <Card.Title style={{textAlign:"left"}}><a style={{color:"#555555"}} href="article2">   Short sleep a day keeps your memories far away
  </a> </Card.Title>
  <Card.Text style={{color:"#b1b1b1",textAlign:"left"}}>
  We’ve all experienced short-term complete or partial lack of sleep in our lives. The next day we don’t feel great. In fact, we may have emotional swings, lack of concentration, poorer memory and other cognitive issues. 

 </Card.Text>
</Card.Body>
</Card>
<br />
<Card

className="mb-2 articles"
>
<Card.Header style={{textAlign:"left", fontSize:"smaller"}}>Date: </Card.Header>
<Card.Body>
  <Card.Title style={{textAlign:"left"}}><a style={{color:"#555555"}} href="article3">  Can regular exercise help you sleep better?
  </a> </Card.Title>
  <Card.Text style={{color:"#b1b1b1",textAlign:"left"}}>
  Regular exercise is one of the cheapest and most efficient ways to preserve good health. Similar can be said about sleep – a whole-body process incredibly important both for mental and physical health. Yet, so many people neglect not only sleep, but daily exercise too.  </Card.Text>
</Card.Body>
</Card>

<br /> <br /> <br />

    </>
)
}

export default Articles;