import React, { Component } from 'react';
import NavBarContainer from "../nav/navbar_container";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class admin_fr  extends React.Component  {

  render() {

    const styles = {
      align: "center",
      color: "black",
      paddingTop: "250px",
      borderRadius: "5px",
      textAlign: "center",
    };

    return (
      <>
         <div className="main">

          {/* <div className="main-nav">
            <NavBarContainer />
          </div> */}

          <div className="all-games">
            <h1 className="main-header" style={styles}>
              Hi, Welcome Admin !  
              <br/>
              <Link className="login-btn" to={'/login'}>Log In</Link>
            </h1>
            
          </div>
        </div>
      </>
    )
  }
}
