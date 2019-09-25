import React from 'react'
import styles from '../../css/about.module.css'
import img from "../../images/me.png"


const About = () => {
    return (
        <section className={styles.about}>
       
            <div className={styles.aboutCenter}>
            <article className={styles.aboutImg}>
            <div className={styles.imgcontainer}>
            <img src={img} alt="about"></img>

            </div>

            </article>
            <article className={styles.aboutInfo}>
                <h4 style={{color: "darkorange"}}>Hey guys!</h4>
                <h3>Here is a little something about me</h3>
                <p>
                </p>
                <p>Jag har studerat på Nackademin snart tre terminer och herre gud vad tiden har gått fort!
                    Det som inspirerar mig är inovativ och nytänkande design, detta varesig det gäller programering eller inredning till hemmet.
                </p>
                <button type="button"
                className="btn-primary">
                    Read more
                </button>


            </article>
            </div>
        </section>
            
    )
}

export default About
