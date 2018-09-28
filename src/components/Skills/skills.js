import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './index.css';
import es6 from '../../styles/images/medium-images/es6.jpg'
import reactImg from '../../styles/images/medium-images/react.png'
import cssImg from '../../styles/images/medium-images/CSS3.svg'
import agile from '../../styles/images/medium-images/agile.png'


const items = [
  {
    src: es6,
    altText: 'Slide 1',
    caption:
      <ul>
        <li>Object Oriented: classes and inheritance</li>
        <li>API and promises, node.js, MongoDB and jQuery</li>
        <li>Test Driven Development with Jasmine and Mocha, Code Coverage</li>
      </ul>,
    header: 'es6'
  },
  {
    src: reactImg,
    altText: 'Slide 2',
    caption:
      <ul>
        <li>Single Page Application</li>
        <li>Components and state inheritance</li>
        <li>Routes</li>
      </ul>,
    header: 'react'
  },
  {
    src: cssImg,
    altText: 'Slide 3',
    caption:
      <ul>
        <li>Mobile First and Web responsive</li>
        <li>CSS3, Sass and Bootstrap</li>
      </ul>,
    header: 'css'
  },
  {
    src: agile,
    altText: 'Slide 4',
    caption:
      <ul>
        <li>Agile system, Scrum and Kanban</li>
        <li>UNDEFINED</li>
      </ul>,
    header: 'teamwork'
  }
];

const Skills = () => {
  return (
    <div className="section-target" id='skills' >
      <UncontrolledCarousel className='logo-images' items={items} />
    </div>
  )
};

export default Skills;



// import React from 'react';
// import { Table, Row } from 'reactstrap';
// import './index.css';
// // import pic01 from '../../styles/images/pic01.png'

// export default class Skills extends React.Component {
//   render() {
//     return (
//       <div className="section-target" id='skills'>
//         <div className='skills'>
//           <div scope="row">ES6</div>
//           <ul>
//             <li>Object Oriented: classes and inheritance</li>
//             <li>API and promises, node.js, MongoDB and jQuery</li>
//             <li>Test Driven Development with Jasmine and Mocha, Code Coverage</li>
//           </ul>
//         </div>
//         <div className='skills'>
//           <div scope="row">REACT</div>
//           <ul>
//             <li>Single Page Application</li>
//             <li>Components and state inheritance</li>
//             <li>Routes</li>
//           </ul>
//         </div>
//         <div className='skills'>
//           <div scope="row">CSS</div>
//           <ul>
//             <li>Mobile First and Web responsive</li>
//             <li>CSS3, Sass and Bootstrap</li>
//           </ul>
//         </div>
//         <div className='skills'>
//           <div scope="row">TEAMWORK</div>
//           <ul>
//             <li>Agile system, Scrum and Kanban</li>
//             <li>UNDEFINED</li>
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }
