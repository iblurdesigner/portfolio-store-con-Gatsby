import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function Image() {
  return (
    <StaticQuery
      query={graphql`
        query GET_IMAGE {
          icon: file(relativePath: { eq: "icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
            name
          }
        }
      `}
      render={data => (
        <Img fluid={data[data.icon.name].childImageSharp.fluid} />
      )}
    />
  )
}
