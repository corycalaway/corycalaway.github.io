import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



const Portfolio = () => {
  const [projects] = useState([
    {
      name: 'onlymemes',
      key: uuidv4(),
      deploy: "https://onlymemes.herokuapp.com/",
      title: "OnlyMemes",
      github: "https://github.com/corycalaway/only_memes",
      description: "OnlyMemes is a Web Application for collecting specialized memes. User's are able to purchase meme coin to buy random packs of memes.",
      technologies: "MERN, JavaScript, ReactSpring, and Stripe."
    },
    {
      name: '0',
      key: uuidv4(),
      deploy: "https://corycalaway.github.io/gamer-portal/",
      title: "Gamer Portal",
      github: "https://github.com/corycalaway/gamer-portal",
      description: "Gamer Portal uses API calls to recommend games based on user selection, and find a discount for recommended game.",
      technologies: "JavaScript, Luxon, Materialize, and CSS."
    },
    {
      name: '1',
      key: uuidv4(),
      deploy: "https://minimal-prepper.herokuapp.com/",
      title: "The Minimal Prepper",
      github: "https://github.com/daniwhitlock/the-minimal-prepper",
      description: "Minimal Prepper is a social Web App, to assist users with emergency preparation.",
      technologies: "JavaScript, Handlebars, Express, and Cloudinary."
    },

  ]);

  const [projects1] = useState([
    {
      name: '3',
      key: uuidv4(),
      deploy: "https://corycalaway.github.io/weather-dashboard/",
      title: "Weather Dashboard",
      github: "https://github.com/corycalaway/weather-dashboard",
      description: "Weather Dashboard allows user to search locations for a 5 day forecast.",
      technologies: "JavaScript, Luxon, Boostrap, and CSS."
    
    },
    {
      name: '4',
      key: uuidv4(),
      deploy: "https://corycalaway.github.io/password-generator/",
      title: "Password Generator",
      github: "https://github.com/corycalaway/password-generator",
      description: "Password Generator generates a random password based on user inputs.",
      technologies: "JavaScript, CSS, and HTML."
    },
    {
      name: '5',
      key: uuidv4(),
      deploy: "https://corycalaway.github.io/food-festival/",
      title: "Food Festival",
      github: "https://github.com/corycalaway/food-festival",
      description: "Progressive Web App for a food event.",
      technologies: "React, JavaScript, HTML, and CSS."
    }
  ]);


  return (
    <>
      <div className="side-space">
        <div className="row row-space">

          {projects.map((image, i) => (
            <>
              <div id="portfolioChange" key={uuidv4()} className="square gradients card col-sm-12 col-md" >
                <div className='regText' >{image.title}</div>
                <a className='titleText' href={image.deploy}>
                  
                  <img className="portfolioSize" src={require(`../../assets/images/${image.name}.png`).default}
                    alt={image.name}
                    key={uuidv4()}

                  />


                  <div className='titleText'>Deployed</div>
                </a>
                < a className='titleText' href={image.github}>
                  <div className='titleText'>GitHub</div>

                </a>
                <div className="portfolioText">
                  <br />
                  <div >Description: {image.description}</div>
                  <br />
                  <div >Technologies: {image.technologies}</div>
                </div>
              </div>

            </>
          ))}


        </div>
        <div className="row row-space">

          {projects1.map((image, i) => (
            <div id="portfolioChange" key={uuidv4()} className="square gradients card col-sm-12 col-md" >
              <div className='regText' >{image.title}</div>
              <a className='titleText' href={image.deploy}>
                <img className="portfolioSize" src={require(`../../assets/images/${image.name}.png`).default}
                  alt={image.name}
                  key={uuidv4()}

                />


                <div className='titleText'>Deployed</div>
              </a>
              < a className='titleText' href={image.github}>
                <div className='titleText'>GitHub</div>

              </a>
              <div className="portfolioText">
                <br />
                <div >Description: {image.description}</div>
                <br />
                <div >Technologies: {image.technologies}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Portfolio;