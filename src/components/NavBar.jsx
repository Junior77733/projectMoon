import { Link } from 'react-router-dom'

export default function NavBar() {

    return (
        <nav className="navigation-bar">
            <ul className="nav-links">
                <Link to="/"><li>HOME</li></Link>
                <Link to="/servants"><li>SERVANTS</li></Link>
                <Link to="/battle"><li>BATTLE</li></Link>
                <Link to="/other"><li>OTHER</li></Link>
            </ul>
        </nav>
    )
}