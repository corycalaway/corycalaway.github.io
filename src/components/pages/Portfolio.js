import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



const Portfolio = () => {
  const [projects] = useState([
    {
      name: '0',
      key: uuidv4()
    },
    {
      name: '1',
      key: uuidv4()
    },
    {
      name: '2',
      key: uuidv4()
    }
  ]);

  const [projects1] = useState([
    {
      name: '3',
      key: uuidv4()
    },
    {
      name: '4',
      key: uuidv4()
    },
    {
      name: '5',
      key: uuidv4()
    }
  ]);


  return (
    <>
      <div className="side-space">
        <div className="row row-space">

          {projects.map((image, i) => (
            <div className="square col">

              <img src={require(`../../assets/images/${image.name}.png`).default}
                alt={image.name}
                key={uuidv4()}

              />

            </div>
          ))}


        </div>
        <div className="row row-space">

          {projects1.map((image, i) => (
          <div className="square col">

            <img src={require(`../../assets/images/${image.name}.png`).default}
              alt={image.name}
              key={uuidv4()}

            />

          </div>
        ))}
        </div>

      </div>
    </>
  );
}

export default Portfolio;
// {projects.map((image, i) => (
//   <div className="square col">

//   <img src={require(`../../assets/images/${i}.png`).default} 
//   alt={i} 
//   key={uuidv4()}

//   /> 

// </div>
// ))}

// {projects.forEach((project) => (
//   <div className="square col">

//   <img src={require(`../../assets/images/${project.name}.png`).default} 
//   alt='image'
//   key={uuidv4()}

//   /> 

// </div>
// ))}

// return (
//   <>
//     <div className="side-space">
//       <div className="row row-space">




//         // {projects.map((image, i) => (
//         <div className="square col">

//           <img src={require(`../../assets/images/${i}.png`).default}
//             alt={image.name}
//             key={uuidv4()}

//           />

//         </div>
//       ))}

//         <div className="square col">
//           <img src={require(`../../assets/images/password_generator.png`).default} className="landscape" alt="Image" />
//         </div>
//         <div className="square col">
//           <img src={require(`../../assets/images/password_generator.png`).default} className="landscape" alt="Image" />
//         </div>
//       </div>
//       <div className="row row-space">
//         <div className="square col">
//           <img src={require(`../../assets/images/password_generator.png`).default} alt="Image" />
//         </div>
//         <div className="square col">
//           <img src={require(`../../assets/images/password_generator.png`).default} className="landscape" alt="Image" />
//         </div>
//         <div className="square col">
//           <img src={require(`../../assets/images/password_generator.png`).default} className="landscape" alt="Image" />
//         </div>
//       </div>


//     </div>
//   </>
// );