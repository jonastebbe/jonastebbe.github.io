import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../layout";
import SEO from "../../components/SEO/SEO";

import config from "../../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="index-container">
          <Helmet title={`${config.siteTitle} | Elbsandsteingebirge 2019`} />
          <SEO />
          <div className="section">
            <div className="section__label">
              <p>About</p>
              <span />
            </div>
            <div className="section__content section__content--centered">
              <p>
                Elbsandsteingebirge, Germany<br />
                <i>April 2019</i>
              </p>
              <div className="more-link more-link--inline">
                <a href="/photo">Back to albums</a>
              </div>
            </div>
          </div>
          <div className="photo-stream">
            {this.props.data.allFile.edges.map(img => {
              const photoOrientation =
                img.node.childImageSharp.fluid.aspectRatio > 1
                  ? "photo-stream__photo"
                  : "photo-stream__photo--portrait";
              return (
                <div className={photoOrientation}>
                  <Img fluid={img.node.childImageSharp.fluid} />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const photosQuery = graphql`
  query ElbsandsteinQuery {
    allFile(
      filter: { relativePath: { regex: "/elbsandstein-/" } }
      sort: { order: ASC, fields: [name] }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
