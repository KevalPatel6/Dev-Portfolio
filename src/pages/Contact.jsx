import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Contact() {


    return (
        <div className='contact-container'>
            <h1>Contact Me:</h1>
            <div className='form-container'>
            <form className = 'form'>
                <label for="fname">First name:</label>
                <br />
                <input type="text" id="fname" name="fname" />
                <label for="lname">Last name:</label>
                <br />
                <input type="text" id="lname" name="lname" />
            </form>
            </div>
        </div>

    )
}