// pages/addmovies.js

import React from 'react';
import Remove from '../app/components/Remove';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import Movies from '../app/components/Movies';
const DeleteMovie = () => {
    return (
        <div>
            <Navbar />
            <Movies />
            <Remove />
            <Footer />
            <Navbar />
        </div>
    );
};

export default DeleteMovie;
