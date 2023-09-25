import { Link, useLocation } from 'react-router-dom';
import '../styles/App.css'

export default function Header(){
    const currentPage = useLocation().pathname
    console.log(currentPage)

    return (
        <nav className='nav-bar'>
            <h2 className={currentPage ==='/' ? 'nav-item active' : 'nav-item'}>
                <Link to='/'>
                #Keval Patel
                </Link>
                </h2>
            <ul className = 'nav-tabs'>
                <li className ={currentPage ==='/About' ? 'nav-item active' : 'nav-item'}>
                    <Link to='/About'>
                    About Me
                    </Link>
                    </li>
                <li className ={currentPage ==='/Portfolio' ? 'nav-item active' : 'nav-item'}>
                    <Link to='/Portfolio'>
                    Portfolio
                    </Link>
                    </li>
                <li className ={currentPage ==='/Contact' ? 'nav-item active' : 'nav-item'}>
                    <Link to='/Contact'>
                    Contact
                    </Link>
                    </li>
                <li className ={currentPage ==='/Resume' ? 'nav-item active' : 'nav-item'}>
                    <Link to='/Resume'>
                    Resume
                    </Link>
                    </li>
            </ul>
        </nav>
    )
    }