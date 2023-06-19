import React from 'react';
import { Footer, Header } from '../../component';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
    <Header/>
    <Outlet/>
    <Footer/>
    </main>
  )
}

export default Home
