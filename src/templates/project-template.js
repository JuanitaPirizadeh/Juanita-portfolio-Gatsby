import React from "react"
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Template =({data}) => {

const {name, description:{description}, images} = data.project  

const [mainImage] = images 

    return(
        <Layout>
            <StyledHero img={mainImage.fluid} />
            <section className={styles.template}>
            <div className={styles.center}>
          
            <h2>{name}</h2>
            <div className={styles.info}>
        </div>
        <p className={styles.desc}>
            {description}
        </p>

  </div>
  <AniLink fade to="/" className="btn-white">
                    Back home plis
                </AniLink>
  
            </section>
        </Layout>
    )


}

export const query = graphql`
query($slug:String!){
    project: contentfulProject(slug:{eq:$slug}){
      name
      description{
        description
      }
      images{
        fluid{
          src
        }
      }
    }
  }
  
`
export default Template 





