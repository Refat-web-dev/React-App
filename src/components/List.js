import React from "react";
import User from "./User";

class List extends React.Component {
    render() {
        if (this.props.users.length > 0) {
            return (
                <ul>
                    {this.props.users.map((el) => (<User key={el.id} user={el} onDelete={this.props.onDelete} onEdit={this.props.onEdit} />))}
                </ul>
            )
        } else {
            return (
                <ul>
                    <li>
                        <div className="userData" ref={(div) => this.myDiv = div}>
                            <span className="name" style={{ textAlign: "center", marginBottom: "5px", height: "100%", paddingTop: "40%", background: "transparent" }}>No users</span>
                        </div>
                    </li>
                </ul>
            )
        }
    }
}

export default List
// export default function List() {
//     const [user, setUser] = useState([])

//     useEffect(() => {
//         users()
//     }, [])

//     const users = async () => {
//         const res = await fetch('https://jsonplaceholder.org/users')

//         setUser(await res.json())
//     }

//     return (
//         <>
//             <ul>
//                 {user.map(el => {
//                     return (
//                         <User key={el.id} user={el} />
//                     )
//                 })}
//             </ul>
//         </ >
//     );
// }
