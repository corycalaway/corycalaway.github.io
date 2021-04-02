import React from 'react'

const Footer = () => {
    return (
        <footer id="contact-me" className="flex-section">
        <div className="right-border">
            <h3 className="section-title">Contact<br />Me</h3>
        </div>
        <address className="contact-info">
            <ul>
                <li>
                    <p><a href="tel:801-234-9770">801.234.9770</a></p>
                </li>
                <li>
                    <p><a href="mailto: cory.c.calaway@gmail.com">cory.c.calaway@gmail.com</a></p>
                </li>
                <li>
                    <p><a href="https://github.com/corycalaway/">GitHub</a></p>
                </li>
                <li>
                    <p><a href="https://twitter.com/CoryCalaway">Twitter</a></p>
                </li>
                <li>
                    <p><a href="https://www.linkedin.com/in/calawaycory">LinkedIn</a></p>
                </li>
            </ul>
        </address>

    </footer>
    )
}

export default Footer
