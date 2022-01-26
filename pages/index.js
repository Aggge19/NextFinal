import Head from "next/head"
import Container from "../components/Container"

export default function Index(props) {
    console.log(props);
    return ( 
        <Container>
            <Head>
                <title>Malaga - Home</title>
            </Head>
            <h1>Index</h1>
        </Container>
    );
};

//min 40 a revisar
