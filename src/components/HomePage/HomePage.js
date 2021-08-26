import React, {useEffect, useState} from 'react';
import {AiOutlineStar} from "react-icons/all";
import './HomePage.scss';
import {data} from '../../Data/items.js';
import Card from "../Card/Card";
import Header from "../Header/Header";


function HomePage(props) {
    const [items, setItems] = useState();


    useEffect(() => {
        setItems(data);
    }, [])

    return (
        <>
            <Header/>
            <section className={"mt-4"}>
                <div className={"container pt-4 home-container"}>
                    <div className={"m-auto"} style={{width: "fit-content"}}>
                        <div className={""}>
                            <div className={"text-center"}>
                                <h1>Most Popular</h1>
                                <div className={"row fw-bold text-primary align-items-center"}>
                                    <div className={"col-5"}>
                                        <hr className={"hr-2"}/>
                                    </div>
                                    <div className={"col-2 d-inline-flex align-items-center justify-content-center"}>
                                        <div className={"star-icon"}>
                                            <AiOutlineStar size={24} className={"icon"}/>
                                        </div>
                                    </div>
                                    <div className={"col-5"}>
                                        <hr className={"hr-2"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"cards-container mt-5"}>
                    <div className={"d-flex flex-wrap"}>
                        {
                            items && items.map((item) => <Card key={item.id} item={item}/>)
                        }
                    </div>
                </div>

            </section>
        </>
    );
}

export default HomePage;