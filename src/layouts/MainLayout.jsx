import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";

const MainLayout = ({ children, refs }) => {
  return (
    <>
      <Header refs={refs} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
