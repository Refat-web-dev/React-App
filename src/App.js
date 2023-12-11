import React, { useEffect, useState } from "react";

export default function App() {
    const [name, setName] = useState([])
    console.log(name)
    useEffect(() => {
        names()
    }, [])
    const names = async () => {
        const res = await fetch('https://jsonplaceholder.org/users')

        setName(await res.json())
    }

    return (
        <div className="App">
            <h1 className="title">Users</h1>
            <ul>
                {name.map(el => {
                    return (
                        <li key={el.id}>
                            <span style={{ textAlign: "center", marginBottom: "5px" }}>{el.id}: {el.firstname} {el.lastname}</span>
                            <span>Email: {el.email}</span>
                            <span>Phone: {el.phone}</span>
                            <a href={el.website} className="link"> {el.website}</a>
                        </li>)
                })}
            </ul>

        </div >
    );
}