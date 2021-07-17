import * as React from "react"
import { Link } from "gatsby"

import Seo from '../components/seo'
import Navigation from '../components/navigation';
import Footer from '../components/footer';

// markup
const NotFoundPage = () => {
  return (
    <>
      <Navigation />
      <Seo title="404: Not found" />
      <div className="notFoundPage">
        <h2>404: NOT FOUND</h2>
        <p>
          <em>You've tried reaching a page that doesn&#39;t exist.</em><br/>
          <Link to="/">Go back to the Home page.</Link>
        </p>
      </div>
      <Footer />
    </>
  )
}

export default NotFoundPage
