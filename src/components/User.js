import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";

class User extends React.Component {
    user = this.props.user
    render() {
        return (
            <li ref={(li) => this.myLi = li}>
                <div className="userData" ref={(div) => this.myDiv = div}>
                    <FaUserEdit className="edit" />
                    <IoCloseCircleSharp className="close" onClick={() => {
                        this.myLi.style.margin = " 0 0px 0 -30px"
                        this.myLi.style.opacity = "0"
                        this.myLi.style.width = "0"
                        this.myDiv.style.scale = "0"

                        setTimeout(() => {
                            this.props.onDelete(this.user.id)
                        }, 600);
                    }} />
                    <span className="name" style={{ textAlign: "center", marginBottom: "5px" }}><mark>{this.user.id}.</mark> {this.user.firstname} {this.user.lastname}</span>
                    <div className="wrapper">
                        <div className="data"><span className="variety">Email:</span><span>{this.user.email}</span></div>
                        <div className="data"><span className="variety">Phone:</span><span>{this.user.phone}</span></div>
                        <div className="data"><span className="variety">Is adult:</span><span>{this.user.isadult === "false" ? "No" : "yes"}</span> </div>
                        <div className="data" style={{ lineHeight: "20px" }}><span className="variety">Bio:</span><span>{this.user.bio ? this.user.bio : "Not specified"}</span></div>
                        <a href={this.user.website} className="link"> {this.user.website}</a>
                    </div>
                </div>
            </ li>
        )
    }
}

export default User