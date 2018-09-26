import React from 'react';
import { Table } from 'reactstrap';
import './index.css'

export default class Personal extends React.Component {
  render() {
    return (
      <Table borderless  className="section-target" id='personal' >
        <thead className='personal'>
          <tr>
            <th>Sports Lover</th>
            <th>Full energy</th>
            <th>Globetrotter</th>
          </tr>
        </thead>
        <tbody>
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