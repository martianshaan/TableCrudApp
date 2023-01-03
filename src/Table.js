import React,{useState} from 'react'
import data from './Data';
import { useNavigate } from "react-router-dom";
import Form from './Form';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Table() {
const [contact,setContact] = useState(data);
const [toggle, setToggle] = useState(null); 



    const navigate = useNavigate();
   const handleClick =()=>{navigate(
    {pathname:"/form",
     state:{
      state: setContact
     }
  }
    )}

    const Edit=(data)=>{
      setToggle(data);
    }



    const[formData,setFormData]= useState({
      id:'',
      firstName:'',
    lastName:'',
    dob: '',
    ismarried:'',
    photourl: ''
    })
  
  
    function handleChange (e){
    //   const {name,value,type,checked}=e.target;
    //   setFormData(prevFormData=>{
    //     return {
    //     ...prevFormData,
    //     [name]: type === "checkbox" ? checked : value
    //     }})
    //     console.log(setFormData);
    // 
    const fieldName= e.target.getAttribute("name");
    const fieldValue= e.target.value;
    const newFormData= {...formData};
    newFormData[fieldName]= fieldValue;
    setFormData(newFormData)

    }
    const handleSubmit=(e)=>{
      
      e.prevenDefault();
      const newContact= {
        id: Math.random(),
      firstName:formData.firstName,
    lastName: formData.lastName,
    dob: formData.dob,
    ismarried: formData.ismarried,
    photourl: formData.photourl
      }
  const newConatcts= [...contact,newContact]
  setContact(newConatcts)
  
  setFormData({
  id:'',
  firstName:'',
  lastName:'',
  dob: '',
  ismarried:'',
  photourl: ''
  })
  }   
  
  
  
  return (
    <div className='table'>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Married</th>
                <th>Photo</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {contact.map(person=>(
            <tr key={person.id}>
                <td>{person.id}</td>
               <td>{person.firstName}</td>
                <td>{person.lastName}</td>
               <td>{person.dob}</td>
                <td>{person.ismarried ? "yes":"no"}</td>
                <td><img alt='k' src={person.photourl}/></td>
                <td>
                  <button><EditIcon /></button> <br/> 
                  <button ><DeleteIcon sx={{color: 'red'}}/></button>
                </td>
             </tr>
            ))}
           
        </tbody>
        
      </table>
     
      <button onClick={handleClick}>Add</button>

      <form className='form' onSubmit={handleSubmit}>

      <input type="text" name="firstName" placeholder='Enter a first Name' required='required' 
      value={formData.firstName} onChange={handleChange}/>
      
      <input type="text" name="lastName" placeholder='Enter a last Name' 
      required='required' value={formData.lastName} onChange={handleChange}/>

      <input type="text" name="dob" placeholder='Enter a your DOB' required='required' 
      value={formData.dob} onChange={handleChange}/>
      
      <input type="checkbox" id='ismarried'  name='ismarried'
       checked={formData.ismarried}  onChange={handleChange}/> 
      <label htmlFor="ismarried">Are you married ?</label>

      <input type="file" multiple accept='image/*' placeholder='upload image' name='photourl' onChange={handleChange}/> 
       <button type="submit" onSubmit={handleSubmit}>submit</button>
    </form>
    </div>
  )
}

export default Table

