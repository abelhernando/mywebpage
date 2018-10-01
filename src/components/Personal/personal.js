import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody, Col } from 'reactstrap';
import sport from '../../styles/images/medium-images/sports.png'
import energy from '../../styles/images/medium-images/battery.png'
import world from '../../styles/images/medium-images/Emoji_Earth.png'

const Personal = (props) => {
  return (
      <Col xs={10} md={10}>
    <CardDeck className="section-target" id='personal'>
      <Card className='cards'>
        <CardImg top width="100%" className='images' src={sport} alt="Card image cap" />
        <CardBody>
          <CardTitle>Sports Lover</CardTitle>
          <CardSubtitle>Martial arts practisioner</CardSubtitle>
          <CardText>Rugby, American football, Soccer and Basketball</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" className='images' src={energy} alt="Card image cap" />
        <CardBody>
          <CardTitle>Full energy</CardTitle>
          <CardSubtitle>Proactive</CardSubtitle>
          <CardText>Always looking for the better way to do it</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" className='images' src={world} alt="Card image cap" />
        <CardBody>
          <CardTitle>Globetrotter</CardTitle>
          <CardSubtitle>Love to travel</CardSubtitle>
          <CardText>Open minded</CardText>
        </CardBody>
      </Card>
    </CardDeck>
        </Col>
  );
};

export default Personal;
