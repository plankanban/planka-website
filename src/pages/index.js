import React from "react"
import GitHubButton from 'react-github-btn'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main">
      <div>
        <h1>Planka</h1>
        <p>Free open source kanban board for workgroups.</p>
        <div className="buttons">
          <GitHubButton href="https://github.com/plankanban/planka" data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star plankanban/planka on GitHub">Star</GitHubButton>
          <GitHubButton href="https://github.com/plankanban/planka/fork" data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork plankanban/planka on GitHub">Fork</GitHubButton>
        </div>
      </div>
    </div>
    <div className="section">
      <img src="https://raw.githubusercontent.com/plankanban/planka/master/demo.gif" alt="Planka client demo" className="demo" />
    </div>
  </Layout>
)

export default IndexPage
