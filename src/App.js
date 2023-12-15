import React from "react";
import List from "./components/List";
import AddUser from "./components/AddUser";
import axios from "axios";

let base_url = 'https://jsonplaceholder.org/users'

class App extends React.Component {
    constructor(props) {
        super(props)

        axios.get(base_url).then(res => this.setState({ users: res.data }))

        this.state = {
            users: []
        }

        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }

    render() {
        return (
            <div className="row">
                <h1 className="title">Users:</h1>
                <List users={this.state.users} onDelete={this.deleteUser} onEdit={this.editUser} />
                <aside>
                    <AddUser onAdd={this.addUser} className={"addUser"} />
                </aside>
            </div>
        )
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter(el => el.id !== id)
        })
    }

    editUser(user) {
        let allUsers = this.state.users

        allUsers[user.id - 1] = user

        this.setState({ users: [] }, () => {
            this.setState({
                users: [...allUsers]
            })
        })
    }

    addUser(user) {
        const id = this.state.users.length + 1

        this.setState({
            users: [...this.state.users, { id, ...user }]
        })
    }
}
export default App