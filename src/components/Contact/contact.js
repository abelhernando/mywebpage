import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Contact() {
    return (
        <div className='contact'>
            <h2 className="section-target" id='contact'>Get In Touch</h2>
            <ul className="actions">
                <li><i class="fas fa-mobile-alt fa-1x"></i>  (+34) 662-375-670</li>
                <li><i class="fas fa-envelope fa-1x"></i>    abel.hernando.ah@gmail.com</li>
                <li className="link"><i class="fas fa-user"></i><a href='https://www.linkedin.com/in/abel-hernando-653a9641/' target="_blank">Visit LinkedIn</a></li>
               
            </ul>
            <div className="copyright">
                &copy; Copyright 2018 Abel Hernando Fortis | All Rights Reserved.
            </div>
        </div>
    )
}

export default Contact