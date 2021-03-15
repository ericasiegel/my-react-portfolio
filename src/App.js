// import the React app
import React, { useState } from 'react';
// import the Header component
import Header from './components/Header';
// import the About component
import About from './components/About';
// import Project component
import Project from './components/Project';
// import Contact component
import Contact from './components/Contact';
// import Resume component
import Resume from './components/Resume';
// import Footer component
import Footer from './components/Footer';
// import css file
import './App.css';


function App() {
  // create useState for page functionality
  const [currentPage, handlePageChange] = useState('About Me')
  // create renderPage to filter through which pages are selected
  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case "About Me":
        return <About />;
      case "My Projects": 
        return <Project />;
      case "Contact Me":
        return <Contact />;
      case "My Resume":
        return <Resume />;
      default:
        return <About />
    }
  };
  return (
    <div className="App">
      <Header  currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)
        }
      </div>
    </div>
  );
}

export default App;
