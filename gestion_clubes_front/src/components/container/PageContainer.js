import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const PageContainer = ({ title, description, children }) => (
  <div className="bg-darkbody w-full min-h-screen">
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </div>
);

PageContainer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default PageContainer;