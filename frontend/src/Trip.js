import './Tripstyle.css';
import Tripdata from './Tripdata';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import k from '../src/img/k.png';
import ian from '../src/img/ian.png';
import photo1 from '../src/img/photo1.svg';
import photo2 from '../src/img/photo2.svg';
import photo3 from '../src/img/photo3.svg';
import photo4 from '../src/img/photo4.svg';
import photo5 from '../src/img/photo5.svg';
import photo6 from '../src/img/photo6.svg';
import { Link } from 'react-router-dom';
// import PricingTable from './PricingTable';
function Trip()
{
  return(
    <div className='trip'>
        <h1>Top Catgories </h1>
        <p className='pa'>You can discover your desired courses .</p>
        <div className='tripcard'>
            <Tripdata 
            image={require('./img/html.jpg')}
            heading="Learn Design"
            // text=" Marketing has expanded into a field with countless designations — simply
            //  calling yourself a marketer is no longer a sufficient response to the question, ‘What do you do?’ 
            //  Balfour explains how to build yourself into an indispensable, T-shaped marketer by 
            //  layering your skills as you progress."
            />
              <Tripdata 
            image={require('./img/music.jpg')}
            heading="Learn It and Software "
            // text=" Design is a craft where professionals create visual content to 
            // communicate messages. By applying visual hierarchy and page layout techniques, 
            // designers use typography and pictures to meet users’ specific needs and focus 
            // on the logic of displaying elements in interactive designs, to optimize the user experience."

          
            />
              <Tripdata 
            image={require('./img/7.jpg')}
            heading="Learn Development"
            // text=" The alarming imbalance between humans and our natural
            // world has deepened. As a result, we have lost our 
            // connection with nature, we lack understanding of the 
            // vital role nature plays in our lives, and we no longer
            //  know that we are part of the natural"
            />
            <Tripdata 
            image={require('./img/market.jpg')}
            heading=" Learn Marketing"
            // text=" The alarming imbalance between humans and our natural
            // world has deepened. As a result, we have lost our 
            // connection with nature, we lack understanding of the 
            // vital role nature plays in our lives, and we no longer
            //  know that we are part of the natural"
            />
            <Tripdata 
            image={require('./img/p.jpg')}
            heading=" Personal Development"
            // text=" The alarming imbalance between humans and our natural
            // world has deepened. As a result, we have lost our 
            // connection with nature, we lack understanding of the 
            // vital role nature plays in our lives, and we no longer
            //  know that we are part of the natural"
            />
            <Tripdata 
            image={require('./img/b.jpg')}
            heading=" Learn Buisness"
            // text=" The alarming imbalance between humans and our natural
            // world has deepened. As a result, we have lost our 
            // connection with nature, we lack understanding of the 
            // vital role nature plays in our lives, and we no longer
            //  know that we are part of the natural"
            />
            
            
        </div>
        <div className='Bootstrapcards'>
            <Card style={{ width: '61rem' ,height: '20rem' ,border:"transparent"   }}>
              <div className='parent'>
              <div className='txt1'>
      <Card.Img style={{borderRadius:"50%",width:"200px",height:"200px",border:"1px solid white"}}
       variant="top" src={k} />
      </div>
      <Card.Body>
        <div className='txt'>
        <Card.Title style={{ quotes: "initial"}}>Karen Hunter</Card.Title>
        <h6>America's Team Lead
Learning & Development</h6>
        <Card.Text>
          
        Udemy has been a great platform to stay competitive in the digital transformation of
         the workplace by offering fresh, relevant,
         personalized on-demand learning content powered by a dynamic content marketplace..
        </Card.Text>
        <Link  style ={{ color:"black",fontWeight:"bold"}}variant="primary">Read Full Story</Link>
        </div>
      </Card.Body>
              </div>
         
    
    </Card>
    </div>
    <Card style={{ width: '61rem' ,height: '20rem', marginLeft:"30%" ,border:"transparent"}}>
              <div className='parent'>
              <div className='txt2'>
      <Card.Img style={{borderRadius:"70%",width:"200px",height:"200px",border:"1px solid white"}}
       variant="top" src={ian} />
      </div>
      <Card.Body>
        <div className='txt'>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Title>Ian Stevens</Card.Title>
        <h6>Global Head of Capability Development
North America </h6>
        <Card.Text>
        Thanks to EduHub Business, Booz Allen has armed our workforce, specifically its data scientists, with highly relevant and in-demand tech skills that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.
        </Card.Text>
        <Link  style ={{ color:"black",fontWeight:"bold"}}variant="primary">Read Full Story</Link>
        </div>
      </Card.Body>
              </div>
    </Card>   
   
    <br></br> 
    <br></br>
    <br></br> 
    <br></br>
    <div className='tcs'>
      <h1 style={{fontWeight:'bold',marginLeft:'450px',fontFamily:'serif'}}>Trusted by over 13,400 great teams</h1>
      <h6 style={{marginLeft:'480px'}}>Leading companies can also use the same courses to help employees keep their skills fresh.</h6>
      <br></br>
      <br></br>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0rem" }}>
    
      <img src={photo1} alt="Photo 1" style={{ marginLeft: "220px",maxWidth: "30%", height: "auto", verticalAlign: "middle"}} />
      <img src={photo2} alt="Photo 2" style={{  marginLeft: "250px",maxWidth: "10%", height: "auto", verticalAlign: "middle" }} />
      <img src={photo3} alt="Photo 3" style={{ marginLeft: "220px", maxWidth: "10%", height: "auto", verticalAlign: "middle"}} />
      <img src={photo4} alt="Photo 4" style={{  marginLeft: "220px",maxWidth: "30%", height: "auto", verticalAlign: "middle"}} />
      <img src={photo5} alt="Photo 5" style={{  marginLeft: "220px",maxWidth: "40%", height: "auto", verticalAlign: "middle"}} />
      <img src={photo6} alt="Photo 6" style={{  marginLeft: "220px",maxWidth: "30%", height: "auto", verticalAlign: "middle"}} />
    </div> 
    </div> 
    <br></br> 
    
    
    <br></br> 
    <br></br>
    <br></br> 
    <br></br>
    {/* <PricingTable/> */}
    </div>

  );  
}
export default Trip;