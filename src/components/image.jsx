import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default props => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <figure className={props.className} style={props.style}>
      <GatsbyImage
        image={allImageSharp.nodes.find(n => n.fluid.originalName === props.filename).gatsbyImageData}
        alt={props.alt}
        fadeIn={false} />
    </figure>
  );
}