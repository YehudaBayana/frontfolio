import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Sidebar />
      <Footer />
    </>
  );
};

export default Layout;
