import React from "react";
import './NotFound.css';

export function NotFound() {
    return (
        <div className="maincontainer">
            <div className="container404">
            <h1>Oops... ¡Error 404!</h1>
            <h3>This page doesn't exist</h3>
            <div className="links">
                <a href="/">Back to Home</a>
            </div>
            </div>
        </div>
    )
}