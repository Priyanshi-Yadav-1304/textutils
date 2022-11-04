import React from 'react'
import PropTypes from 'prop-types'


// let mystyle={
//   Color : 'white',
//   backgroundColor : 'black'
// }

export default function Navbar(props,) {
  const mode = () =>{
   
    document.body.style.backgroundColor = document.body.style.backgroundColor==='rgb(15, 90, 86)'?'white':'rgb(15, 90, 86)';
    document.body.style.color = document.body.style.backgroundColor==='rgb(15, 90, 86)'?'white':'black';
  }
  return (
    <nav className="navbar navbar-dark d-flex  bg-secondary " >
    <div className="container-fluid" >
      <a className="navbar-brand" href="/">{props.title}</a>
      <div className="form-check form-switch">
        <input onClick={mode} className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
      </div>
    </div>
  </nav>
  )
}
Navbar.prototype = {title : PropTypes.string.isRequired, }

// Specifies the default values for props:
Navbar.defaultProps = {
    title: 'Set title here'
  };
