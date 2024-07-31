//import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

//import { SearchBar } from './SearchBar';

export const Header = () => {

    return (

        <header>

            <nav>
                <section >
                    <p>Banking App</p>
                </section>
                <ul>
                    {/* <SearchBar/> */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">Create client</Link></li>
                    <li><Link to="/clients">Clients</Link></li>
                    <li><Link to="/credit">Credits</Link></li>

                </ul>
            </nav>

        </header>

    )

}