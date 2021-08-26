import React, {useEffect} from 'react';
import './Header.scss';
import {RiShoppingCart2Line} from "react-icons/all";
import profile from '../../assets/profile.png';
import {Link, useHistory} from "react-router-dom";
import CartBadge from "./CartBadge";

function Header(props) {
    const history = useHistory();

    return (
        <header
            className={history.location.pathname === '/cart' ? "row header-container align-items-center bg-white shadow-sm" : "row header-container align-items-center"}>
            <div className={"logo col-4"}>
                <img
                    src={"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"}
                    alt={"logo"}/>
            </div>
            <div className={"left-container col-8 d-flex align-items-center justify-content-end"}>
                {history.location.pathname !== '/cart' ? <CartBadge/> : <></>}
                <img className={"user"} src={profile} alt={"user"}/>
            </div>
        </header>
    );
}

export default Header;