import React from 'react';
import './PricingTable.css';
import { Link } from 'react-router-dom';
// import { Checkmark } from 'react-checkmark'
// import Footer from './Footer'

const PricingTable = () => {
  return (
    <div className="pricing-table">
    <div class="pricing-card">
      <h3 class="pricing-card-header">Personal</h3>
      <div class="price"><sup>₹</sup>1500<span>/MO</span></div>
      <ul>
        <li><strong>3</strong> Websites</li>
        <li><strong>20 GB</strong> SSD</li>
        <li><strong>1</strong> Domain Name</li>
        <li><strong>5</strong> Email</li>
        <li><strong>1x</strong> CPU & RAM</li>
      </ul>
      <Link type="btn " class="btn btn-primary " to='/New1'> Next
</Link>
      {/* <a href="#" class="order-btn">Next</a> */}
    </div>
  
    <div class="pricing-card">
      <h3 class="pricing-card-header">Professional</h3>
      <div class="price"><sup>₹</sup>3000<span>6/MO</span></div>
      <ul>
        <li><strong>10</strong> Websites</li>
        <li><strong>50 GB</strong> SSD</li>
        <li><strong>1</strong> Domain Name</li>
        <li><strong>20</strong> Email</li>
        <li><strong>1.5x</strong> CPU & RAM</li>
      </ul>
      <Link type="btn " class="btn btn-primary " to='/New1'> Next

</Link>
      {/* <a href="#" class="order-btn">Next</a> */}
    </div>
  
    <div class="pricing-card">
      <h3 class="pricing-card-header">Premium</h3>
      <div class="price"><sup>₹</sup>5500<span>1/yr</span></div>
      {/* <Checkmark size='128px' color='blue' /> */}
      <ul>
        <li><strong>30</strong> Websites</li>
       <li><strong>150 GB</strong> SSD</li>
        <li><strong>1</strong> x Domain Name</li>
        <li><strong>40</strong> Email</li>
        <li><strong>2x</strong> CPU & RAM</li>
      </ul>
      <Link type="btn " class="btn btn-primary b" to='/New1'> Next

</Link>
      {/* <a href="#" class="order-btn">Next</a> */}
 
    </div>
  
    
  </div>
  );
};

export default PricingTable;
