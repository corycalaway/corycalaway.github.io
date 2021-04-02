import React, { useState } from 'react';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './Header'


const PortfolioContainer = () => {

    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch(currentPage) {
          case "About":
            return <About />
          case "Portfolio":
            return <Portfolio />;
            case "Contact":
              return <Contact />;
            case "Resume":
              return <Resume />
        }
        
      };

      return (
        <div>
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          <div>
            {
              <div>{renderPage()}</div>
              
              // Render the component returned by 'renderPage()'
              // YOUR CODE HERE
              //
            }
          </div>
        </div>
      );
}

export default PortfolioContainer
