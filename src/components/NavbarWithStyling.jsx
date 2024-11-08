import React, { useState } from 'react';
import './NavbarWithStyling.css';
import About from './about/About';
import HoverButton from './hover/HoverButtib';

function NavbarWithStyling({ menu, name, age }) {
    let List;
    // let biodata = {};
    const [biodata, setBiodata] = useState({});

    if (menu) {
        List = (
            <ul className="navbar-menu">
                {menu.map((item, index) => (
                    <li key={index} className="navbar-item">
                        {item}
                    </li>
                ))}
            </ul>
        );
    } else {
        List = (
            <h1>tidak ditemukan</h1>
        );
    }

    function handleTriggerSelect(selectedStudent) {
        console.log(`ke trigger ${selectedStudent}`);
        setBiodata ({
            ...biodata,
            name,
            age,
        })
    };

    return (
        <>
            <div onClick={''}> 
                <div> 
                    {/* <button onClick={''}> &times; </button> */}
                    <div>Biodata: {biodata.name} {biodata.age}</div>
                </div>
            </div>

            <nav className="navbar">
                <h1 className="navbar-title">FSW 2 {name}</h1>
                {List}
            </nav>
            <About name={name[0]} age={age[0]} />
            <HoverButton onSelect={() => handleTriggerSelect(name)}>click me !</HoverButton>
            <br></br>
            <br></br>
            <br></br>
        </>
    );
}

export default NavbarWithStyling;
