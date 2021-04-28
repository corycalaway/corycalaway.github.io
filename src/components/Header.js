import React from 'react'

const Header = (props) => {
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return (
        <header >
          
        <h1>
            <span className="name">
                <a className="name" href="/">Cory Calaway</a>
            </span>
        </h1>

       
        <nav>
            <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
        </nav>
        
    </header>
    )
}

export default Header
