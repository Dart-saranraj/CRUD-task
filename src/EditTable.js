import React from 'react';

const EditTable = ({ editData, handleUpdate, setEditData }) => {
  
  const handleChange = (e, field) => {
    setEditData({ ...editData, [field]: e.target.value });
  };

  return (
    <main className='empForm'>
      {editData && (
        <>
          <form onSubmit={(e) => { e.preventDefault() }}>
            <label htmlFor="empName">Name:</label>
            <input type="text" id='empName' placeholder='Employee Name' required value={editData.name} onChange={(e) => handleChange(e, 'name')}/>
            
            <label htmlFor="mobileNumber">Mobile No:</label>
            <input type="text" id='mobileNumber' placeholder='Mobile Number' required value={editData.mobileNo} onChange={(e) => handleChange(e, 'mobileNo')}/>

            
            <label htmlFor="designation">Designation:</label>
            <input type="text" id='designation' placeholder='Designation' required value={editData.designation} onChange={(e) => handleChange(e, 'designation')}/>
            <label htmlFor="email">Email Id:</label>
            <input type="text" id='email' placeholder='Email Id' required value={editData.emailId} onChange={(e)=>handleChange(e, 'emailId')}/>
            <label htmlFor="location">Location:</label>
            <input type="text" id='location' placeholder='Location' required value={editData.location} onChange={(e)=>handleChange(e, 'location')}/>
            <button type='submit' className='subButton' onClick={() => { handleUpdate(editData.id) }}>Update</button>
          </form>
        </>
      )}
    </main>
  );
};

export default EditTable;
