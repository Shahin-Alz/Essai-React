import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
           {/* les image importe depuis la balise img sont accessible dans "public"*/}
           <img src="./logo192.png" alt="logo react" /> 
           <h2>React World</h2>
        </div>
    );
};

export default Logo;