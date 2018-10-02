// import React from 'react'
// import './index.css'
// import settlewise from '../../styles/images/happygroup.jpg'
// import personalwebsite from '../../styles/images/test-images/treeroad.jpg'

// function Portfolio() {
//     return <div className='portfolio'>
//         <header>
//             <h1 className="section-target" id='portfolio'>portfolio</h1>
//         </header>
//         <a href='https://github.com/abelhernando/settle-wise' target="_blank">
//             <img className='settle' src={settlewise} />
//         </a>
//         <a href='https://github.com/abelhernando/mywebpage' target="_blank">
//             <img className='website' src={personalwebsite} />
//         </a>
//     </div>
// }

// export default Portfolio


import React from 'react'
import { Card, CardImg, CardDeck, Col, Button } from 'reactstrap';
import './index.css'
import settlewise from '../../styles/images/happygroup.jpg'
import personalwebsite from '../../styles/images/test-images/treeroad.jpg'

function Portfolio() {
    return (<div className='portfolio'>
        <div className="portfolio-card">
            <div className="hovereffect">
                <CardImg className="img-responsive" src={settlewise} alt="" />
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
                <img className="img-responsive" src={personalwebsite} alt="" />
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


