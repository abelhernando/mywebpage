import React from 'react'
import { Card, CardImg, CardDeck, Col, Button } from 'reactstrap';
import './index.css'
import settlewise from '../../styles/images/happygroup.jpg'
import personalwebsite from '../../styles/images/propuesta1.png'

function Portfolio() {
    return (<div className='portfolio'>
        <div className="portfolio-card">
            <div className="hovereffect">
                <CardImg id="settlewise" className="img-responsive" src={settlewise} alt="" />
                <div className="overlay">
                    <h2>Settle Wise</h2>
                    <p>
                        <a href='https://github.com/abelhernando/settle-wise' target="_blank">See Code</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="portfolio-card">
            <div className="hovereffect">
                <img id="website" className="img-responsive" src={personalwebsite} alt="" />
                <div className="overlay">
                    <h2>My Website</h2>
                    <p>
                        <a href='https://github.com/abelhernando/mywebpage' target="_blank">See Code</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Portfolio


