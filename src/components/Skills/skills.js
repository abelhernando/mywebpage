// import React from 'react';
// import { UncontrolledCarousel } from 'reactstrap';
// import './index.css';
// import es6 from '../../styles/images/medium-images/es6.jpg'
// import reactImg from '../../styles/images/medium-images/react.png'
// import cssImg from '../../styles/images/medium-images/CSS3.svg'
// import agile from '../../styles/images/medium-images/agile.png'


// const items = [
//   {
//     src: es6,
//     altText: 'Slide 1',
//     caption:
//       <ul>
//         <li>Object Oriented: classes and inheritance</li>
//         <li>API and promises, node.js, MongoDB and jQuery</li>
//         <li>Test Driven Development with Jasmine and Mocha, Code Coverage</li>
//       </ul>,
//     header: 'es6'
//   },
//   {
//     src: reactImg,
//     altText: 'Slide 2',
//     caption:
//       <ul>
//         <li>Single Page Application</li>
//         <li>Components and state inheritance</li>
//         <li>Routes</li>
//       </ul>,
//     header: 'react'
//   },
//   {
//     src: cssImg,
//     altText: 'Slide 3',
//     caption:
//       <ul>
//         <li>Mobile First and Web responsive</li>
//         <li>CSS3, Sass and Bootstrap</li>
//       </ul>,
//     header: 'css'
//   },
//   {
//     src: agile,
//     altText: 'Slide 4',
//     caption:
//       <ul>
//         <li>Agile system, Scrum and Kanban</li>
//         <li>UNDEFINED</li>
//       </ul>,
//     header: 'teamwork'
//   }
// ];

// const Skills = () => {
//   return (
//     <div className="section-target" id='skills' >
//       <UncontrolledCarousel className='logo-images' items={items} />
//     </div>
//   )
// };

// export default Skills;



import React from 'react';
import './index.css';
import Flip from 'react-reveal/Flip';
import Reveal from 'react-reveal/Reveal';
import es6 from '../../styles/images/medium-images/es6.jpg'
import agile from '../../styles/images/medium-images/agile-icon.png'
import reactImg from '../../styles/images/medium-images/react.png'
import cssImg from '../../styles/images/medium-images/css.jpg'

export default class Skills extends React.Component {
  render() {
    return (
      <div className="section-target" id='skills'>
        <div className='skills'>
        <Flip effect="bottom">
            <img src={es6} alt="ECMA6" />
          </Flip>
          <ul>
            <Flip top cascade>
              <li>Object Oriented: classes and inheritance</li>
              <li>API and promises, node.js, MongoDB and jQuery</li>
              <li>Test Driven Development with Jasmine and Mocha, Code Coverage</li>
            </Flip>
          </ul>
        </div>
        <div className='skills'>
        <Flip effect="bottom">
          <img src={reactImg} alt="react" />
        </Flip>
          <ul>
            <Flip top cascade>
              <li>Single Page Application</li>
              <li>Components and state inheritance</li>
              <li>Routes</li>
            </Flip>
          </ul>
        </div>
        <div className='skills'>
        <Flip effect="bottom">
          <img src={cssImg} alt="CSS" />
        </Flip>
          <ul>
            <Flip top cascade>
              <li>Mobile First and Web responsive</li>
              <li>CSS3, Sass and Bootstrap</li>
            </Flip>
          </ul>
        </div>
        <div className='skills'>
        <Flip effect="bottom">
          <img src={agile} alt="agile" />
        </Flip>
          <ul>
            <Flip top cascade>
              <li>Agile system, Scrum and Kanban</li>
              <li>UNDEFINED</li>
            </Flip>
          </ul>
        </div>
      </div>
    )
  }
}
