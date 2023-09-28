import '../styles/AboutMe.css'

export default function About() {


    return (
        <div>
            <div className='about-container'>
                <div style={{flexGrow: '1'}} id='profile-pic-container'>
                    <img id='profile-pic' src='/Portfolio-Pic.jpg' />
                </div>
                <div style={{flexGrow: '8'}}className='text-container'>
                    <h1 className='text-flex'>About Me</h1>
                    <p className='text-flex' id="text">I was born and raised in Philadelphia, PA where I currently reside. Previously, I have worked as a Business Analyst on various healthcare related projects. However, more recently, I have rerouted my career to pursue Software Development. I am currently enrolled in the University of Pennsylvania Full-Time Coding Bootcamp where I have learned HTML, CSS, Javascript, and SQL. I have acquired expertise in a plethora of different technologies including MongoDB, ExpressJS, React, Node, graphQL, Insomnia, etc.  My goals for the future are to help meaningful companies design websites for their organization. In my downtime, I am avid sports fan that partakes in a variety of sports but most notably Tennis and Golf.</p>
                </div>
            </div>
        </div>

    )
}