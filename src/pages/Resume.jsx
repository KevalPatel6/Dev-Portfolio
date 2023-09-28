import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../styles/Resume.css'

export default function Resume() {


    return (
        <div id="resume-container">
            <div id='title-container'>
            <h1 id='title'>
                Keval's Resume
            </h1>
            <a download='Keval-Patel-Resume' href='src/assets/Keval-Patel-Resume.pdf' id='download'>
            <h4 >Download Full Resume</h4>
            </a>
            </div>
            <h4>Proficiencies</h4>
            <section className='languages'>
                <div>
                    <h4>Languages</h4>
                </div>
                <div>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </section>

            <section className='languages'>
                <div>
                    <h4>Databases</h4>
                </div>
                <div>
                    <ul>
                        <li>mySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </section>

        </div>

    )
}