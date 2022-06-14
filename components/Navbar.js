
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.svg" alt="logo" width={128} height={60} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/earthquakes"><a>Earthquakes</a></Link>
            <Link href="/tsunamis"><a>Tsunamis</a></Link>
        </nav>
    );
}

export default Navbar;