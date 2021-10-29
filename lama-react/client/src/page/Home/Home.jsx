import React, { useEffect, useState } from 'react'
import './home.scss'
import Navbar from '../../Netflix/Navbar/Navbar'
import Featured from '../../Netflix/Feature/Featured'
import List from '../../Netflix/List/List'
import axios from 'axios'

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    //localhost:8800/list?type= &genre=
                    `lists 
                        ${type ? "?type=" + type : ""}
                        ${genre ? "&genre=" + genre : ""}`,
                        {
                            headers: {
                            token:
                                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzljMDNmZWRmNjQzNTlkNzc5MDRhNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTQxMzYzNiwiZXhwIjoxNjM1ODQ1NjM2fQ.X_E-mrY_sZ3kRZcyDc8aHn-0mA8ULllNOuPa5JWfGII"
                            },
                        });
                    console.log(res);
                    setLists(res.data);
                  } catch (err) {
                    console.log(err);
                  }
                };
                getRandomLists();
              }, [type, genre]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {lists.map((list) => (
                <List list = {list} />
            ))}
            orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.orem ipsum dolor, sit amet consectetur adipisicing elit.
                    Praesentium hic rem eveniet error possimus, neque ex doloribus.
        </div>
    )
};

export default Home;
