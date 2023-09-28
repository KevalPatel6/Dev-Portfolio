import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import '../styles/Pages.css'

export default function Footer(){
    
    return (
        <>
        <div className = 'footer-container'>
            <h3 id='github'><a href = 'https://github.com/KevalPatel6'>Github</a></h3>
            <h3 id='stack-overflow'><a href = 'https://stackoverflow.com/users/22648001/kevalp6?tab=profile'>Stack Overflow</a></h3>
        </div>
        </>
    )
}
