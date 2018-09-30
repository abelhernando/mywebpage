import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
    return (
        <div className='contact'>
            <h2 className="section-target" id='contact'>Get In Touch</h2>
            <ul className="actions">
                <li><FontAwesomeIcon icon="phone" /> (+34) 662-375-670</li>
                <li><FontAwesomeIcon icon="envelope" /> abel.hernando.ah@gmail.com</li>
            </ul>
            <div className="copyright">
                &copy; Copyright 2018 Abel Hernando Fortis | All Rights Reserved.
            </div>
        </div>
    )
}

export default Contact