import React from 'react'
import './index.css'
import settlewise from '../../styles/images/happygroup.jpg'
import personalwebsite from '../../styles/images/test-images/treeroad.jpg'

function Portfolio() {
    return <div className='portfolio'>
        <header>
            <h1 className="section-target" id='portfolio'>portfolio</h1>
        </header>
        <a href='https://github.com/abelhernando/settle-wise' target="_blank">
            <img className='settle' src={settlewise} />
        </a>
        <a href='https://github.com/abelhernando/mywebpage' target="_blank">
            <img className='website' src={personalwebsite} />
        </a>
    </div>


}

export default Portfolio