import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

export default function Header(){


    return (
        <>
        <nav>
            <ul>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </nav>
        </>

    )
    }