import React from 'react';

const Footer = () => {
    const today=new Date();
    const year=today.getFullYear();
    return (
        <footer>
            <hr />
            <p>Bookathon Warehouse &copy; {year} | Copyright All Right Reserved</p>
        </footer>
    );
};

export default Footer;