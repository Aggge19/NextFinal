import Link from "next/link";

export default function navigation() {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="">Málaga   </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/restaurants">Restaurants</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/reviews">Reviews</a>
            </li>
        </ul>
    </div>
    </div>
</nav>
        // <div>
        //     <ul>
        //         <li>
        //             <Link href="/">
        //                 <a>Index</a>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link href="/restaurants">
        //                 <a>Restaurants</a>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link href="/reviews">
        //                 <a>Reviews</a>
        //             </Link>
        //         </li>
        //     </ul>
        // </div>
    );
}