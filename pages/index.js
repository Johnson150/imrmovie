import React, { useState, useEffect } from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import Movies from '../app/components/Movies';
import AddEntryForm from '../app/components/AddEntryForm';
import EditEntryForm from '../app/components/EditEntryForm';
import DeleteEntryForm from '../app/components/DeleteEntryForm'; // Import DeleteEntryForm component

const Admin = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null); // State to store the selected entry for editing
  const [isDeleteFormVisible, setIsDeleteFormVisible] = useState(false); // State to manage delete form visibility

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

  // Function to handle showing the delete form
  const handleShowDeleteForm = (entry) => {
    setSelectedEntry(entry); // Set the selected entry for deletion
    setIsDeleteFormVisible(true); // Show the delete form
  };

  // Function to handle canceling the delete
  const handleCancelDelete = () => {
    setSelectedEntry(null); // Clear the selected entry
    setIsDeleteFormVisible(false); // Hide the delete form
  };

  return (
    <div>
      <h1>IMR movie App</h1>
      <Navbar />
      <AddEntryForm onAddEntry={handleAddEntry} />
      {/* Conditionally render EditEntryForm if selectedEntry is not null */}
      {selectedEntry && !isDeleteFormVisible && (
        <EditEntryForm
          entry={selectedEntry}
          onUpdateEntry={handleUpdateEntry}
          onCancel={handleCancelEdit}
        />
      )}
      {/* Conditionally render DeleteEntryForm if selectedEntry is not null */}
      {selectedEntry && isDeleteFormVisible && (
        <DeleteEntryForm
          entry={selectedEntry}
          onDeleteEntry={handleDeleteEntry}
          onCancel={handleCancelDelete}
        />
      )}
      <Movies
        entries={entries}
        onDeleteEntry={handleDeleteEntry}
        onEditEntry={handleEditEntry}
        onDeleteEntryForm={handleShowDeleteForm} // Pass the function to show the delete form
      />
      <Footer />
    </div>
  );
}

export default Admin;
