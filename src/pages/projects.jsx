import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../layout";
import SEO from "../components/SEO/SEO";

import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="index-container">
          <Helmet title={`${config.siteTitle} | Projects`} />
          <SEO />
          <div className="section">
            <div className="project-grid">
              <div className="project-grid__mockup">
                <Img
                  sizes={this.props.data.anddoDesktop.childImageSharp.fluid}
                  className="desktop"
                />
              </div>
              <div className="project-grid__meta">
                <h1>&do</h1>
                <p>
                &do is a consulting firm specializing in digital value creation. Being rooted in the tech startup scene, we are particularly skilled in transforming ideas into results and technological change into business value. Our clients include both corporations and private equity investors.{" "}
                  <a
                    href="//and.do"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link text-link--small"
                  >
                    More
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="project-grid">
              <div className="project-grid__mockup">
                <Img
                  sizes={this.props.data.liqidDesktop.childImageSharp.fluid}
                  className="desktop"
                />
                <Img
                  sizes={this.props.data.liqidMobile.childImageSharp.fluid}
                  className="mobile"
                />
              </div>
              <div className="project-grid__meta">
                <h1>LIQID</h1>
                <p>
                  LIQID is a robo advisor that offers affluent investors in
                  Germany a fully digital wealth management service. Only eight
                  months after market launch, LIQID reached 100 million euro in
                  assets under management and was named Germany’s best late
                  stage FinTech startup. As of today, LIQID is among the four
                  largest and most successful robo advisors in Europe.{" "}
                  <a
                    href="//www.liqid.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link text-link--small"
                  >
                    More
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="project-grid">
              <div className="project-grid__mockup">
                <Img
                  sizes={this.props.data.prosperDesktop.childImageSharp.fluid}
                  className="desktop"
                />
                <Img
                  sizes={this.props.data.prosperMobile.childImageSharp.fluid}
                  className="mobile"
                />
              </div>
              <div className="project-grid__meta">
                <h1>Prosper</h1>
                <p>
                  Connect your bank account and let us evaluate your financial
                  situation. Experience how much money you can easily put aside
                  and invest your savings to harvest a return. Prosper analyses
                  historical bank account transactions with the ARIMA model and
                  derives individual savings rates that do not hurt. All savings
                  get invested into individual ETF portfolios that suit
                  individual needs.
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="project-grid">
              <div className="project-grid__mockup">
                <Img
                  sizes={this.props.data.owlhubDesktop.childImageSharp.fluid}
                  className="desktop"
                />
                <Img
                  sizes={this.props.data.owlhubMobile.childImageSharp.fluid}
                  className="mobile"
                />
              </div>
              <div className="project-grid__meta">
                <h1>owlhub 1.0</h1>
                <p>
                  Crowdsourcing insights and predictions to faciliate
                  investments for everyone. Students, investors and traders
                  become analysts to predict stock movements and share stock
                  analyses to measure their skills and acquire profound
                  knowledge fast and easily.
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="project-grid">
              <div className="project-grid__mockup project-grid__mockup">
                <Img
                  sizes={this.props.data.owlhub2Desktop.childImageSharp.fluid}
                  className="desktop"
                />
                <Img
                  sizes={this.props.data.owlhub2Mobile.childImageSharp.fluid}
                  className="mobile"
                />
              </div>
              <div className="project-grid__meta">
                <h1>owlhub 2.0</h1>
                <p>
                  As young professionals have lived through two crises already,
                  they are extremely risk-averse and hold large positions in
                  cash. We Germans are great savers but inflation eats up our
                  savings. What young professionals need is a transparent,
                  flexible and easy-to-use solution that makes investing easy as
                  pie. owlhub. is the app that makes investing as hassle-free as
                  your piggy bank. You decide week after week, how much you want
                  to save and we invest your savings into an ETF portfolio that
                  suits your needs. That way, you make your money work for you.
                </p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="project-grid">
              <div className="project-grid__mockup">
                <Img
                  sizes={
                    this.props.data.marketpulseDesktop.childImageSharp.fluid
                  }
                  className="desktop"
                />
              </div>
              <div className="project-grid__meta">
                <h1>Marketpulse</h1>
                <p>
                  It is hard to figure out what information is valuable and
                  nobody has the time to watch Bloomberg 24/7. At the hackathon
                  of the EBSpreneurship we decided to fix this problem.
                  Marketpulse visualizes the StockPulse data and einriches the
                  information with content from Twitter through the tame API and
                  financial information from the Finance Base API.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const projectsQuery = graphql`
  query ImageQuery {
    anddoDesktop: file(relativePath: { eq: "projects/anddo-desktop.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    anddoMobile: file(relativePath: { eq: "projects/anddo-mobile.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    liqidDesktop: file(relativePath: { eq: "projects/liqid-desktop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    liqidMobile: file(relativePath: { eq: "projects/liqid-mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prosperDesktop: file(relativePath: { eq: "projects/prosper-desktop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prosperMobile: file(relativePath: { eq: "projects/prosper-mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    owlhubDesktop: file(
      relativePath: { eq: "projects/owlhub-v1-desktop.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    owlhubMobile: file(relativePath: { eq: "projects/owlhub-v1-mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    owlhub2Desktop: file(
      relativePath: { eq: "projects/owlhub-v2-desktop.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    owlhub2Mobile: file(relativePath: { eq: "projects/owlhub-v2-mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    marketpulseDesktop: file(
      relativePath: { eq: "projects/marketpulse-desktop.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
