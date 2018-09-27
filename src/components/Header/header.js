import React from 'react'
import './index.css'
import Zoom from 'react-reveal/Zoom';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='header-content'>
                <Zoom >
                    <h1 className="section-target" id='introduction'>I'm Abel Hernando</h1>
                    <h5>and this is the start of my journey to become a great web developer!</h5>
                </Zoom>
                </div>
            </div>
        );
    }
}