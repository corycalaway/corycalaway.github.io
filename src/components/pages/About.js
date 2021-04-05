import React from "react";
import background from "../../assets/images/hero.jpg"
import { v4 as uuidv4 } from 'uuid'

const About = () => (
  <section  style={{ backgroundImage: `url(${background})`, 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat' }} id="about-me" className="flex-section">
        <div className="container-fluid">
        
        <div className="row selfImage" >
            <div className="col-sm-12 col-md selfImage1">
                            <img className="col selfImage1" src={require(`../../assets/images/self.jpg`).default}
                                alt='GitHub'
                                key={uuidv4()}

                            />
                        </div>
                    <p className="col-sm-12 col-md-8 primary-text">
                        
                    
                        
                        My name is Cory! I am an father/developer/nerd/etc and so on. I have had a plethora of experiences
            throughout my life. Some of these experiences have been difficult, but they have made me the individual I am today. They 
            have also tought me that even though I am strong as an individual, I can accomplish more with a team. <br />
            <br />
            I am still continuing to learn and edcuate myself as a fullstack Web Developer. I am currently on track to completeing a 
            fullstack web development course from the University of Utah (Grad: May2021). Upon completion I am hoping to start a full
            time career as a Web Developer.
        </p>
        </div>
        </div>
    </section>
);

export default About;
