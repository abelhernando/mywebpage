import React from 'react';
import { Table, Row } from 'reactstrap';
import './index.css';
// import pic01 from '../../styles/images/pic01.png'

export default class Skills extends React.Component {
  render() {
    return (
      <Table borderless className="section-target" id="skills">
        <tbody className="skills">
          <tr>
            <th scope="row">ES6</th>
            <Row>
            <td>Object Oriented: classes and inheritance</td>
            <td>API and promises, node.js, MongoDB and jQuery</td>
            <td>Test Driven Development with Jasmine and Mocha, Code Coverage</td>
            </Row>
          </tr>
          <tr>
            <th scope="row">REACT</th>
            <td>Single Page Application</td>
            <td>Components and state inheritance</td>
            <td>Routes</td>
          </tr>
          <tr>
            <th scope="row">CSS</th>
            <td>Mobile First and Web responsive</td>
            <td>CSS3, Sass and Bootstrap</td>
          </tr>
          <tr>
            <th scope="row">TEAMWORK</th>
            <td>Agile system, Scrum and Kanban</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
