import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => (
  <>
    <div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
