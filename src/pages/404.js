import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div className="main">
      <div>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
        <Link to="/">Home</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
