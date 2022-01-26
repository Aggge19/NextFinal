import Link from "next/link";

export default function navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="">
                    <a className="navbar-brand">Málaga</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link active" aria-current="page">Index</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/restaurants">
                            <a className="nav-link">Restaurants</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/reviews">
                            <a className="nav-link">Reviews</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/users">
                            <a className="nav-link">users</a>
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}
