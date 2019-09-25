import React from "react"
import {useStaticQuery, graphql} from 'gatsby'

const Header = () => {
    const {site:{siteMetadata}} = useStaticQuery(graphql`
    {
         site {
          siteMetadata {
            title
            description
            author
                 data{
              name
              age
            }
          }
        }
      }
      

    `)
      console.log(siteMetadata)


    return (
        <div>
            <h1>title:{siteMetadata.title}</h1>
            <h2>author:{siteMetadata.author}</h2>
        </div>
    )
}
export default Header