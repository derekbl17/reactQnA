import {useState} from 'react'
import { db,collection,addDoc } from '../../firebase_config'

export default function Form() {
    const [formData,setFormData]=useState({name:"",email:"",question:""})

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(!formData.name || !formData.email || !formData.question){
            alert("Fields cant be empty")
            return;
        }
        try{
            await addDoc(collection(db,"submissions"),formData)
            alert("Question sent!")
            setFormData({name:"",email:"",question:""})
        } catch(err){
            console.error("Error sending form to db: ",err)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email adress</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="question">Question</label>
      <textarea
        id="question"
        name="question"
        placeholder="Enter Your Question"
        value={formData.question}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
