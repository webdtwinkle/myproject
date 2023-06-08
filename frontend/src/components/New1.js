import React from "react";
import './Neww.css';
import "bootstrap/dist/css/bootstrap.min.css";
import frontt from './images/frontt.png';
import back from './images/back.png';
import cs from './images/cs.png';
import cc from './images/cc.png';
import comp from './images/comp.png';
import data_structures from './images/data_structures.png';
import de from './images/de.png';
import english from './images/english.png';
import marketing from './images/marketing.png';
import music from './images/music.png';
import networking from './images/networking.png';
import os from './images/os.png';
import personal from './images/personal.png';
import sw from './images/sw.png';
import toc from './images/toc.png';
import graphicdesign from './images/graphicdesign.png';
import {Link} from 'react-router-dom';
import { useState } from "react";
//  import Slider from './Slider.js';

const New1 = () => {
  // const [isLocked, setIsLocked] = useState(true);

  // const handleButtonClick = () => {
  //   setIsLocked(!isLocked);
  //   window.location.href = 'https://example.com';
  // };


  return (
    <div>
    
      <h1 className="text-center my-5 fonts">OUR COURSES</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div class="card">

              <img src={frontt} />

              <div class="card-body">
                <h5 class="card-title">FRONT-END</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 {/* <a href="#" class="btn " >SELECT</a>  */}
                   <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>    
                 
                   <Link type="btn mar" to='/Slider'>MORE
                    </Link>  
                    {/* <h3>{title}</h3> */}
      {/* {isLocked ? (
        <button onClick={handleButtonClick}>Unlock</button>
      ) : (
        <button onClick={handleButtonClick}>Lock</button>
      )} */}

              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={back} />
              <div class="card-body">
                <h5 class="card-title">BACK-END</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <a href="#" class="btn btn-primary hov">SELECT</a>
                <a href="#" class="btn btn-primary mar">MORE</a> */}
                 {/* <a href="#" class="btn" >SELECT</a>  */}
                  {/* <a href="Slider.js" class="btn btn-primary  mar">MORE</a>    */}
                  <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                   <Link type="btn mar" to='/Slider'>MORE

                    </Link> 
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={cs} />
              <div class="card-body">
                <h5 class="card-title">CYBERSECURITY</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             
                  <Link type="btn" class="btn btn-primary " to='/CardDesign'>SELECT</Link>
                   <Link type="btn mar" to='/Slider'>MORE

                    </Link> 
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={graphicdesign}/>
              <div class="card-body">
                <h5 class="card-title">GRAPHIC DESIGNING</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                  {/* <a href="Slider.js" class="btn btn-primary  mar">MORE</a>    */}
                 
                   {/* <Link type="btn mar" to='/Slider'>MORE

                    </Link>  */}
                    <Link type="btn" class="btn btn-secondary " to='/Slider'>MORE</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={networking} />
              <div class="card-body">
                <h5 class="card-title">NETWORKING</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                  {/* <a href="Slider.js" class="btn btn-primary  mar">MORE</a>    */}
                 
                   <Link type="btn mar" to='/Slider'>MORE

                    </Link> 
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={cc} />
              <div class="card-body">
                <h5 class="card-title">C/C++</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                   <Link type="btn mar" to='/Slider'>MORE

                    </Link> 
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={os} />
              <div class="card-body">
                <h5 class="card-title">Operating System</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                   <Link type="btn mar" to='/Slider'>MORE

                    </Link> 
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={de} />
              <div class="card-body">
                <h5 class="card-title">Digital Electronics</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                   <Link type="btn mar" to='/Slider'>MORE

                    </Link> 
                
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={sw} />
              <div class="card-body">
                <h5 class="card-title">Software Engineering</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                   <Link type="btn mar" to='/Slider'>MORE

                    </Link> 
                
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={comp} />
              <div class="card-body">
                <h5 class="card-title">Computer Architecture</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                 
                   <Link type="btn mar" to='/Slider'>MORE

                    </Link> 
                
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={data_structures} />
              <div class="card-body">
                <h5 class="card-title">Data Structure</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                 
                   <Link type="btn mar" to='/Slider'>MORE

                    </Link> 
                
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={toc} />
              <div class="card-body">
                <h5 class="card-title">TheoryOfComputation</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                   <Link type="btn mar" to='/Slider'>MORE

                    </Link> 
                
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={english} />
              <div class="card-body">
                <h5 class="card-title">English</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                   <Link type="btn mar" to='/Slider'>MORE

                    </Link> 
                
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={music} />
              <div class="card-body">
                <h5 class="card-title">Music</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                 
                   <Link type="btn mar" to='/Slider'>MORE

                    </Link> 
                
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={marketing} />
              <div class="card-body">
                <h5 class="card-title">Marketing</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                 
                   <Link type="btn mar" class='btnn' to='/Slider'>MORE

                    </Link> 
                    
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img src={personal} />
              <div class="card-body">
                <h5 class="card-title">Personal Development</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link type="btn" class="btn btn-primary btn" to='/CardDesign'>SELECT</Link>
                 
                   <Link type="btn mar" to='/Slider'>MORE

                    </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
export default New1;