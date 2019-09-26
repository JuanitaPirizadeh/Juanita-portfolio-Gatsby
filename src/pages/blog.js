import React from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import {graphql} from 'gatsby'
import Banner from '../components/Banner'

const blog = ({data}) => {

    return (
        <Layout>
            <StyledHero img={data.blog6.childImageSharp.fluid}>
            <Banner
            title="The blog"
            
            >
            </Banner>
           </StyledHero>
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
