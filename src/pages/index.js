import React from "react"
import { Link } from "gatsby"
import { Jumbo } from "../components"
import "../components/layout.css"

import { Layout, SEO } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/gracias/">Go to gracias</Link>
    <Link to="/cancelada/">Ir a compra cancelada</Link>
  </Layout>
)

export default IndexPage
