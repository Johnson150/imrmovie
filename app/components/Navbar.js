// Navbar.js

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/editmovies">
                        Edit Movies
                    </Link>
                </li>
                <li>
                    <Link href="/removemovies">
                        Remove Movies
                    </Link>
                </li>
                <li>
                    <Link href="/addmovies">
                        Add Movies
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
