import React, { useState } from 'react';
import Layout1Style from "./Layout1.module.css";
import { BsDot } from 'react-icons/bs';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';
import Layout2 from './Layout2';

function Layout1() {
    const [con, setCon] = useState(0)
    const them = (index) => {
        setCon(index)
    }
    return (
        <div>
            <div className={con === 0 ? Layout1Style.holdOne : Layout1Style.move}>
                <div className={Layout1Style.hold}>
                    <h2 className={Layout1Style.pageHeader}>Security</h2>
                    <div className={Layout1Style.option}>
                        <div className={Layout1Style.iconMe}>
                            <RiLockPasswordLine className={Layout1Style.icon} />
                        </div>
                        <div className={Layout1Style.changeFlow}>
                            <div>
                                <div>
                                    <BsDot />
                                    <BsDot />
                                    <BsDot />
                                    <BsDot />
                                    <BsDot />
                                    <BsDot />
                                </div>
                                <p className={Layout1Style.data}>You can reset your password</p>
                            </div>
                            <div>
                                <button className={Layout1Style.button} onClick={() => {
                                    them(1)
                                }}>Reset</button>
                            </div>
                        </div>
                    </div>
                    <div className={Layout1Style.option}>
                        <div className={Layout1Style.iconMe}>
                            <MdOutlineEmail className={Layout1Style.icon} />
                        </div>
                        <div className={Layout1Style.changeFlow}>
                            <div>
                                <h3 className={Layout1Style.info}>diamondkekule@gmail.com</h3>
                                <p className={Layout1Style.data}>Keep your email up-to-date</p>
                            </div>
                            <div>
                                <button className={Layout1Style.button} onClick={() => {
                                    them(2)
                                }}>Reset</button>
                            </div>
                        </div>
                    </div>
                    <div className={Layout1Style.option2}>
                        <div className={Layout1Style.iconMe}>
                            <FaMobileAlt className={Layout1Style.icon} />
                        </div>
                        <div className={Layout1Style.changeFlow}>
                            <div>
                                <h3 className={Layout1Style.info}>
                                    xxxxxxxxxxx22
                                </h3>
                                <p className={Layout1Style.data}>Change phone number to receive notification</p>
                            </div>
                            <div>
                                <button className={Layout1Style.button} onClick={() => {
                                    them(3)
                                }}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {con === 1 ? <Layout2 /> : ""}
            {con === 2 ? "Change Emmail Address" : ""}
            {con === 3 ? "Payment Method" : ""}
        </div>
    );
}

export default Layout1;