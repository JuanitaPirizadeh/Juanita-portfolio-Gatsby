import React from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import {graphql} from 'gatsby'


const blog = ({data}) => {

    return (
        <Layout>
            <StyledHero img={data.blog6.childImageSharp.fluid}/>
            
   </Layout>
    )
}




export const query = graphql`
query{
    blog6:file(relativePath:{eq:"blog6.jpg"}){
      childImageSharp{
        fluid(quality: 90, maxWidth:4060){
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  
`
export default blog
