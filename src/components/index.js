import React, { useState, useEffect } from 'react';
import IndexStyles from "./Index.module.css";
import { RiHome4Line, RiLogoutCircleRLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineQuestionCircle, AiOutlineSetting } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiTransfer } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineBell } from 'react-icons/hi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import manProfile from "../asset/man.jfif";
import { Link, Outlet } from "react-router-dom";

function Index() {
    const [navValue, setNavValue] = useState("");

    useEffect(() => {
        const tabs = () => {
            setNavValue(window.location.pathname);
            console.log(window.location.pathname);
            sessionStorage.setItem("pathLink", window.location.pathname)
        };
        tabs();
    });

    const tabs = () => {
        setNavValue(window.location.pathname);
        console.log(navValue);
    };
    return (
        <div className='holdAll'>
            <div className='navBar'>
                <div className={IndexStyles.holdNav}>
                    <nav>
                        <p>LOGO</p>
                        <ul className={IndexStyles.holdNavList}>
                            <li className={navValue === "/payment" ? IndexStyles.active : ""} onClick={tabs}>
                                <Link to="payment">
                                    <RiHome4Line className={IndexStyles.icon} />
                                    Payment Services
                                </Link>
                            </li>
                            <li className={navValue === "/transaction" ? IndexStyles.active : ""} onClick={tabs}>
                                <Link to="transaction">
                                    <BiTransfer className={IndexStyles.icon} />
                                    Transactions
                                </Link>
                            </li>
                            <li className={navValue === "/beneficiary" ? IndexStyles.active : ""} onClick={tabs}>
                                <Link to="beneficiary">
                                    <BsPerson className={IndexStyles.icon} />
                                    Beneficiary
                                </Link>
                            </li>
                            <li className={navValue === "/notification" ? IndexStyles.active : ""} onClick={tabs}>
                                <Link to="notification">
                                    <IoMdNotificationsOutline className={IndexStyles.icon} />
                                    Notification
                                </Link>
                            </li>
                            <li className={navValue === "/setting" ? IndexStyles.active : ""} onClick={tabs}>
                                <Link to="setting">
                                    <AiOutlineSetting className={IndexStyles.icon} />
                                    Settings
                                </Link>
                            </li>
                            <li className={IndexStyles.borderTop}></li>
                            <li className={navValue === "/help" ? IndexStyles.active : ""} onClick={tabs}>
                                <Link to="help">
                                    <AiOutlineQuestionCircle className={IndexStyles.icon} />
                                    Help
                                </Link>
                            </li>
                            <li className={navValue === "" ? IndexStyles.active : ""} onClick={tabs}>
                                <RiLogoutCircleRLine className={IndexStyles.icon} />
                                Logout
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='mainContent'>
                <div className='topProfile'>
                    <div className='topContent'>
                        <div className='holdSearch'>
                            <BiSearch />
                            <input type="search" placeholder='Search for anything' className='input' />
                        </div>
                        <div className='holdImage'>
                            <div className='holdBell'>
                                <HiOutlineBell className='bell' />
                                <div className='redDot'></div>
                            </div>
                            <div className='imageIt'>
                                <img src={manProfile} alt="SearchUsersItem" className='imageSelf' />
                                <RiArrowDropDownLine className='drop' />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Index;