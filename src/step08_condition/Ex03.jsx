import React, { useState } from "react";
import Ex02 from "./Ex02";
import { LogInButton, LogOutButton } from "./Ex03_In_Out";

function Ex03(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogInClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogOutClick = () => {
        setIsLoggedIn(false);
    }

    let button;
    if(isLoggedIn){
        button = <LogOutButton onClick={handleLogOutClick} />
    }else{
        button = <LogInButton onClick={handleLogInClick} />
    }

    return(
        <div>
            {/* isLoggedIn의 상태에 따라서 button 변수의 컴포넌트가 달라진다. */}
            <Ex02 isLoggedIn={isLoggedIn} /> {button}
        </div>
    )
}

export default Ex03;