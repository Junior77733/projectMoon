import { Link } from 'react-router-dom'

export default function NavBar() {

    return (
        <>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/servants"><li>Servants</li></Link>
                <Link to="/battle"><li>Battle</li></Link>
                <Link to="/other"><li>Other</li></Link>
            </ul>
        </>
    )
}