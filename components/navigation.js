import Link from "next/link";

export default function navigation() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Index</a>
                    </Link>
                </li>
                <li>
                    <Link href="/restaurants">
                        <a>Restaurants</a>
                    </Link>
                </li>
                <li>
                    <Link href="/reviews">
                        <a>Reviews</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}