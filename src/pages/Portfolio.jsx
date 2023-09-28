import Project from '../components/Project.jsx'
import '../styles/Portfolio.css'

 const projects = [
        {
            id: 1,
            title: 'Jeopardy Game',
            github: 'https://github.com/KevalPatel6/Jeopardy',
            deployedApp: 'https://kevalpatel6.github.io/Jeopardy/',
            description: 'A web application that recreates the reputable Jeopardy Game Show',
            imgSrc: '/Jeopardy!.PNG',
            imgAlt: 'Jeopardy Board' 
        },
        {
            id: 2,
            title: 'Event Pulse',
            github: 'https://github.com/KevalPatel6/Event_Planner',
            deployedApp: 'https://event-plannerkas-1ae2bc64599a.herokuapp.com/',
            description: 'Website Application that finds a multitude of events, and allows users to create profiles and save those events',
            imgSrc: '/Event-Pulse.PNG',
            imgAlt: 'Website for Event-Pulse' 
        },
        {
            id: 3,
            title: 'Weather Application',
            github: 'https://github.com/KevalPatel6/Weather-Forecaster',
            deployedApp: 'https://kevalpatel6.github.io/Weather-Forecaster/',
            description: 'A website application that checks the current weather and provides a 5-day forecast for a particular city/location',
            imgSrc: '/Weather-Dashboard.PNG',
            imgAlt: 'Weather Website Dashboard' 
        },
        {
            id: 4,
            title: 'Text-Editor',
            github: 'https://github.com/KevalPatel6/PWA-Text-Editor',
            deployedApp: 'https://jate-text-editor-app239558-7d971bc2a30b.herokuapp.com/',
            description: 'A text-editor web application that can be installed as an application outside of the browser and used offline',
            imgSrc: '/Text-Editor.PNG',
            imgAlt: 'Website of a Text Editor Application' 
        },
        {
            id: 5,
            title: 'Work Day Scheduler',
            github: 'https://github.com/KevalPatel6/Work-Day-Scheduler',
            deployedApp: 'https://kevalpatel6.github.io/Work-Day-Scheduler/',
            description: 'A web application that tracks the hours of a typical workday and allows users to input events, meetings, or reminders',
            imgSrc: '/Work-Day-Scheduler.PNG',
            imgAlt: 'Website of a Work-Day Schedule' 
        },
        {
            id: 6,
            title: 'Coding Quiz',
            github: 'https://github.com/KevalPatel6/Coding-Quiz',
            deployedApp: 'https://kevalpatel6.github.io/Coding-Quiz/',
            description: 'A web game application for a coding quiz with multiple choice answers and a highscore list',
            imgSrc: '/Coding-Quiz.PNG',
            imgAlt: 'Website of Coding Quiz' 
        }
    ];

export default function Portfolio(){
    return (
        <div className='grid-container'>
    <Project projects={projects}/>
    </div>
)
}

