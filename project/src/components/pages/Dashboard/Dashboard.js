import React from 'react'
import { FaHome } from 'react-icons/fa';
import { AiFillCar } from "react-icons/ai";
import { RiGpsFill } from "react-icons/ri";
import { MdMonitor } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { HiBellAlert } from "react-icons/hi2";
import { HiDocumentReport } from "react-icons/hi";
import { FaRegIdCard } from 'react-icons/fa';
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import './dashboard.css';

export default function () {
	return (
            <div className="containerr">

                {/*---------------navigation---------------*/}

                <div className="navigation">
                    <ul>
                        <li>
                            <p><FaHome size="2rem" color='white'></FaHome></p>
                        </li>
                        <li>
                            <p><AiFillCar className='sty' size="2rem" color='white'></AiFillCar></p>
                        </li>
                        <li>
                            <p><RiGpsFill size="2rem" color='white'></RiGpsFill></p>
                        </li>
                        <li>
                            <p><MdMonitor size="2rem" color='white'></MdMonitor></p>
                        </li>
                        <li>
                            <p><FaUsers size="2rem" color='white'></FaUsers></p>
                        </li>
                        <li>
                            <p><HiBellAlert size="2rem" color='white'></HiBellAlert></p>
                        </li>
                        <li>
                            <p><HiDocumentReport size="2rem" color='white'></HiDocumentReport></p>
                        </li>
                        <li>
                            <p><FaRegIdCard size="1.8rem" color='white'></FaRegIdCard></p>
                        </li>
                        <li>
                            <p><BsFillChatDotsFill size="1.8rem" color='white'></BsFillChatDotsFill></p>
                        </li>
                        <li>
                            <p><FaUserAlt size="1.8rem" color='white'></FaUserAlt></p>
                        </li>
                        <li>
                            <p><AiFillSetting size="2rem" color='white'></AiFillSetting></p>
                        </li>
                    </ul>
                </div>

                {/* ---------------end navigation--------------- */}


                {/* ---------------header--------------- */}

                <div className="header">
                    <h2>Bazra Motors</h2>
                    <p><FiLogOut size="2rem" color='black'></FiLogOut></p>
                </div>
                {/* ---------------end header--------------- */}


                {/* ---------------contents--------------- */}

                <div className='main'>
                    <div className='contents'>
                        <div className='vehicle'>
                            <h4>Total Number of Vehicles</h4>
                            <AiFillCar size="3rem" color='white'></AiFillCar>
                        </div>
                        <div className='users'>
                            <h4>Comunication</h4>
                            <BsFillChatDotsFill size="3rem" color='white'></BsFillChatDotsFill>
                        </div>
                        <div className='monitor-vehicle'>
                            <h4>List of users</h4>
                            <FaUsers size="3rem" color='white'></FaUsers>
                        </div>
                        <div className='alert'>
                            <h4>Registration</h4>
                            <FaRegIdCard size="3rem" color='white'></FaRegIdCard>
                        </div>
                        <div className='registration'>
                            <h4>Monitor Vehicles</h4>
                            <MdMonitor size="3rem" color='white'></MdMonitor>
                        </div>
                        <div className='communication'>
                            <h4>Report</h4>
                            <HiDocumentReport size="3rem" color='white'></HiDocumentReport>
                        </div>
                        <div className='report'>
                            <h4>Alert</h4>
                            <HiBellAlert size="3rem" color='white'></HiBellAlert>
                        </div>
                        <div className='tracking'>
                            <h4>Real Time Tracking</h4>
                            <RiGpsFill size="3rem" color='white'></RiGpsFill>
                        </div>
                    </div>

                </div>

                {/* ---------------end contents--------------- */}


            </div>

        )
    }
