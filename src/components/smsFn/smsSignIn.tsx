import React, { useEffect } from 'react';

//this is to register a number with the api
const SignInButton = () => {
    
    function sendSMS(){
        console.log("sending")
    }

    return (
        <div onClick={sendSMS}>SMS</div>
    );
};

export default SignInButton;