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
                <a download='Keval-Patel-Resume' href='/Keval-Patel-Resume.pdf' id='download'>
                    <h4 >Download Full Resume</h4>
                </a>
            </div>
            <h2>Proficiencies</h2>
            <div id='content-container'>
                <section id='languages' >
                    <div>
                        <h4 className='content-headers'>Languages</h4>
                    </div>
                    <div>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </section>

                <section id='databases'>
                    <div>
                        <h4 className='content-headers'>Databases</h4>
                    </div>
                    <div>
                        <ul>
                            <li>mySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </section>

                <section id='libraries-frameworks'>
                    <div>
                        <h4 className='content-headers'>Libraries & Frameworks</h4>
                    </div>
                    <div>
                        <ul>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                            <li>DayJS</li>
                            <li>ExpressJS</li>
                            <li>Inquirer</li>
                            <li>Mongoose</li>
                            <li>React</li>
                        </ul>
                    </div>
                </section>

                <section id='technologies' >
                    <div>
                        <h4 className='content-headers'>Other Technologies</h4>
                    </div>
                    <div>
                        <ul>
                            <li>NodeJS</li>
                            <li>Sequelize</li>
                            <li>Handlebars</li>
                            <li>Insomnia</li>
                            <li>Lighthouse</li>
                            <li>Webpack</li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>

    )
}