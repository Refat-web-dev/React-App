import React from "react";
import List from "./components/List";
import AddUser from "./components/AddUser";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.addUser = this.addUser.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.org/users')
            .then((response) => response.json())
            .then(list => {
                this.setState({ users: list.slice(0, 6) });
            });
    }

    render() {
        return (
            <div className="row">
                <h1 className="title">Users:
                    {/* <button onClick={<AddUser style="block" />} className="openModal">+</button> */}
                </h1>
                <List users={this.state.users} />
                <aside>
                    <AddUser onAdd={this.addUser} />
                </aside>
            </div>
        )
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({
            users: [...this.state.users, { id, ...user }]
        })
        console.log(user);
    }
}
export default App