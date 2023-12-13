import React from "react";
import User from "./User";

class List extends React.Component {

    render() {
        return (
            <>
                <ul>
                    {this.props.users.map(el => {
                        return (
                            <User key={el.id} user={el} onDelete={this.props.onDelete} />
                        )
                    })}
                </ul>
            </ >
        );
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
