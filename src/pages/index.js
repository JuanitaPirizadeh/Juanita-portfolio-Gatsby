import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import StyledHero from "../components/StyledHero"
import {graphql} from 'gatsby'


export default ({data}) => (

<Layout>
    <StyledHero home="true" img={data.computer1.childImageSharp.fluid}>
        
        <Banner
            title="Juanita Pirizadeh"
            info="Im basically what you would call an aspiring frond-end developer, and this is my portfolio. Welcome!"
            >
                <Link to="/projects" className="btn-white">
                    Check out my projects
                </Link>
            </Banner>
</StyledHero>
    <About />
    <Services />
</Layout>
)

export const query = graphql`
query{
    computer1:file(relativePath:{eq:"computer1.jpg"}){
      childImageSharp{
        fluid(quality: 90, maxWidth:4060){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  
`
