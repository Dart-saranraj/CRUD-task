import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const EmpTable = ({empDetails, handleDelete, handleEdit}) => {
    
  return (
    <table className='table'>
        <thead className='thead'>
            <tr>
                
                <th>Name</th>
                <th>Mobile No</th>
                <th>Designation</th>
                <th>Email Id</th>
                <th>Location</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody className='tbody'>
        {empDetails.map((value, key) => {
            return (
              <tr key={key}>
                
                <td>{value.name}</td>
                <td>{value.mobileNo}</td>
                <td>{value.designation}</td>
                <td>{value.emailId}</td>
                <td>{value.location}</td>
                <td>
                <RiDeleteBin6Fill className='Delete' onClick={()=> handleDelete(value.id)}/>
                <FaRegEdit className='Edit'  onClick={()=> handleEdit(value.id)} />
                    {/* <button className='Delete' onClick={()=> handleDelete(value.id)}>Delete</button> */}
                   {/*  <button className='Edit' onClick={()=> handleEdit(value.id)}>Edit</button>  */}
                </td>
              </tr>
            )
          })}
        </tbody>
    </table>
  )
}

export default EmpTable