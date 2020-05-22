import React, { Component } from "react";
const UserOutputComponent = (props) => {
    
        return(
            <div>
                <p>
                 Output "username" : <b test-attr="outputUsername">{props.username}</b>
                </p>
            </div>
        );
    
}
export default UserOutputComponent