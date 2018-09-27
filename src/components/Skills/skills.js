import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './index.css';
// import pic01 from '../../styles/images/pic01.png'


const items = [
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
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
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
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
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption:
      <ul>
        <li>Mobile First and Web responsive</li>
        <li>CSS3, Sass and Bootstrap</li>
      </ul>,
    header: 'css'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
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
      <UncontrolledCarousel items={items} />
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
