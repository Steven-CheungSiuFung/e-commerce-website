import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../../store/user/user.selector";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";

import CartIcon from "../../cart-icon/cart-icon.component";
import { useDispatch } from "react-redux";
import { signOutStart } from "../../../store/user/user.action";

import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import {
  LogoContainer,
  NavigationContainer,
  NavLinkContainer,
  NavLinksContainer,
} from "./navigation.styles";

const Navigation = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = () => {
    dispatch(signOutStart());
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLinkContainer to="/shop">SHOP</NavLinkContainer>
          {currentUser ? (
            <NavLinkContainer as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLinkContainer>
          ) : (
            <NavLinkContainer to="/auth">SIGN IN</NavLinkContainer>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
