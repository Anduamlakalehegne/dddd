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
import { FaStarOfLife } from 'react-icons/fa';
import './company_registration.css';

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
                <h2>Bazra Moters</h2>
                <p><FiLogOut size="2rem" color='black'></FiLogOut></p>
            </div>
            {/* ---------------end header--------------- */}


            {/* ---------------Registration--------------- */}

            <section className='register'>
                <form className='form'>

                    {/* ---------------Company Information--------------- */}

                    <div className='input-box'>
                        <h1 >Company Information</h1>
                        <p>Company Name <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                        <input className='title' type="text" placeholder='Enter organization name'></input>
                    </div>

                    <div className='sector_tyoe'>
                        <div className='input-box'>
                            <p>Company Sector <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                            <select className='select'>
                                <option selected disabled>Select company sector</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                            </select>
                        </div>
                        <div className='input-box'>
                            <p>Company Type <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                            <input type="text" placeholder='Enter organization name'></input>
                        </div>
                    </div>

                    {/* ---------------Company Address--------------- */}

                    <div className='input-box'>
                        <h1>Company Address</h1>
                    </div>

                    <div className='company_address'>

                        <div className='address'>
                            <div className='input-box'>
                                <p>Region <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                                <select className='select'>
                                <option selected disabled>Select company sector</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                            </select>
                            </div>

                            <div className='input-box'>
                                <p>City <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                                <select className='select'>
                                <option selected disabled>Select company sector</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                            </select>
                            </div>

                        </div>

                        <div className='address'>
                            <div className='input-box'>
                                <p>Sub City <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                                <select className='select'>
                                <option selected disabled>Select company sector</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                            </select>
                            </div>

                            <div className='input-box'>
                                <p>Woreda <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                                <input type="text" placeholder='Enter Woreda'></input>
                            </div>

                        </div>

                        <div className='address'>
                            <div className='input-box'>
                                <p>Specfic Location <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                                <input type="text" placeholder='Enter Specfic Location'></input>
                            </div>

                            <div className='input-box'>
                                <p>House Number <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                                <input type="text" placeholder='Enter House Number'></input>
                            </div>

                        </div>
                        <div className='address'>
                            <div className='input-box'>
                                <p>Phone Number <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                                <input type="text" placeholder='Enter Phone Number'></input>
                            </div>

                        </div>

                    </div>

                    <div className='input-box'>
                        <h1>Owner Information</h1>
                    </div>

                    <div className='owner_information'>
                        <div className='input-box'>
                            <p>First Name <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                            <input type="text" placeholder='Enter first your name'></input>
                        </div>
                        <div className='input-box'>
                            <p>Last Name <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                            <input type="text" placeholder='Enter your last name'></input>
                        </div>
                        <div className='input-box'>
                            <p>Phone Number <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                            <input type="text" placeholder='Enter Phone Number'></input>
                        </div>
                        <div className='input-box'>
                            <p>Email <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                            <input type="text" placeholder='Enter your Email'></input>
                        </div>
                    </div>

                    <div className='input-box'>
                        <h1>Additional Information</h1>
                    </div>
                    <div className='addition_information'>
                        <div className='input-box'>
                            <p>Notification Preference <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                            <select className='select'>
                                <option selected disabled>Select company sector</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                            </select>
                        </div>
                        <div className='input-box'>
                            <p>Service Neded <FaStarOfLife className='icon' size="0.5rem" color='red'></FaStarOfLife></p>
                            <select className='select'>
                                <option selected disabled>Select company sector</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                                <option>Public Llimited Company</option>
                            </select>
                        </div>


                    </div>
                    <div className='button'>
                        <button className='edit'>Save and Continue</button>
                    </div>



                </form>

            </section>


            {/* ---------------end Registaration--------------- */}
        </div>
    )
}
