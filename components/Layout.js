import Header from "./Header"
import Meta from './Meta'
import React, {Component} from 'react'
import { initGA, logPageView } from './GoogleAnalytics'
export default class Layout extends Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }
  
  render () {
    return (
      <section
      className={`layout ${
        this.props.pathname == "info" &&
        "info_page"}`
      }
      style={{
        backgroundColor: `${this.props.bgColor && this.props.bgColor}`,
        color: `${this.props.pathname == "info" && 'white'}`
      }}
    >
      <Meta
        siteTitle={this.props.siteTitle}
        siteDescription={this.props.siteDescription}
      />
      <Header siteTitle={this.props.siteTitle} />
      <div className="content">{this.props.children}</div>
      <style jsx>
        {`
          .layout {
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          .layout .info_page {
            color: #ebebeb;
          }
          .content {
            flex-grow: 1;
          }
          @media (min-width: 768px) {
            .layout {
              display: block;
            }
            .content {
              flex-grow: none;
              width: 70vw;
              margin-left: 30vw;
            }
          }
        `}
      </style>
    </section>
    );
  }
}

/*
export default function Layout(props) {
  return (
    <section
    className={`layout ${
      this.props.pathname == "info" &&
      "info_page"}`
    }
    style={{
      backgroundColor: `${this.props.bgColor && this.props.bgColor}`,
      color: `${this.props.pathname == "info" && 'white'}`
    }}
  >
    <Meta
      siteTitle={this.props.siteTitle}
      siteDescription={this.props.siteDescription}
    />
    <Header siteTitle={this.props.siteTitle} />
    <div className="content">{this.props.children}</div>
    <style jsx>
      {`
        .layout {
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .layout .info_page {
          color: #ebebeb;
        }
        .content {
          flex-grow: 1;
        }
        @media (min-width: 768px) {
          .layout {
            display: block;
          }
          .content {
            flex-grow: none;
            width: 70vw;
            margin-left: 30vw;
          }
        }
      `}
    </style>
  </section>
  );
}
*/