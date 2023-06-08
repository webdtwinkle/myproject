 import Nav from './Nav';
import Hero from './Hero';
import Destination from './Destination';
import Trip from "./Trip";
 import Footer from "./Footer";
function Home(){
    return(
        <>
        {/* <Nav /> */}
        <Hero 
        cName ="hero"
        heroimg={require('./img/13.jpg')}  
        title="Online education"
        text="Learn from here"
        buttonText="Courses"
        url="/"
        btnClass="show"
        />
         
        <Destination />
       
        <Trip />
        {/* <Footer /> */}
        </>
    )
}
export default Home;