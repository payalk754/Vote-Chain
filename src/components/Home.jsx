import React from 'react';
import styled from 'styled-components';
import {Link } from "react-router-dom";
import Img from '../assets/vote.jpg';
import './Home.css';

/*const Section = styled.section`
    background-image: url(${Img});
    height: 400px;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
`;
const Content = styled.div`
    width: 100%;
    height: 100px;
`;
const Left = styled.div`
    padding-left: 220px;
    padding-top: 143px;
`;
const Title = styled.p`
    font-size: 55px;
    color: #04050a;
    font-weight: 400;
`;
const Desc = styled.p`
    width: 472px;
    font-size: 20px;
    color: #9ea8ac;
    line-height: 38px;
    margin-top: 58px;
`;
const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    margin-top: 58px;
    width: 371px;
    height: 71px;
    line-height: 71px;
    font-size: 22px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    background: linear-gradient(90deg, #0546d6, #3f89fc);
    text-decoration: none;
    box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;*/

const Home = ({ account }) => {
    return (
        <>
            <section id="header" className="align-items-center">
                <div className="section">
                    <div>
                        <h1> <strong className="brand-name"> Vote-Chain {account} </strong></h1>
                    </div>
                    <div>
                        <h4>....A Secured Voting System</h4>
                    </div>
                    <div className="mt-3">
                        <Link to="./asignin"><a className="admin-btn-get-started ">
                            Admin
                        </a></Link>
                    </div>
                    <div className="mt-4">
                        <Link to="./signin"><a className="User-btn-get-started ">
                            User
                        </a></Link>
                    </div>
                </div>
                <div className="home-container">
                    <div className="header-img">
                        <img src={Img} className="img-fluid animated" alt="home img" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
