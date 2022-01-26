import Head from "next/head"
import Navigation from "./navigation"

export default function Container(props) {
    return (  
    <div>
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lumen/bootstrap.min.css"></link>
        </Head>

        <Navigation/>
        <div className="container p-4">
            {props.children}
        </div>
    </div>
    )
}
  