import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import {graphql} from 'gatsby'

const blog = () => {

    return (
        <Layout>
            Hello from my blog page<br></br> <Link to="/">Back Home</Link>
            
   </Layout>
    )
}


export default blog

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

