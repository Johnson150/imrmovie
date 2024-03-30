import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/movies">
                        <a>Movies</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
