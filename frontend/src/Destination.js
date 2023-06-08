import './Destination.css';
import Destinationdata from './Destinationdata';
const Destination=()=>
{
    return(
        <div className="destination">
            <h1>Popular Courses</h1>
            <p className='pa'>
              Learn anytime anywhere
            </p>
           <Destinationdata 
         ClassName="first-des"
           heading="So many courses on sale."
           text="  Your future’s wide open, and so is our course library. Log in now for special savings on courses. Sale ends tomorrow. "
              img1={require('./img/12.png')}
              img2={require('./img/1.png')}/>
            <Destinationdata
            ClassName="first-des-revrse"
           heading="Learn without limits."
           text=" Online education has become a viable and exciting method for instructional 
           delivery in the global business society that runs on a 24/7 schedule (24 hours a day/7 days a week) 
           because it provides students with great flexibility..
           With the increased availability of the Internet and computer technology, students are able to access information anytime and anyplace that would normally be available only through a traditional classroom. Studies have shown that students learn just as effectively in an online classroom as they do in the traditional classroom. "
              img1={require('./img/one.png')}
              img2={require('./img/3.png')}/>
        </div>
    )
}
export default Destination;