import { useState } from "react"
import '../styles/Pages.css'

export default function Form() {

    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [phoneError, setPhoneError] = useState('')

    function handleFormSubmit(event) {
        console.log(event)
        event.preventDefault()
        validateEmail(email)
        
    }

    function validateEmail(email){
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        console.log(email)
        if(emailPattern.test(email)){
            setEmailError('')
        }
        else{
            setEmailError('Email is in the incorrect format')
            console.log('wrong')
        }
    }

    function handleBlur() {
        if (!email) {
            setEmailError('Email is required')
        }
        if(!name){
            setNameError('Name is required')
        }
    }


    return (
        <>
            <h1>Contact Me:</h1>
            <div className='form-container'>
                <form className='form' onSubmit={handleFormSubmit}>
                    <label for="fname">Name:</label>

                    <br />

                    <input type="text" id="name" name="name" placeholder='Enter Name' value={name} onChange={
                        (event) => {
                            setName(event.target.value)
                            setNameError('')
                        }
                    }
                    onBlur={handleBlur}
                    />

                    <br />

                    <span style={{ color: "red" }}>{nameError}</span>

                    <br />

                    <label for="company">Company:</label>

                    <br />

                    <input type="text" id="company" name="company" placeholder='Enter Company Name' value={company} onChange={(event) => setCompany(event.target.value)} />

                    <br />
                    <br />


                    <label for="company">Email:</label>

                    <br />

                    <input type="text" id="email" name="email" placeholder='Enter Email' value={email}
                        required
                        onChange={
                            (event) => {
                                setEmail(event.target.value)
                                setEmailError('')
                            }
                        }
                        onBlur={handleBlur}
                    />

                    <br />

                    <span style={{ color: "red" }}>{emailError}</span>

                    <br />

                    <label for="company">Phone:</label>

                    <br />

                    <input type="tel" id="phone" name="phone" placeholder='Enter Phone Number' value={phone} onChange={
                        (event) => {
                           setPhone(event.target.value) 
                           setPhoneError('')
                        }
                    }
                    onBlur={handleBlur}
                    />
                    <br />

                    <span style={{ color: "red" }}>{phoneError}</span>

                    <br />
                    <label for="message">Message:</label>
                    <br />
                    <textarea type="text" id="message" name="message" placeholder='Leave a Message' value={message} rows='10' cols='20' onChange={
                        (event) => setMessage(event.target.value)} />

                    <br />

                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}