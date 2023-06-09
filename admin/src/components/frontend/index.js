import React from "react";
import { Switch, Route } from 'react-router-dom';
import Loader from "./include/loader";
// import Nav from "./include/nav";
// import Footer from "./include/footer";
// import Slide from "./include/slide";
// import Leftmenu from "./include/leftmenu";
// import Rightmenu from "./include/rightmenu";
// import Signin from "./include/signin";
// import Betbalance from "./include/betbalance.js";
import MainContent from "./include/maincontent.js";

import Navbar from "./backend/navbar.js";
import Footer from "./backend/footer.js";
import Chatbox from "./backend/chatbox.js";
import HeaderRight from "./backend/header_right.js";
import LeftSidebar from "./backend/leftSidebar.js";
import Content from "./backend/content.js";


const index = () => {
  return (
    <>
      {/* <Loader /> */}
      {/* <div id="loader"></div> */}

      <div id="main-wrapper">
        <Navbar />

         <Chatbox />

         <HeaderRight />

         <LeftSidebar />

            {/* <Outlet /> */}
        
             <Content />
            {/* <MainContent /> */}

        <Footer />
      </div>





      {/* <MainContent /> */}

      
    </>
  );
};

export default index;
