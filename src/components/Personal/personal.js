import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import sport from '../../styles/images/test-images/sport.jpg'
import energy from '../../styles/images/test-images/powerup.jpg'
import world from '../../styles/images/test-images/world.png'

const Personal = (props) => {
  return (
    <div className="section-target" id='personal'>
      <Card>
        {/* <CardImg className='personal-image' top src={sport} alt="sports lover" /> */}
        <CardBody>
          <CardTitle>Sports Lover</CardTitle>
          <CardText>Martial arts practisioner</CardText>
          <CardText>Rugby, American football, Soccer and Basketball</CardText>
        </CardBody>
      </Card>
      <Card>
        {/* <CardImg className='personal-image' top src={energy} alt="powerup" /> */}
        <CardBody>
          <CardTitle>Full energy</CardTitle>
          <CardText>Proactive</CardText>
          <CardText>Always looking for the better way to do it</CardText>
        </CardBody>
      </Card>
      <Card>
        {/* <CardImg className='personal-image' top src={world} alt="love to travel" /> */}
        <CardBody>
          <CardTitle>Globetrotter</CardTitle>
          <CardText>Love to travel</CardText>
          <CardText>Open minded</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Personal;
