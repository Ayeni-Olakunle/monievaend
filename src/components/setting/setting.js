import React, { useState } from 'react';
import IndexSetting from "./setting.module.css";
import Layout1 from './Layouts/Layout1';
import Layout2 from './Layouts/Layout2';
import { BsPerson, BsShieldCheck, BsCreditCard2Back } from 'react-icons/bs';

function Setting() {
    const [sich, setSich] = useState(0)
    const change = (index) => {
        setSich(index)
    }
    return (
        <div className={IndexSetting.holdSetting}>
            <div className={IndexSetting.steps}>
                <div className={IndexSetting.step1}>
                    <h2 className={IndexSetting.pageHeader}>Settings</h2>
                    <div className={sich === 0 ? IndexSetting.optionActive : IndexSetting.option} onClick={() => {
                        change(0)
                    }}>
                        <div className={sich === 0 ? IndexSetting.iconMeActive : IndexSetting.iconMe}>
                            <BsPerson className={IndexSetting.icon} />
                        </div>
                        <div>
                            <h2 className={IndexSetting.info}>Personal Info</h2>
                            <p className={IndexSetting.data}>About all your personal data</p>
                        </div>
                    </div>
                    <div className={sich === 1 ? IndexSetting.optionActive : IndexSetting.option} onClick={() => {
                        change(1)
                    }}>
                        <div className={sich === 1 ? IndexSetting.iconMeActive : IndexSetting.iconMe}>
                            <BsShieldCheck className={IndexSetting.icon} />
                        </div>
                        <div>
                            <h2 className={IndexSetting.info}>Security</h2>
                            <p className={IndexSetting.data}>Manage your password</p>
                        </div>
                    </div>
                    <div className={sich === 2 ? IndexSetting.optionActive : IndexSetting.option} onClick={() => {
                        change(2)
                    }}>
                        <div className={sich === 2 ? IndexSetting.iconMeActive : IndexSetting.iconMe}>
                            <BsCreditCard2Back className={IndexSetting.icon} />
                        </div>
                        <div>
                            <h2 className={IndexSetting.info}>Payment Method</h2>
                            <p className={IndexSetting.data}>Information regarding payment method</p>
                        </div>
                    </div>
                </div>
                <div className={IndexSetting.step2}>
                    {sich === 0 ? "Personal Info" : ""}
                    {sich === 1 ? <Layout1 /> : ""}
                    {sich === 2 ? "Payment Method" : ""}
                </div>
            </div>
        </div>
    );
}

export default Setting;