import React from 'react';

const Blogs = () => {
    return (
        <div className='container text-start'>
            <h3>1. Difference between javascript and nodejs.</h3>
            <p className='fs-4'>Ans: JavaScript is scripting language which basically runs on client side. It uses V8 engine. JS only run in the browser. On the other hand NodeJS is JS runtime environment. it can be run outside the browser. And it mostly used in server side.</p>
            <h3>2. When should you use nodejs and when should you use mongodb?</h3>
            <p className='fs-4'>Ans: NodeJS used for server. When we create our server to get the data, that time we use nodeJs. We do not connect directly to the database. server side work as a middle man for our data transfer. And on the other side mongodb used for database action. to keep all the data and to save data we use mongodb which is a noSql database.</p>
            <h3>3. Differences between sql and nosql databases.</h3>
            <p className='fs-4'>Ans: SQL database store data in column and row base.It focus to avoid data duplication. on the other side NoSql database store data as javascript document object. there is no table column row or anything like this. for finding out data nosql is faster than sql database.</p>
            <h3>4. What is the purpose of jwt and how does it work?</h3>
            <p className='fs-4'>Ans: JWT means Json web token. Jwt basically made for securing data transfer between two parties, confirming sent data correctly gone to the right person, and no other person cannot read that. firstly jwt generate a token when a user login for the first time, then save it to localhost or http cache. then every time user need any data from server must need to verify that token. only after verification user can access data.</p>
        </div>
    );
};

export default Blogs;