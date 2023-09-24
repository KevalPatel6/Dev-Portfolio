import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

export default function Header(){


    return (
        <>
        <nav>
            <ul className = 'nav-tabs'>
                <li className = 'nav-item'>
                    <Link to='/About'>
                    About Me
                    </Link>
                    </li>
                <li className = 'nav-item'>
                    <Link to='/Portfolio'>
                    Portfolio
                    </Link>
                    </li>
                <li className = 'nav-item'>
                    <Link to='/Contact'>
                    Contact
                    </Link>
                    </li>
                <li className = 'nav-item'>
                    <Link to='/Resume'>
                    Resume
                    </Link>
                    </li>
            </ul>
        </nav>
        </>
    )
    }