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
            isadult: "false",
            bio: "",
        }
    }

    render() {
        return (

            <form className={this.props.className} ref={(el) => this.myForm = el}>
                <input placeholder="Name" onChange={(e) => this.setState({ firstname: e.target.value })} />
                <input placeholder="Last name" onChange={(e) => this.setState({ lastname: e.target.value })} />
                <input placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                <input placeholder="Phone" onChange={(e) => this.setState({ phone: e.target.value })} />
                <textarea placeholder="Bio" onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
                <input placeholder="Link" onChange={(e) => this.setState({ website: e.target.value })} />
                <div className="ageControll">
                    <label htmlFor="isAdult">Is adult ?</label>
                    <input type="checkbox" id="isAdult" onChange={(e) => this.setState({ isadult: "" + e.target.checked })} />
                </div>
                <button type="button" onClick={() => {
                    if (Object.values(this.state).every(el => el)) {
                        this.myForm.style.border = "1px solid transparent"

                        this.myForm.reset()

                        this.userAdd = {
                            firstname: this.state.firstname,
                            lastname: this.state.lastname,
                            email: this.state.email,
                            phone: this.state.phone,
                            isadult: this.state.isadult,
                            bio: this.state.bio,
                            website: this.state.website
                        }

                        if (this.props.user)
                            this.setState({
                                firstname: this.props.user.firstname,
                                lastname: this.props.user.lastname,
                                email: this.props.user.email,
                                phone: this.props.user.phone,
                                isadult: this.props.user.isadult,
                                bio: this.props.user.bio,
                                website: this.props.user.website
                            })
                        this.userAdd.id = this.props.user.id
                        this.props.onAdd(this.userAdd)



                        this.setState({
                            firstname: "",
                            lastname: "",
                            email: "",
                            phone: 0,
                            website: "",
                            isadult: "false",
                            bio: "",
                        })
                    } else {
                        this.myForm.style.border = "1px solid red"
                    }
                }}>Add</button>
            </form>
        )
    }
}
export default AddUser