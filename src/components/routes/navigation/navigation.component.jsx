import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import { UserContext } from "../../../contexts/user.context";
import { CartDropdownContext } from "../../../contexts/cart-dropdown.context";

import { signOutUser } from "../../../utils/firebase/firebase.utils";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import { LogoContainer, NavigationContainer, NavLinkContainer, NavLinksContainer } from "./navigation.styles.jsx";


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartDropdownContext);

  return (
    <Fragment>
      <NavigationContainer>
          <LogoContainer to="/">
              <CrwnLogo className="logo" />
          </LogoContainer>         
          <NavLinksContainer>
              <NavLinkContainer to="/shop">
                  SHOP
              </NavLinkContainer>
              {
                currentUser ? (
                  <NavLinkContainer as="span" onClick={signOutUser}>SIGN OUT</NavLinkContainer>
                ) : (
                  <NavLinkContainer to="/auth">
                    SIGN IN
                  </NavLinkContainer>
                )
              }
              <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;