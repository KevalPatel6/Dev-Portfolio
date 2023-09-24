import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function Header(){


    return (
        <nav className='nav-bar'>
            <h2 className='nav-tabs'>
                <Link to='/'>
                #Keval Patel
                </Link>
                </h2>
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
    )
    }