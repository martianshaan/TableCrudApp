import React from 'react'

function ReadOnlyRow({contact,handleEditClick,hanleDeleteClick}) {
  return (
  
         
           <tr >
           {/* <td>{person.id}</td> */}
           <td>{contact.fullName}</td>
           <td>{contact.address}</td>
           <td>{contact.phoneNumber}</td>
           <td>{contact.email}</td>
           <td>
            <button type='button'
             onClick={(event) => handleEditClick(event, contact)}>Edit</button>
            <button onClick={()=>hanleDeleteClick(contact.id)}>Delete</button>
           </td>
           </tr>
  
  )
}

export default ReadOnlyRow