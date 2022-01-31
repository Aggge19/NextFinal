import Head from "next/head"
import Container from "../components/Container"
import Users from "../components/Users"


export default function Usuarios(props) {
    return (
        <Container>
            <Head>
                <title>Malaga - Usuarios</title>
            </Head>

            <h1>Usuarios</h1>

            <Users users={props.users}/>
        </Container>
    )
}

Usuarios.getInitialProps = async (ctx) =>{
    const res = await fetch('https://reqres.in/api/users');
    const resJSON = await res.json();
    return{users: resJSON.data}
}
