import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../../contexts/user.context";
import { CartDropdownContext } from "../../../contexts/cart-dropdown.context";

import { signOutUser } from "../../../utils/firebase/firebase.utils";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import "./navigation.styles.scss";


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartDropdownContext)

  return (
    <Fragment>
      <div className="navigation">
          <Link className="logo-container" to="/">
              <CrwnLogo className="logo" />
          </Link>         
          <div className="nav-links-container">
              <Link className="nav-link" to="/shop">
                  SHOP
              </Link>
              {
                currentUser ? (
                  <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                ) : (
                  <Link className="nav-link" to="/auth">
                    SIGN IN
                  </Link>
                )
              }
              <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;