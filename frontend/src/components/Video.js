import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';
import './vd.css';
// import { Container } from 'react-bootstrap';
export default function Video() {
  return (
   
    <div className='vdcontainer'>
       <div className='showvd'>
      
      <ReactPlayer controls url='https://youtu.be/GpcMasRWUhI'  style={{ margin:'25px'}}  playsInline width={300} height={160} />

      <ReactPlayer controls url='https://youtu.be/V1JBgugIL8w'  style={{ marginLeft:'340px', marginTop:'-184px'}} playsInline width={300} height={160} />
    
       <ReactPlayer controls url='https://youtu.be/Tu14tj4ar_A' style={{ marginLeft:'659px' , marginTop:'-160px'}} playsInline width={300} height={160}/>

    
      
      {/*----------------------css videos ----------*/}
      
      
       <ReactPlayer controls url='https://youtu.be/TThZIt4r3eg'  style={{marginLeft:'980px' , marginTop:'-160px'}} playsInline width={300} height={160}/> 
       <ReactPlayer controls url='https://youtu.be/cb-p_gkhIC0'  style={{marginLeft:'20px',   marginTop:'20px'}} playsInline width={300} height={160}/>

     


 {/*----------------------js videos ----------*/}

 <ReactPlayer controls url='https://youtu.be/bBpKJccIdvQ'  style={{marginLeft:'340px',   marginTop:'-160px'}} playsInline width={300} height={160}/> 
      <ReactPlayer controls url='https://youtu.be/kXrFo4pq23Q'  style={{marginLeft:'658px',   marginTop:'-160px'}} playsInline width={300} height={160}/> 
     
       
 


{/* </Container>  */}

<ReactPlayer controls url='https://youtu.be/ssC8O2kWWWA'  style={{marginLeft:'983px' , marginTop:'-160px'}} playsInline width={300} height={160}/> <br></br>
         <ReactPlayer controls url='https://youtu.be/mxCY3SH346o'  style={{marginLeft:'20px',   marginTop:'11px'}} playsInline width={300} height={160}/>    

<br></br>
<br></br>
<br></br>
<br></br>
</div>
     </div>
  )
}