import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import img from "../../images/me.png"
const About = () => {
    return (
        <section className={styles.about}>
       <Title title="About" subtitle="me"/>
        <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
        <div className={styles.imgcontainer}>
        <img src={img} alt="about"></img>

            </div>

            </article>
            
            <article className={styles.aboutInfo}>
                <h4> Hey guys!</h4>
                <h3>Here is a little something about me</h3>
                <p>Lorem ipsum dolor amet semiotics mixtape venmo thundercats blue bottle, lomo live-edge snackwave narwhal coloring book tilde authentic truffaut disrupt gluten-free. Cred humblebrag jianbing deep v, schlitz butcher tote bag food truck meggings. Vegan tilde succulents celiac, neutra etsy gluten-free photo booth organic iPhone subway tile. Mustache thundercats palo santo plaid raw denim salvia sustainable pitchfork neutra taiyaki humblebrag mixtape tumblr flannel viral.
                </p>
                <p> Lorem ipsum dolor amet semiotics mixtape venmo thundercats blue bottle, lomo live-edge snackwave narwhal coloring book tilde authentic truffaut disrupt gluten-free. Cred humblebrag jianbing deep v, schlitz butcher tote bag food truck meggings. Vegan tilde succulents celiac, neutra etsy gluten-free photo booth organic iPhone subway tile. 
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
