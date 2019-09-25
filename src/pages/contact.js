import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
export default function contact({ data }) {
    return (
        <Layout>
            <StyledHero img={data.contactme.childImageSharp.fluid} />
        </Layout>
    )
}

export const query = graphql`
query{
    contactme: file(relativePath: { eq: "contactme.jpg" }){
        childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`
