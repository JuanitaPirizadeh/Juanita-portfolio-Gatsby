import React, { Component } from 'react'
import Layout from '../components/Layout';
import StyledHero from "../components/StyledHero"
import {graphql} from 'gatsby'
export default class projects extends Component {
    render() {
        return (
            <Layout>
               <StyledHero img={this.props.data.computer1.childImageSharp.fluid}/>
       
          </Layout>
        )
    }
}

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
