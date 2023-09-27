import '../styles/Portfolio.css'

export default function Project({ projects }) {
    return <>

        {projects.map((project) => {
            return(
                <div key={project.id} id="project-container" className='grid-item'>
                    <div className="card" style={{ width: "18rem" }}>
                        <a href={project.deployedApp}>
                            <img className="card-img" src={project.imgSrc} alt={project.imgAlt} />
                        </a>
                        <div className="card-body">
                            <h2 className="card-title">{project.title}</h2>
                            <p className="card-text">{project.description}</p>
                            <a href={project.deployedApp}>
                                <button className="app-btn">Application</button>
                            </a>
                            <a href={project.github}>
                                <button className='git-btn'>Github Repo</button>
                            </a>
                        </div>
                    </div>
                </div >
            )
            })}
    </>
}