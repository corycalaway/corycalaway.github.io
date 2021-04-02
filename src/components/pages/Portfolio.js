import React from "react";


const Portfolio = () => (
 <>
 <div className="side-space">
 <div className="row row-space">
  <div className="square col">
  <img src={require(`../../assets/images/the-minimal-prepper.png`).default} alt="Image" /> 
</div>
<div className="square col">
  <img src={require(`../../assets/images/gamer_portal.png`).default} className="landscape" alt="Image" /> 
</div>
<div className="square col">
  <img src={require(`../../assets/images/gamer_portal.png`).default} className="landscape" alt="Image" /> 
</div>
</div>
<div className="row row-space">
  <div className="square col">
  <img src={require(`../../assets/images/the-minimal-prepper.png`).default} alt="Image" /> 
</div>
<div className="square col">
  <img src={require(`../../assets/images/gamer_portal.png`).default} className="landscape" alt="Image" /> 
</div>
<div className="square col">
  <img src={require(`../../assets/images/gamer_portal.png`).default} className="landscape" alt="Image" /> 
</div>
</div>


</div>
</>
);

export default Portfolio;
