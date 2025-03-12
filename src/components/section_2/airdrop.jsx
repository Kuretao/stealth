import "./airdrop.css";
import { useState, useEffect } from "react";

export const AirdropBody = () => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = endDate - now;

        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <main className="airdrop-slide">
            <div className="airdrop__title">
                <p>
                    We are Stealth XR — a project that brings together two teams of developers: one specializing in cybersecurity and the other in the gaming industry. Together, we are building a unified ecosystem with shared goals and an integrated token, merging security and entertainment into one seamless experience.
                </p>
            </div>

            <div className="airdrop__content">
                <h2>До окончания Airdrop</h2>

                <div className="airdrop__timer">
                    <p><span>{timeLeft.days}</span> <br /> дней</p>
                    <span>:</span>
                    <p><span>{timeLeft.hours}</span> <br /> часов</p>
                    <span>:</span>
                    <p><span>{timeLeft.minutes}</span> <br /> минут</p>
                    <span>:</span>
                    <p><span>{timeLeft.seconds}</span> <br /> секунд</p>
                </div>

                <div className="airdrop__buttons">
                    <button className="airdrop__btn yellow">airdrop</button>
                    <button className="airdrop__btn bluelight">Whitepaper</button>
                </div>
            </div>
        </main>
    );
};



export const AirdropSection = () => {
    return(
        <section className="wrapper">
            <AirdropBody/>
        </section>
    )
}