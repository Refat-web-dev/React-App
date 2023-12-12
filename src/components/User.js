import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";

class User extends React.Component {
    user = this.props.user
    render() {
        return (
            <li>
                <FaUserEdit className="edit" />
                <IoCloseCircleSharp className="close" />
                <span className="name" style={{ textAlign: "center", marginBottom: "5px" }}><mark>{this.user.id}.</mark> {this.user.firstname} {this.user.lastname}</span>
                <div className="wrapper">
                    <div className="data"><span className="variety">Email:</span><span>{this.user.email}</span></div>
                    <div className="data"><span className="variety">Phone:</span><span>{this.user.phone}</span></div>
                    <div className="data"><span className="variety">Is adult:</span><span>{this.user.isadult ? "Yes" : "No"}</span> </div>
                    <div className="data" style={{ lineHeight: "20px" }}><span className="variety">Bio:</span><span>{this.user.bio ? this.user.bio : "Not specified"}</span></div>
                    <a href={this.user.website} className="link"> {this.user.website}</a>
                </div>
            </li>
        )
    }
}
export default User