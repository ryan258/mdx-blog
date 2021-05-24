import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <section className="error-page">
      <div className="page-center">
        <span>404</span>
        <h3>Sorry, but these aren't the droids you're looking for</h3>
        <Link to="/" className="btn">
          Go back home young Skywalker
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
