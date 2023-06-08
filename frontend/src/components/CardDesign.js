import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
 import download1 from './images/download1.png';
 import don2 from './images/don2.png';
import pdf from './images/pdf.png';

import "./CardDesign.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
function CardDesign() {
  const [imageId,setImageId] =useState('646cc5b88f48f6d0fcac4a9f')
  const routChangeViewPDf = () => {
    //   try {
    fetch(`/api/files/view/${imageId}`)   //obj id pass
      .then((res) => {
        // convert the response to a blob
        return res.blob();
      })
      .then((blob) => {
        // create a URL for the blob
        const url = URL.createObjectURL(blob);

        // create a new window to display the PDF
        const newWindow = window.open();
        newWindow.document.write(
          `<iframe src="${url}" width="100%" height="100%"></iframe>`
        );
      });
  };
  return (
    <div>
      <div className='me'>
    <Card style={{ width: '18rem',height:'12rem',display:'flex', flexDirection:'row',marginLeft:'20px',border: 'transparent'}}>
      <Card.Img variant="top" src={download1} />
      <Card.Body>
        <Card.Title>Videos</Card.Title>
        <Card.Text style={{width:'70rem'}}>
          Some quick example text to build on the Videos and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go </Button> */}
        <Link type="btn" class="btn btn-primary btn" to='/Video'>Go</Link>   
      </Card.Body>
    
    </Card> 

    <Card style={{ width: '18rem',height:'12rem',display:'flex', flexDirection:'row' , marginLeft:'400px'}}>
      <Card.Img variant="top" src={pdf}/>
      <Card.Body>
        <Card.Title>Pdfs</Card.Title>
        <Card.Text style={{width:'70rem'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={routChangeViewPDf}> Go </Button> 
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',height:'12rem',display:'flex', flexDirection:'row',marginLeft:'20px' }}>
      <Card.Img variant="top" src={don2} />
      <Card.Body>
        <Card.Title>Ppts</Card.Title>
        <Card.Text style={{width:'70rem'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go </Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default CardDesign;