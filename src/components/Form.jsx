import { useState } from "react"

export default function Form(){

const [name, setName] = useState('')
const [company, setCompany] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')

function onSubmit(){
    event.preventDefault()
}

return (
    <>
    <h1>Contact Me:</h1>
    <div className='form-container'>
    <form className = 'form'>
        <label for="fname">Name:</label>
        <br />
        <input type="text" id="name" name="name" placeholder='Enter Name' value={name} onChange={(event)=> setName (event.target.value)} />
        <br/>
        <label for="company">Company:</label>
        <br />
        <input type="text" id="company" name="company" placeholder='Enter Company Name' value={company} onChange={(event)=> setCompany (event.target.value)}/>
        <br/>
        <label for="company">Email:</label>
        <br />
        <input type="text" id="email" name="email" placeholder='Enter Email' value={email} onChange={(event)=> setEmail (event.target.value)}/>
        <br/>
        <label for="company">Phone:</label>
        <br />
        <input type="tel" id="phone" name="phone" placeholder='Enter Phone Number' value={phone} onChange={(event)=> setPhone (event.target.value)}/>
        <br/>
        <button>Submit</button>
    </form>
    </div>
    </>
)}