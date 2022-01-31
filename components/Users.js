import Router from "next/router"

export default function Users(props) {
    return (  
        <ul className="list-group">
            {
            props.users.map(user => (
                    <li className="list-group-item list-group-item-action" 
                    key={user.id} onClick={e => Router.push('users/[id]', `/users/${user.id}`)}>
                        <div>
                            <h5>{user.first_name} {user.last_name} </h5>
                            <p>Email: {user.email}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
  