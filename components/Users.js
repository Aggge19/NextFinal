export default function Users(props) {
    return (  
        <ul>
            {
            props.users.map(user => (
                    <li>
                        <h5>{user.name} - {user.username} </h5>
                    </li>
                ))
            }
        </ul>
    )
}
  