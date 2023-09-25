import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Contact() {


    return (
        <div className='contact-container'>
            <h1>Contact Me:</h1>
            <div className='form-container'>
            <form className = 'form'>
                <label for="fname">Name:</label>
                <br />
                <input type="text" id="name" name="name" />
                <br/>
                <label for="company">Company:</label>
                <br />
                <input type="text" id="company" name="company" />
                <br/>
                <label for="company">Email:</label>
                <br />
                <input type="text" id="email" name="email" />
                <br/>
                <label for="company">Phone:</label>
                <br />
                <input type="tel" id="phone" name="phone" />
                <br/>
                <button>Submit</button>
            </form>
            </div>
        </div>

    )
}