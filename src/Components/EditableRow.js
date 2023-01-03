import React from 'react'

function EditableRow({editFormData,handleEditFormChange,handleCancelClick}) {
  return (
   <tr>
   <td><input 
        type="text"
        name='fullName'
        placeholder='enter a full name'
        required='required'
        onChange={handleEditFormChange}
        value={editFormData.fullName}
        />
    </td> 
    <td><input 
        type="text"
        name='address'
        placeholder='enter a address'
        required='required'
        onChange={handleEditFormChange}
        value={editFormData.address}
        />
    </td>
    <td>
        <input 
        type="text"
        name='phoneNumber'
        placeholder='enter a phoneNumber'
        required='required'
        onChange={handleEditFormChange}
        value={editFormData.phoneNumber}
        />
    </td> 
    <td>
         <input 
        type="text"
        name='email'
        placeholder='enter a email'
        required='required'
        onChange={handleEditFormChange}
        value={editFormData.email}
        />
   </td>
   <td>
            <button type='submit'>Save</button>
            <button onClick={handleCancelClick}> cancel</button>
    </td>
   </tr>
  )
}

export default EditableRow