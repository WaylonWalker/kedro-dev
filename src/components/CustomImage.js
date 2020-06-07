import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Image({ src, alt, style, type = 'normal' }) {
  const query = useStaticQuery(graphql`
        query {
            normal: allImageSharp {
                edges {
                    node {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                    }
                }
            }
            quality: allImageSharp {
                edges {
                    node {
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                    }
                }
            }
            big: allImageSharp {
                edges {
                    node {
                        fluid(maxWidth: 5000) {
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                    }
                }
            }
            bigQuality: allImageSharp {
                edges {
                    node {
                        fluid(quality: 100, maxWidth: 5000) {
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                    }
                }
            }
        }
    `);

  if (!query[type]) {
    return <p>image type not found</p>
  }
  const image = query[type].edges.find(
    edge => edge.node.fluid.originalName === src
  )
  if (!image) {
    return <p>image not found</p>
  }

  return <Img fluid={image.node.fluid} alt={alt} style={style} />;
}
