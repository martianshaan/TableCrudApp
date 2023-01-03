// import logo from './logo.svg';
// import './App.css';
// import Table from './Table';

// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Form from './Form';
// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//     <Route exact path="/" element={<Table/>}/>
//     <Route exact path="/form" element={<Form/>}/>
//     </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { Fragment, useState } from 'react'
import EditableRow from './Components/EditableRow';
import ReadOnlyRow from './Components/ReadOnlyRow';
import Data from './Data';

function App() {
const [contacts,setContacts]= useState(Data)   
const [addFormData,setAddFormData] =useState({
  fullName:"",
  address:"",
  phoneNumber:"",
  email:""
})

const [editFormData,setEditFormData]=useState({
  fullName:"",
  address:"",
  phoneNumber:"",
  email:""
})
const [editContactId,setEditContactId] = useState(null)

const handleChange=(e)=>{
  // const fieldName = e.target.getAttribute('name');
  // const fieldValue= e.target.value;
  // const newFormData= {...addFormData};
  // newFormData[fieldName]= fieldValue

  // setAddFormData(newFormData)

  const {name,value}= e.target;
  setAddFormData(prevAddFormData=>
   ({...prevAddFormData,
  [name]:value}))
}

const  handleSubmit=(e)=>{
  e.preventDefault();
  // const newContact={
  //   id:Math.random(),
  //   fullName: addFormData.fullName,
  //   address:addFormData.address,
  //   phoneNumber:addFormData.phoneNumber,
  //   email: addFormData.email
  // }
  // const newContacts=[...contacts,newContact]
  // setContacts(newContacts)

  setContacts([...contacts,{...addFormData,id:Math.random()}])
 setAddFormData({
  fullName:"",
  address:"",
  phoneNumber:"",
  email:""
})
}
const handleEditClick=(e,contact)=>{
  e.preventDefault();
  console.log(contact);
  setEditContactId(contact.id)

  const formValues={
    fullName:contact.fullName,
  address: contact.address,
  phoneNumber: contact.phoneNumber,
  email: contact.email
  }

  setEditFormData(formValues)
}

const handleEditFormChange=(e,contact)=>{
  e.preventDefault();
  const{name,value}= e.target;
  setEditFormData(preEditFormData=>({
    ...preEditFormData,
    [name]:value
  }))
}

const handleEditFormSubmit=(e)=>{
  e.preventDefault();

  const editedContact = {
    id: editContactId,
    fullName: editFormData.fullName,
    address: editFormData.address,
    phoneNumber: editFormData.phoneNumber,
    email: editFormData.email,
  };

  const newContacts = [...contacts];

  const index = contacts.findIndex((contact) => contact.id === editContactId);

  newContacts[index] = editedContact;

  setContacts(newContacts);
  setEditContactId(null);
}

const handleCancelClick=()=>{
  setEditContactId(null)
}

const hanleDeleteClick=(del)=>{
  const delData= contacts.filter((tbd)=>{
    return del!==tbd.id
  });
  console.log(delData);
  setContacts(delData)
}
  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th>Name</th>
            <th>Address</th>
            <th>phoneNumber</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>(
            <Fragment>
              {editContactId===contact.id?  
              <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange}
               handleCancelClick={handleCancelClick}
              />: 
              
              <ReadOnlyRow contact={contact} handleEditClick={handleEditClick}  hanleDeleteClick={hanleDeleteClick}/> }
            </Fragment>
           
          
          // <tr >
          // {/* <td>{person.id}</td> */}
          // <td>{contact.fullName}</td>
          // <td>{contact.address}</td>
          // <td>{contact.phoneNumber}</td>
          // <td>{contact.email}</td>
          // </tr>
          ))}
          </tbody>
       
      </table>
      </form>
      <h2> Add a detail</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        name='fullName'
        placeholder='enter a full name'
        required='required'
        onChange={handleChange}
        value={addFormData.fullName}
        />
         <input 
        type="text"
        name='address'
        placeholder='enter a address'
        required='required'
        onChange={handleChange}
        value={addFormData.address}
        />
        <input 
        type="text"
        name='phoneNumber'
        placeholder='enter a phoneNumber'
        required='required'
        onChange={handleChange}
        value={addFormData.phoneNumber}
        />
         <input 
        type="text"
        name='email'
        placeholder='enter a email'
        required='required'
        onChange={handleChange}
        value={addFormData.email}
        />
    <button type='submit'> Add</button>
      </form>
    </div>
  )
}

export default App

