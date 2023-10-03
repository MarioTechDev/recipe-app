import React, { useEffect, useState } from "react";

const Footer = () => {
    const [year, setYear] = useState();

    const currentYear = () => {
        const date = new Date();
        const currentYear = date.getFullYear();
        const nextYear = (currentYear + 1).toString().slice(-2);
        setYear(`${currentYear}-${nextYear}`);
        return;
    };

    useEffect(() => currentYear, []);

    return (
        <footer>
            <div>
                <p>
                    Copyright © <span>{year}</span> - All right
                    reserved by{" "}
                    <a
                        href="https://github.com/MarioTechDev/recipe-app"
                        title="Source Code"
                        alt="Link to Github Repo"
                        target="_blank"
                        rel="noreferrer"
                    >
                        recipe-app
                    </a>
                </p>
            </div>
            <div>
                <p>
                    Developed by{" "}
                    <a
                        href="https://github.com/MarioTechDev"
                        title="MarioTechDev"
                        alt="Developer's Github link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        MarioTechDev
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
