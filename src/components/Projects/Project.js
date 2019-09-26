import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Project =({project})=>{
    const {name, slug, images} = project 
    let mainImage = images[0].fluid

    return ( 
    <article className={styles.tour}>
        <div className={styles.imgContainer}>
            <Image fluid={mainImage} className={styles.img} alt="single project" />
            <AniLink fade className={styles.link} to={`/projects/${slug}`}>
                Details
            </AniLink>
        </div>

        <div className={styles.footer}>
            <h3>{name}</h3>
            <div className={styles.info}>
                
            </div>
        </div>

    </article>
    )
}

export default Project