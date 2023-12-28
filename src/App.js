import Header from "./Header";
import Footer from "./Footer";
import EmployeeForm from "./EmployeeForm";
import EmpTable from "./EmpTable";
import { useEffect, useState } from "react";
import axios from "axios";
import EditTable from "./EditTable";
import Nav from "./Nav";
import Info from "./Info";
import About from "./About";
import { Routes,Route } from "react-router-dom";
function App() {

  const baseURL ="http://localhost:3500"
  const title = "Employee Detailes"

  const [empDetails,setEmpDetails] = useState([]);
  const [empName,setEmpName]= useState('');
  const [mobileNumber,setMobileNumber]= useState('');
  const [designation,setDesignation]= useState('');
  const [email,setEmail]= useState('');
  const [location,setLocation]= useState('');

  const [editData,setEditData] = useState({
    id: "",
    name: "",
    mobileNo: "",
    designation: "",
    emailId: "",
    location: ""
  })
  console.log(editData,"editdata")

/*   const [editName,setEditName]= useState(editData.name);
  const [editMobileNumber,setEditMobileNumber]= useState(editData.mobileNo);
  const [editDesignation,setEditDesignation]= useState(editData.designation);
  const [editEmail,setEditEmail]= useState(editData.emailId);
  const [editLocation,setEditLocation]= useState(editData.location); */

  



  useEffect(()=>{
    const fetchEmp = async ()=>{
      try{
        const response = await axios.get(`${baseURL}/empDetails`)
        setEmpDetails(response.data);
        console.log(response.data);
        
      }catch(err){
        console.log(`Error:${err.message}`);
      }
    }
    fetchEmp();

  },[])

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const id = empDetails.length ? empDetails[(empDetails.length)-1].id +1 : 1;
    const newDetails ={id,name:empName,mobileNo:mobileNumber,designation:designation,emailId:email,location:location}
    try{
      const response= await axios.post(`${baseURL}/empDetails`,newDetails);
      const allDetails = [...empDetails,response.data]
      setEmpDetails(allDetails)
      setEmpName('')
      setMobileNumber('')
      setDesignation('')
      setDesignation('')
      setLocation('')
      setEmail('')
    }catch(err){
      console.log(`Error:${err.message}`);
    }
  }

  const handleDelete=  async (id)=>{
    await axios.delete(`${baseURL}/empDetails/${id}`)
    const allDetails = empDetails.filter(emp => emp.id !==id)
    setEmpDetails(allDetails)
  }

  const handleEdit = async(id)=>{
    const response = await axios.get(`${baseURL}/empDetails/${id}`)
    console.log(response.data)
    const newData = response.data
    setEditData({
      id: newData.id,
      name: newData.name,
      mobileNo: newData.mobileNo,
      designation: newData.designation,
      emailId: newData.emailId,
      location: newData.location
    })

    /* const newDetails ={id,name:editName,mobileNo:editMobileNumber,designation:editDesignation,emailId:editEmail,location:editLocation}  */ 
  }

  const handleUpdate = async(id)=>{
    console.log(id,"id")
    const updatedDetails = {id,name:editData.name,mobileNo:editData.mobileNo,designation:editData.designation,emailId:editData.emailId,location:editData.location}
    try{
      const response = await axios.put(`${baseURL}/empDetails/${id}`,updatedDetails)
      setEmpDetails(empDetails.map(emp => emp.id === id ?{...response.data}:emp))
      setEditData('')
    }catch(err){
      console.log(`Error:${err.message}`);
    }
   
   console.log(updatedDetails)
  } 
 
  return (
    <div className="App">
      <Header title={title} />
      <Nav/>
      <Routes>

      <Route path="/" element={
      <div>
      {!editData.id ? (
      <EmployeeForm 
        handleSubmit={handleSubmit} 
        empName={empName} 
        setEmpName={setEmpName} 
        mobileNumber={mobileNumber} 
        setMobileNumber={setMobileNumber} 
        designation={designation} 
        setDesignation={setDesignation} 
        email={email} 
        setEmail={setEmail} 
        location={location} 
        setLocation={setLocation}
      />) :(
      <EditTable  
        editData={editData}
        setEditData={setEditData} 
        handleUpdate={handleUpdate}  
      /> )}
      <EmpTable 
        empDetails={empDetails}
        handleDelete={handleDelete}
         handleEdit={handleEdit} 
      />
      </div>
      } />
      <Route path="/Info" element={<Info empDetails={empDetails} />} />
      <Route path="/About" element={<About/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
