import React from 'react'
import './ComingSoon.css'
import logo from '../Common/Images/white_cup.png'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons"



function ComingSoon() {

    return (
        <div className='custom-gradient'>
            <Col align='center'>
                <div className='custom-logo'>
                    <img src={logo} alt='logo'></img>
                </div>
                <h1>
                    Coming Soon
                </h1>
                <h2>
                    Stay chill 'n' happy coding!
                </h2>
                <Row>
                    <FontAwesomeIcon className='mx-5' icon={faDiscord} size='3x' />
                    <FontAwesomeIcon icon={faTelegram} size='3x' />
                    <FontAwesomeIcon icon={faGithub} size='3x' />
                </Row>
            </Col>
        </div>
    )
}

export default ComingSoon