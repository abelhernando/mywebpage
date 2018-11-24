// import React from 'react';
// import { Card, CardImg, CardTitle, CardText, CardDeck,
//  CardSubtitle, CardBody, Col } from 'reactstrap';
// import sport from '../../styles/images/medium-images/sports.png'
// import energy from '../../styles/images/medium-images/battery.png'
// import world from '../../styles/images/medium-images/Emoji_Earth.png'

// const Personal = (props) => {
//   return (
//       <Col xs={10} md={10} className='personal'>
//     <CardDeck className="section-target" id='personal'>
//       <Card className='cards'>
//         <CardImg top width="100%" className='images' src={sport} alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Sports Lover</CardTitle>
//           <CardSubtitle>Martial arts practisioner</CardSubtitle>
//           <CardText>Rugby, American football, Soccer and Basketball</CardText>
//         </CardBody>
//       </Card>
//       <Card>
//         <CardImg top width="100%" className='images' src={energy} alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Full energy</CardTitle>
//           <CardSubtitle>Proactive</CardSubtitle>
//           <CardText>Always looking for the better way to do it</CardText>
//         </CardBody>
//       </Card>
//       <Card>
//         <CardImg top width="100%" className='images' src={world} alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Globetrotter</CardTitle>
//           <CardSubtitle>Love to travel</CardSubtitle>
//           <CardText>Open minded</CardText>
//         </CardBody>
//       </Card>
//     </CardDeck>
//         </Col>
//   );
// };

// export default Personal;

import React from 'react';
import './index.css';
import Flip from 'react-reveal/Flip';
import Reveal from 'react-reveal/Reveal';
import sport from '../../styles/images/medium-images/sports.png'
import energy from '../../styles/images/medium-images/battery.png'
import world from '../../styles/images/medium-images/Emoji_Earth.png'

export default class Personal extends React.Component {
  render() {
    return (
      <div className="section-target" id='personal'>
        <div className='cards'>
        <i class="fas fa-dumbbell fa-10x" id="dumbbell"></i>
          {/* <img src={sport} alt="ECMA6" className='img-responsive' /> */}
          <ul>
            <li>Sports Lover</li>
            <li>Martial arts fanatic</li>
            <li>Practisioner of Hunggar Kung fu</li>
          </ul>
        </div>
        <div className='cards'>
        <i class="fas fa-battery-full fa-10x" id="battery"></i>
          {/* <img src={energy} alt="react" className='img-responsive' /> */}
          <ul>
            <li>Full energy</li>
            <li>Proactive</li>
            <li>Aching to improve</li>
          </ul>
        </div>
        <div className='cards'>
        <i class="fas fa-user-astronaut fa-10x" id="astronaut"></i>
          {/* <img src={world} alt="CSS" className='img-responsive'/> */}
          <ul>
            <li>Adventurer</li>
            <li>Lover of the challenges</li>
            <li>Love to travel</li>
          </ul>
        </div>
      </div>
    )
  }
}




