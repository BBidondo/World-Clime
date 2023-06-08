  import React from 'react';
   import SearchBar from './SearchBar.jsx';
  //  import { Link } from 'react-router-dom';
  //  import About from './About'
  // import './Nav.module.css';

 function Nav({onSearch}) {
    return (
      <div> 
        <SearchBar onSearch={onSearch}/>
      </div>
    );
  };

  export default Nav;
