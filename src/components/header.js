import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { MenuItem, StyledHeader } from "../styles/components"
import { CartContext } from "../context"

const Header = () => {
  const { cart } = useContext(CartContext)
  return (
    <StyledHeader>
      <Link to="/">
        <img
          src="https://drive.google.com/uc?export=view&id=1x1_43_I5cNkqI9729VsGs6Qr7h_9o4EX"
          alt="logoeMotivoDev"
        />
      </Link>
      <nav>
        <ul>
          <MenuItem margin>
            <Link to="/about">About</Link>
          </MenuItem>
          <MenuItem margin>
            <Link to="/portfolio">Portfolio</Link>
          </MenuItem>
          <MenuItem margin>
            <Link to="/productos">Productos</Link>
          </MenuItem>
          <MenuItem margin>
            <Link to="/contacto">Contacto</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <span>
                <img
                  src="https://i.postimg.cc/L6wpMxLt/cart.png"
                  alt="cartlogo"
                />
                {cart.length}
              </span>
            </Link>
          </MenuItem>
        </ul>
      </nav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
