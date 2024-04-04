// pages/addmovies.js

import React from 'react';
import Edit from '../app/components/Edit';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';

const EditMoviePage = () => {
    return (
        <div>
            <Navbar />
            <Edit />
            <Footer />
            <Navbar />
        </div>
    );
};

export default EditMoviePage;
