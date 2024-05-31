import React from "react";
import { useState } from "react";
import { login, logout } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
    const [newUsername, setNewUsername] = useState("");

    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.value.username);

    return (
        <div>
            {username}
            <input type="text" onChange={(e) => {
                setNewUsername(e.target.value)
            }} />
            <button onClick={() => dispatch(login({ username: newUsername}))} >Submit</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}