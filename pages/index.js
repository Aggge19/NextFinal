import Head from "next/head"
import Container from "../components/Container"
import Users from "../components/Users"
import fetch from "isomorphic-fetch"

export default function Index(props) {
    console.log(props);
    return ( 
        <Container>
            <Head>
                <title>Malaga - Home</title>
            </Head>
            <h1>Index</h1>
            <Users users={props.users}/>
        </Container>
    );
};

Index.getInitialProps = async (ctx) =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    return{users: data}
}
