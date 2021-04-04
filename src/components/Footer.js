import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Footer = () => {
    return (
        <footer id="contact-me" className=" container d-flex justify-content-center">
            {/* <div className="right-border">
            <h3 className="section-title">Contact<br />Me</h3>
        </div> */}
            <address className="contact-info">
                <ul className="row">
                    {/* <li className="col">
                        <p><a href="tel:801-234-9770">801.234.9770</a></p>
                    </li> */}
                    <li className="col-3 mediaIcon">
                        <p><a href="mailto: cory.c.calaway@gmail.com">
                        <img src={require(`../assets/images/email.svg`).default}
                                alt='Email'
                                key={uuidv4()}
                            />
                        
                        </a></p>
                    </li>
                    <li className="col-3 mediaIcon">
                        <p><a href="https://github.com/corycalaway/">
                            <img src={require(`../assets/images/github1.svg`).default}
                                alt='GitHub'
                                key={uuidv4()}

                            />
                        </a></p>
                    </li>
                    <li className="col-3 mediaIcon">
                        <p><a href="https://twitter.com/CoryCalaway">
                            <img src={require(`../assets/images/twitter.svg`).default}
                                alt='Twitter'
                                key={uuidv4()}
                            />
                        </a></p>
                    </li>
                    <li className="col-3 mediaIcon">
                        <p><a href="https://www.linkedin.com/in/calawaycory">
                        <img src={require(`../assets/images/linkedin.svg`).default}
                                alt='LinkedIN'
                                key={uuidv4()}
                            />
                            </a></p>
                    </li>
                </ul>
            </address>

        </footer>
    )
}

export default Footer
