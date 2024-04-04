import React, { useState, useEffect } from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import Movies from '../app/components/Movies';

export default function Home() {

  const handleDeleteEntry = async (id) => {
    const response = await fetch('/api/deleteEntry', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    if (response.ok) {
      // Remove the deleted entry from the entries list
      setEntries(entries.filter((entry) => entry._id !== id));
    } else {
      console.error(data.error);
    }
  };

  return (
    <div>
      <h1>IMR movie App</h1>
      <Navbar />
      <Movies onDeleteEntry={handleDeleteEntry}/>
      <Footer />
    </div>
  );
}

