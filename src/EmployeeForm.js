import React from 'react'

const EmployeeForm = ({handleSubmit,empName,setEmpName,mobileNumber,setMobileNumber,designation,setDesignation,email,setEmail,location,setLocation}) => {
  return (
    <main className='empForm'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="empName">Name:</label><br />
            <input type="text" id='empName' placeholder='Employee Name' required value={empName} onChange={(e)=>setEmpName(e.target.value)} />
            <br />
            <label htmlFor="mobileNumber">Mobile No:</label><br />
            <input type="tel" id='mobileNumber' placeholder='Mobile Number' required value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
            <br />
            <label htmlFor="designation">Designation:</label><br />
            <input type="text" id='desigination' placeholder='Designation' required value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
            <br />
            <label htmlFor="email">Email Id:</label><br />
            <input type="text" id='email' placeholder='Email Id' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <label htmlFor="location">Location:</label><br />
            <input type="text" id='location' placeholder='Location' required value={location} onChange={(e)=>setLocation(e.target.value)}/>
            <br />
            <button type='submit' className='subButton' >Submit</button>

        </form>
    </main>
  )
}

export default EmployeeForm