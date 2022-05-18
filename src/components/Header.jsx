import React from "react";
//import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
export default function Header() {
    return (
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/fav">fav-List</Nav.Link>

        </Nav.Item>
       
    );
}