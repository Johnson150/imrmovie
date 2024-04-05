import React, { useState, useEffect } from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import Movies from '../app/components/Movies';
import AddEntryForm from '../app/components/AddEntryForm';
import EditEntryForm from '../app/components/EditEntryForm'; // Import EditEntryForm component

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null); // State to store the selected entry for editing

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

  // Define handleAddEntry function to handle adding new entries
  const handleAddEntry = (newEntry) => {
    // Handle adding the new entry to your data store or perform any necessary actions
    console.log('New entry added:', newEntry);
    // Assuming newEntry has a unique identifier like _id
    setEntries([...entries, newEntry]);
  };

  // Function to handle editing an entry
  const handleEditEntry = (entry) => {
    setSelectedEntry(entry); // Set the selected entry for editing
  };

  // Function to handle canceling the edit
  const handleCancelEdit = () => {
    setSelectedEntry(null); // Clear the selected entry
  };

  // Function to handle updating the entry
  const handleUpdateEntry = (updatedEntry) => {
    // Find the index of the updated entry in the entries array
    const updatedEntries = entries.map(entry => entry._id === updatedEntry._id ? updatedEntry : entry);
    setEntries(updatedEntries);
    // After updating, clear the selected entry
    setSelectedEntry(null);
  };

  return (
    <div>
      <h1>IMR movie App</h1>
      <Navbar />
      <AddEntryForm onAddEntry={handleAddEntry} />
      {/* Conditionally render EditEntryForm if selectedEntry is not null */}
      {selectedEntry && (
        <EditEntryForm
          entry={selectedEntry}
          onUpdateEntry={handleUpdateEntry}
          onCancel={handleCancelEdit}
        />
      )}
      <Movies entries={entries} onDeleteEntry={handleDeleteEntry} onEditEntry={handleEditEntry} />
      <Footer />
    </div>
  );
}

export default Home;
