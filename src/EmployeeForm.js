import React from 'react'

const EmployeeForm = ({handleSubmit,empName,setEmpName,mobileNumber,setMobileNumber,designation,setDesignation,email,setEmail,location,setLocation}) => {
  return (
    <main className='empForm'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="empName">Name:</label>
            <input type="text" id='empName' placeholder='Employee Name' required value={empName} onChange={(e)=>setEmpName(e.target.value)} />
            <label htmlFor="mobileNumber">Mobile No:</label>
            <input type="tel" id='mobileNumber' placeholder='Mobile Number' required value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
            <label htmlFor="designation">Designation:</label>
            <input type="text" id='desigination' placeholder='Designation' required value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
            <label htmlFor="email">Email Id:</label>
            <input type="text" id='email' placeholder='Email Id' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="location">Location:</label>
            <input type="text" id='location' placeholder='Location' required value={location} onChange={(e)=>setLocation(e.target.value)}/>
            <button type='submit' className='subButton' >Submit</button>

        </form>
    </main>
  )
}

export default EmployeeForm