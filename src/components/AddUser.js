import React from "react";

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phone: 0,
            website: "",
            isadult: false,
            bio: "",
        }
    }

    render() {
        return (
            <div style={{ display: this.props.style }} className="blanket">

                <form name="addUser" className="addUser">
                    <input placeholder="Name" onChange={(e) => this.setState({ firstname: e.target.value })} />
                    <input placeholder="Last name" onChange={(e) => this.setState({ lastname: e.target.value })} />
                    <input placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                    <input placeholder="Phone" onChange={(e) => this.setState({ phone: e.target.value })} />
                    <textarea placeholder="Bio"></textarea>
                    <input placeholder="Link" onChange={(e) => this.setState({ website: e.target.value })} />
                    <div className="ageControll">
                        <label htmlFor="isAdult">Is adult ?</label>
                        <input type="checkbox" id="isAdult" onChange={(e) => this.setState({ isadult: e.target.checked })} />
                    </div>
                    <button type="button" onClick={() => this.props.onAdd({
                        firstname: this.state.firstname,
                        lastname: this.state.lastname,
                        email: this.state.email,
                        phone: this.state.phone,
                        link: this.state.link,
                        isadult: this.state.isadult,
                        bio: this.state.bio,
                        website: this.state.website,
                    })}>Add</button>
                </form>
            </div>
        )
    }
}
export default AddUser