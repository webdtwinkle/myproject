import Nav from './Nav';
import Hero from './Hero';
import Aboutus from './Aboutus';
import Footer from './Footer';
import './Aboutstyle.css';

function About(){
    return(
        <>
         
        <Hero 
        cName ="hero"
        heroimg={require('./img/nature4.jpg')}  
        title="lorem"
        />
        <Aboutus />
        
        </>

        
    )
}
export default About;