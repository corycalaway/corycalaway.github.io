import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



const Portfolio = () => {
  const [projects] = useState([
    {
      name: 'onlymemes',
      key: uuidv4(),
      deploy: "https://thawing-sands-66720.herokuapp.com/",
      title: "OnlyMemes",
      github: "https://github.com/corycalaway/only_memes"
    },
    {
      name: '0',
      key: uuidv4(),
      deploy: "https://corycalaway.github.io/gamer-portal/",
      title: "Gamer Portal",
      github: "https://github.com/corycalaway/gamer-portal"
    },
    {
      name: '1',
      key: uuidv4(),
      deploy: "https://minimal-prepper.herokuapp.com/",
      title: "The Minimal Prepper",
      github: "https://github.com/daniwhitlock/the-minimal-prepper"
    },
    
  ]);

  const [projects1] = useState([
    {
      name: '3',
      key: uuidv4(),
      deploy: "https://corycalaway.github.io/weather-dashboard/",
      title: "Wheather Dashboard",
      github: "https://github.com/corycalaway/weather-dashboard"
    },
    {
      name: '4',
      key: uuidv4(),
      deploy: "https://corycalaway.github.io/password-generator/",
      title: "Password Generator",
      github: "https://github.com/corycalaway/password-generator"
    },
    {
      name: '5',
      key: uuidv4(),
      deploy: "https://corycalaway.github.io/food-festival/",
      title: "Food Festival",
      github: "https://github.com/corycalaway/food-festival"
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
               
                <img className="portfolioSize" src={require(`../../assets/images/${image.name}.png`).default}
                  alt={image.name}
                  key={uuidv4()}

                />
              
                <a className='titleText' href={image.deploy}>
                  <div className='titleText'>Deployed</div>
                </a>
                < a className='titleText' href={image.github}>
                  <div className='titleText'>GitHub</div>

                </a>
            </div>
              
           </>
          ))}

            
        </div>
        <div className="row row-space">

          {projects1.map((image, i) => (
            <div id="portfolioChange" key={uuidv4()} className="square gradients card col-sm-12 col-md" >
              <div className='regText' >{image.title}</div>

              <img className="portfolioSize" src={require(`../../assets/images/${image.name}.png`).default}
                alt={image.name}
                key={uuidv4()}

              />

              <a className='titleText' href={image.deploy}>
                <div className='titleText'>Deployed</div>
              </a>
              < a className='titleText' href={image.github}>
                <div className='titleText'>GitHub</div>

              </a>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Portfolio;