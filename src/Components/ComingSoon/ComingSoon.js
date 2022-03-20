import React from 'react'
import './ComingSoon.css'
import logo from '../../Common/Images/white_cup.png'
import { Container, Row, Col, Button } from 'react-bootstrap'
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
                <Container className='d-flex justify-content-center'>
                    <a href="https://discord.gg/y4yfRY8Mct" target="_blank" rel="noreferrer" >
                        <FontAwesomeIcon className='custom-icon p-3' icon={faDiscord} size='3x' />
                    </a>
                    <a href="https://t.me/ChillNCode" target="_blank" rel="noreferrer" >
                        <FontAwesomeIcon className='custom-icon p-3' icon={faTelegram} size='3x' />
                    </a>
                    <a href="https://github.com/ChillNCodeIT" target="_blank" rel="noreferrer" >

                        <FontAwesomeIcon className='custom-icon p-3' icon={faGithub} size='3x' />
                    </a>
                </Container>
            </Col>
        </div >
    )
}

export default ComingSoon