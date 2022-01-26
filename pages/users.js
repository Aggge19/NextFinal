import Head from "next/head"
import Container from "../components/Container"
import Users from "../components/Users"


export default function Prueba() {
    return ( 
        <div>
            <Head>
                <title>Malaga - Prueba</title>
            </Head>
            <Container>
                <h1>Prueba</h1>
            </Container>
            <Users users={props.users}/>
        </div>
    )
}

Prueba.getInitialProps = async (ctx) =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
    return{users: data}
}
