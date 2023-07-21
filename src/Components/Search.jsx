import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";



function Search(props) {

    const articles =[
        "Back to school - later? Sleep, school start times and academic performance",
        "Short sleep a day keeps your memories far away",
        "Can regular exercise help you sleep better?"
    ]

    function lalal(){
        console.log(props.searchtext)

    }
    
return(
    <>

    
    <h1 className='articles-title'>Articles</h1>

<a href="article1">1</a>
<br />
<a href="article2">2</a>
<br />
<a href="article3">3</a>

<br />

<button onClick={lalal}>
    baaaaaaaaaaaaaa
</button>

<h2>
    {props.searchtext}
</h2>


    </>
)
}

export default Search;