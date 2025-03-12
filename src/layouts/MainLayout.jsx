import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div style={{ height: '200vh'}}>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
