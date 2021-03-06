import React, { Component } from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../layout";

import config from "../../data/SiteConfig";

class PhotoPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="about-container">
          <Helmet title={`${config.siteTitle} | Photos`} />
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Harz</h1>
                <h2>2020</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.harz2001.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.harz2002.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.harz2003.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/harz20">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Wieda</h1>
                <h2>2019</h2>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.wieda12.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.wieda21.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/wieda">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Berchtesgaden</h1>
                <h2>2019</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.berchtesgaden1.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.berchtesgaden2.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.berchtesgaden3.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/berchtesgaden">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Dresden</h1>
                <h2>2019</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.dresden1.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.dresden2.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.dresden3.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/dresden">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Denmark</h1>
                <h2>2019</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.denmark4.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.denmark32.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.denmark39.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.denmark63.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.denmark69.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.denmark86.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/denmark">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Elbsandsteingebirge</h1>
                <h2>2019</h2>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.elbsandstein006.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.elbsandstein004.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.elbsandstein016.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.elbsandstein001.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.elbsandstein021.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/elbsandstein">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Harz</h1>
                <h2>2019</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.harz1908.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.harz1912.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.harz1918.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/harz19">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Garmisch-Partenkirchen</h1>
                <h2>2018</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.garmisch08.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.garmisch18.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.garmisch27.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.garmisch33.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.garmisch42.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.garmisch60.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/garmisch">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Sicily</h1>
                <h2>2018</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.sicily67.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.sicily89.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.sicily101.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/sicily">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>London</h1>
                <h2>2018</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.londong18.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.londong31.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.londong27.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.londong49.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.londong42.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.londong58.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/london">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Frankfurt</h1>
                <h2>2018</h2>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.ffm181.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.ffm182.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.ffm1818.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.ffm1820.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.ffm1821.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/ffm18">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Harz</h1>
                <h2>2018</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.harz7.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.harz8.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.harz28.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.harz6.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.harz20.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/harz">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Dubrovnik</h1>
                <h2>2017</h2>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img
                    sizes={this.props.data.dubrovnik30.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img
                    sizes={this.props.data.dubrovnik60.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.dubrovnik19.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.dubrovnik24.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.dubrovnik54.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/dubrovnik">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Hamburg</h1>
                <h2>2017</h2>
              </div>
              <div className="album-grid__big-teaser">
                <div className="album-grid__big-teaser__wrapper">
                  <Img
                    sizes={this.props.data.hamburgaugust4.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="album-grid__stacked-teaser">
                <div className="album-grid__stacked-teaser__wrapper">
                  <Img
                    sizes={this.props.data.hamburgaugust2.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__stacked-teaser__wrapper">
                  <Img
                    sizes={this.props.data.hamburgaugust3.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.hamburgaugust1.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.hamburgaugust6.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.hamburgaugust5.childImageSharp.fluid}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Frankfurt</h1>
                <h2>2017</h2>
              </div>
              <div className="album-grid__big-teaser">
                <div className="album-grid__big-teaser__wrapper">
                  <Img sizes={this.props.data.ffmmay15.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__stacked-teaser">
                <div className="album-grid__stacked-teaser__wrapper">
                  <Img sizes={this.props.data.ffmmay10.childImageSharp.fluid} />
                </div>
                <div className="album-grid__stacked-teaser__wrapper">
                  <Img sizes={this.props.data.ffmmay25.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.ffmmay3.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.ffmmay4.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.ffmmay20.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/ffm">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Rheingau</h1>
                <h2>2017</h2>
              </div>
              <div className="album-grid__big-teaser">
                <div className="album-grid__big-teaser__wrapper">
                  <Img
                    sizes={this.props.data.rheingau24.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="album-grid__stacked-teaser">
                <div className="album-grid__stacked-teaser__wrapper">
                  <Img
                    sizes={this.props.data.rheingau14.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__stacked-teaser__wrapper">
                  <Img
                    sizes={this.props.data.rheingau15.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img
                    sizes={this.props.data.rheingau31.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img
                    sizes={this.props.data.rheingau27.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/rheingau">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>St. Peter Ording</h1>
                <h2>2017</h2>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.spo1.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.spo2.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.spo6.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.spo7.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.spo9.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Hamburg</h1>
                <h2>2017</h2>
              </div>
              <div className="album-grid__big-teaser">
                <div className="album-grid__big-teaser__wrapper">
                  <Img sizes={this.props.data.hamburg5.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__stacked-teaser">
                <div className="album-grid__stacked-teaser__wrapper">
                  <Img sizes={this.props.data.hamburg4.childImageSharp.fluid} />
                </div>
                <div className="album-grid__stacked-teaser__wrapper">
                  <Img sizes={this.props.data.hamburg7.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Berlin</h1>
                <h2>2017</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.berlin5.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.berlin6.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.berlin7.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Frankfurt</h1>
                <h2>2017</h2>
              </div>
              <div className="album-grid__big-teaser">
                <div className="album-grid__big-teaser__wrapper">
                  <Img sizes={this.props.data.ffm1.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__stacked-teaser">
                <div className="album-grid__stacked-teaser__wrapper">
                  <Img sizes={this.props.data.ffm2.childImageSharp.fluid} />
                </div>
                <div className="album-grid__stacked-teaser__wrapper">
                  <Img sizes={this.props.data.ffm3.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.ffm4.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.ffm5.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.ffm6.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Bavaria</h1>
                <h2>2016</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.bavaria4.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.bavaria24.childImageSharp.fluid}
                  />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img
                    sizes={this.props.data.bavaria18.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.bavaria1.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.bavaria3.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/bavaria">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Prague</h1>
                <h2>2016</h2>
              </div>
              <div className="album-grid__big-teaser">
                <div className="album-grid__big-teaser__wrapper">
                  <Img sizes={this.props.data.prague1.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__stacked-teaser">
                <div className="album-grid__stacked-teaser__wrapper">
                  <Img sizes={this.props.data.prague2.childImageSharp.fluid} />
                </div>
                <div className="album-grid__stacked-teaser__wrapper">
                  <Img sizes={this.props.data.prague3.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.prague4.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.prague5.childImageSharp.fluid} />
                </div>
              </div>
              <div className="more-link">
                <Link to="/photo/prague">more photos</Link>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Berlin</h1>
                <h2>2016</h2>
              </div>
              <div className="album-grid__third-teaser">
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.berlin1.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.berlin2.childImageSharp.fluid} />
                </div>
                <div className="album-grid__third-teaser__wrapper">
                  <Img sizes={this.props.data.berlin3.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>Hamburg</h1>
                <h2>2016</h2>
              </div>
              <div className="album-grid__half-teaser">
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.hamburg1.childImageSharp.fluid} />
                </div>
                <div className="album-grid__half-teaser__wrapper">
                  <Img sizes={this.props.data.hamburg2.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="album-grid">
              <div className="album-grid__header">
                <h1>USA</h1>
                <h2>2014</h2>
              </div>
              <div className="album-grid__stacked-teaser album-grid__stacked-teaser--inverted">
                <div className="album-grid__stacked-teaser__wrapper album-grid__stacked-teaser__wrapper--inverted">
                  <Img sizes={this.props.data.usa2.childImageSharp.fluid} />
                </div>
                <div className="album-grid__stacked-teaser__wrapper album-grid__stacked-teaser__wrapper--inverted">
                  <Img sizes={this.props.data.usa3.childImageSharp.fluid} />
                </div>
              </div>
              <div className="album-grid__big-teaser">
                <div className="album-grid__big-teaser__wrapper album-grid__big-teaser__wrapper--inverted">
                  <Img sizes={this.props.data.usa1.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default PhotoPage;

/* eslint no-undef: "off" */
export const photosQuery = graphql`
  query PhotosQuery {
    hamburg: file(relativePath: { eq: "photos/hamburg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    londong18: file(relativePath: { eq: "photos/londong-18.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    londong31: file(relativePath: { eq: "photos/londong-31.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    londong27: file(relativePath: { eq: "photos/londong-27.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    londong49: file(relativePath: { eq: "photos/londong-49.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    londong42: file(relativePath: { eq: "photos/londong-42.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    londong58: file(relativePath: { eq: "photos/londong-58.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffm181: file(relativePath: { eq: "photos/ffm18-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffm182: file(relativePath: { eq: "photos/ffm18-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffm1818: file(relativePath: { eq: "photos/ffm18-18.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffm1820: file(relativePath: { eq: "photos/ffm18-20.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffm1821: file(relativePath: { eq: "photos/ffm18-21.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    harz7: file(relativePath: { eq: "photos/harz-07.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    harz8: file(relativePath: { eq: "photos/harz-08.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    harz28: file(relativePath: { eq: "photos/harz-28.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    harz6: file(relativePath: { eq: "photos/harz-06.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    harz20: file(relativePath: { eq: "photos/harz-20.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    harz1908: file(relativePath: { eq: "photos/harz19-008.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    harz1912: file(relativePath: { eq: "photos/harz19-012.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    harz1918: file(relativePath: { eq: "photos/harz19-018.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dubrovnik30: file(relativePath: { eq: "photos/dubrovnik-30.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dubrovnik60: file(relativePath: { eq: "photos/dubrovnik-60.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dubrovnik19: file(relativePath: { eq: "photos/dubrovnik-19.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dubrovnik24: file(relativePath: { eq: "photos/dubrovnik-24.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dubrovnik54: file(relativePath: { eq: "photos/dubrovnik-54.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hamburgaugust4: file(relativePath: { eq: "photos/hamburg-august-04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hamburgaugust2: file(relativePath: { eq: "photos/hamburg-august-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hamburgaugust3: file(relativePath: { eq: "photos/hamburg-august-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hamburgaugust1: file(relativePath: { eq: "photos/hamburg-august-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hamburgaugust6: file(relativePath: { eq: "photos/hamburg-august-06.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hamburgaugust5: file(relativePath: { eq: "photos/hamburg-august-05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffmmay15: file(relativePath: { eq: "photos/ffm-may-15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffmmay10: file(relativePath: { eq: "photos/ffm-may-10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffmmay25: file(relativePath: { eq: "photos/ffm-may-25.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffmmay3: file(relativePath: { eq: "photos/ffm-may-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffmmay4: file(relativePath: { eq: "photos/ffm-may-04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffmmay20: file(relativePath: { eq: "photos/ffm-may-20.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rheingau24: file(relativePath: { eq: "photos/rheingau-24.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rheingau14: file(relativePath: { eq: "photos/rheingau-14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rheingau15: file(relativePath: { eq: "photos/rheingau-15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rheingau31: file(relativePath: { eq: "photos/rheingau-31.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rheingau27: file(relativePath: { eq: "photos/rheingau-27.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    spo1: file(relativePath: { eq: "photos/spo-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    spo2: file(relativePath: { eq: "photos/spo-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    spo6: file(relativePath: { eq: "photos/spo-06.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    spo7: file(relativePath: { eq: "photos/spo-07.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    spo9: file(relativePath: { eq: "photos/spo-09.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hamburg5: file(relativePath: { eq: "photos/hamburg-05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hamburg4: file(relativePath: { eq: "photos/hamburg-04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hamburg7: file(relativePath: { eq: "photos/hamburg-07.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    berlin5: file(relativePath: { eq: "photos/berlin-05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    berlin6: file(relativePath: { eq: "photos/berlin-06.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    berlin7: file(relativePath: { eq: "photos/berlin-07.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffm1: file(relativePath: { eq: "photos/ffm-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffm2: file(relativePath: { eq: "photos/ffm-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffm3: file(relativePath: { eq: "photos/ffm-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffm4: file(relativePath: { eq: "photos/ffm-04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffm5: file(relativePath: { eq: "photos/ffm-05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ffm6: file(relativePath: { eq: "photos/ffm-06.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bavaria4: file(relativePath: { eq: "photos/bavaria-04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bavaria24: file(relativePath: { eq: "photos/bavaria-24.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bavaria18: file(relativePath: { eq: "photos/bavaria-18.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bavaria1: file(relativePath: { eq: "photos/bavaria-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bavaria3: file(relativePath: { eq: "photos/bavaria-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prague1: file(relativePath: { eq: "photos/prague-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prague2: file(relativePath: { eq: "photos/prague-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prague3: file(relativePath: { eq: "photos/prague-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prague4: file(relativePath: { eq: "photos/prague-04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prague5: file(relativePath: { eq: "photos/prague-05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    berlin1: file(relativePath: { eq: "photos/berlin-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    berlin2: file(relativePath: { eq: "photos/berlin-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    berlin3: file(relativePath: { eq: "photos/berlin-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hamburg1: file(relativePath: { eq: "photos/hamburg-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hamburg2: file(relativePath: { eq: "photos/hamburg-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    usa2: file(relativePath: { eq: "photos/usa-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    usa3: file(relativePath: { eq: "photos/usa-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    usa1: file(relativePath: { eq: "photos/usa-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sicily67: file(relativePath: { eq: "photos/sicily-067.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sicily101: file(relativePath: { eq: "photos/sicily-101.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sicily89: file(relativePath: { eq: "photos/sicily-089.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    garmisch27: file(relativePath: { eq: "photos/garmisch-027.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    garmisch08: file(relativePath: { eq: "photos/garmisch-008.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    garmisch18: file(relativePath: { eq: "photos/garmisch-018.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    garmisch33: file(relativePath: { eq: "photos/garmisch-033.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    garmisch42: file(relativePath: { eq: "photos/garmisch-042.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    garmisch60: file(relativePath: { eq: "photos/garmisch-060.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    elbsandstein001: file(relativePath: { eq: "photos/elbsandstein-001.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    elbsandstein004: file(relativePath: { eq: "photos/elbsandstein-004.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    elbsandstein006: file(relativePath: { eq: "photos/elbsandstein-006.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    elbsandstein016: file(relativePath: { eq: "photos/elbsandstein-016.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    elbsandstein021: file(relativePath: { eq: "photos/elbsandstein-021.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    denmark4: file(relativePath: { eq: "photos/denmark-00004.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    denmark32: file(relativePath: { eq: "photos/denmark-00032.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    denmark39: file(relativePath: { eq: "photos/denmark-00039.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    denmark63: file(relativePath: { eq: "photos/denmark-00063.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    denmark69: file(relativePath: { eq: "photos/denmark-00069.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    denmark86: file(relativePath: { eq: "photos/denmark-00086.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dresden1: file(relativePath: { eq: "photos/dresden-00009.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dresden2: file(relativePath: { eq: "photos/dresden-00017.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dresden3: file(relativePath: { eq: "photos/dresden-00023.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    berchtesgaden1: file(relativePath: { eq: "photos/berchtesgaden-00004.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    berchtesgaden2: file(relativePath: { eq: "photos/berchtesgaden-00017.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    berchtesgaden3: file(relativePath: { eq: "photos/berchtesgaden-00026.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wieda12: file(relativePath: { eq: "photos/wieda-00012.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wieda21: file(relativePath: { eq: "photos/wieda-00021.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    harz2001: file(relativePath: { eq: "photos/harz20-04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    harz2002: file(relativePath: { eq: "photos/harz20-09.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    harz2003: file(relativePath: { eq: "photos/harz20-17.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
