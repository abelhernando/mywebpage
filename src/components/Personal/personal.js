import React from 'react';
import { Table } from 'reactstrap';
import './index.css'
import sport from '../../styles/images/test-images/sport.jpg'
import energy from '../../styles/images/test-images/powerup.jpg'
import world from '../../styles/images/test-images/world.png'

export default class Personal extends React.Component {
  render() {
    return (
      <Table borderless className="section-target" id='personal' >
        <thead className='personal'>
          <tr>
            
            <th><img className='sportimg' src={sport} alt="sports lover" /></th>
           
            <th> <img className='energyimg' src={energy} alt="full energy" /></th>
            
            <th><img className='worldimg' src={world} alt="the world" /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Sports Lover</th>
            <th>Full energy</th>
            <th>Globetrotter</th>
          </tr>
          <tr>
            <td>Martial arts practisioner</td>
            <td>Proactive</td>
            <td>Love to travel</td>
          </tr>
          <tr>
            <td>Rugby, American football, Soccer and Basketball</td>
            <td>Always looking for the better way to do it</td>
            <td>Open minded</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}