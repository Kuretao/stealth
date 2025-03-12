import styles from "./media__cards.module.css";

export const MediaCard = () =>{
    return (
        <div className={styles.media__card}>

            <div className={styles.media__cardContent}>
                <div className={styles.card__contentImg}>
                    <img src="/assets/images/media.png" alt=""/>
                    <div className={`${styles.card__contentImgTag} completed`}>completed</div>
                </div>
            </div>


            <div className={styles.media__cardFooter}>
                <h2>Lorem ipsum dolor.</h2>
                <div className={styles.card__footerBottom}>
                    <p>08/08/2025</p>
                    <a href="#">Read more</a>
                </div>
            </div>
        </div>
    )
}


export const MediaCardsBody = () => {
    return (
        <main className={styles.meidaSlide}>
            <div className={styles.media__cards}>
                <MediaCard/>
                <MediaCard/>
                <MediaCard/>
            </div>
        </main>
    )
}


export const MediaCardsSlide = () => {
    return(
        <section className="wrapper">
            <MediaCardsBody/>
        </section>
    )
}