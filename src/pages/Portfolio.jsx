import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import Project from '../components/Project'

export default function Portfolio(){
    
    let projects = [
        {
            id: 1,
            title: 'Jeopardy Game',
            github: 'https://github.com/KevalPatel6/Jeopardy',
            deployedApp: 'https://kevalpatel6.github.io/Jeopardy/'
        },
        {
            id: 2,
            title: 'Event Pulse',
            github: 'https://github.com/KevalPatel6/Event_Planner',
            deployedApp: 'https://event-plannerkas-1ae2bc64599a.herokuapp.com/',
        },
        {
            id: 3,
            title: 'Weather Application',
            github: 'https://github.com/KevalPatel6/Weather-Forecaster',
            deployedApp: 'https://kevalpatel6.github.io/Weather-Forecaster/',
        },
        {
            id: 4,
            title: 'Text-Editor',
            github: 'https://github.com/KevalPatel6/PWA-Text-Editor',
            deployedApp: 'https://jate-text-editor-app239558-7d971bc2a30b.herokuapp.com/',
        },
        {
            id: 5,
            title: 'Work Day Scheduler',
            github: 'https://github.com/KevalPatel6/Work-Day-Scheduler',
            deployedApp: 'https://kevalpatel6.github.io/Work-Day-Scheduler/',
        },
        {
            id: 6,
            title: 'Coding Quiz',
            github: 'https://github.com/KevalPatel6/Coding-Quiz',
            deployedApp: 'https://kevalpatel6.github.io/Coding-Quiz/',
        }
    ]

    return (
        <Project>
        </>

    )
}