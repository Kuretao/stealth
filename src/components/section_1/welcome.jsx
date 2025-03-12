import "./welcome.css";

export const WelcomeBody = () => {
    return(
        <main className="welcome-slide">
            <h1>STEALTH XR <br/> PROJECT</h1>

            <div className="welcome__gif">
                <img src="/assets/images/welcome.png" alt=""/>
            </div>

            <div className="welcome__tabs">
                <div className="welcome__tab blue">MINING</div>
                <div className="welcome__tab green">MINING</div>
                <div className="welcome__tab pink">MINING</div>
                <div className="welcome__tab orange">MINING</div>
            </div>
        </main>
    )
}


export const WelcomeSection = () => {
    return(
        <section className="wrapper">
            <WelcomeBody/>
        </section>
    )
}