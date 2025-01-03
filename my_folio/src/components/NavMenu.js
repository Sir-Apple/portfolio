import React, { useState } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  padding: 1rem 0;
  right: 5rem;
  background: var(--gray-deep-dark);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    li {
      display: block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--black);
      }
    }
    a {
      display: block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-3);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
  }
  .closeNavIcon {
    display: none;
  }

  @media only screen and (max-width: 1080px) {
    padding: 0;
    left: 0;
    right: 0;
    position: fixed; /* Ensure the navbar stays fixed when scrolling */
    top: 0; /* Position at the top of the screen */
    .hide-item {
      transform: translateY(calc(-150% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--gray-deep-dark);
      padding: 2rem;
      width: 100%;
      left: 0;
      right: 0;
      top: 0;
      border-radius: 0;
      position: fixed; /* Keep the navItems fixed when open */
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        border-bottom: 1px solid var(--gray-2);
        &:last-child {
          border-bottom: none;
        }
        margin-bottom: 1rem;
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, SetShowNav] = useState(false);

  return (
    <NavMenuStyles>
      {!showNav && (
        <div
          className="mobile-menu-icon"
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}
        >
          <MdMenu />
        </div>
      )}
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => SetShowNav(!showNav)}
          role="button"
          onKeyDown={() => SetShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/contact"
            onClick={() => SetShowNav(!showNav)}
            role="button"
            onKeyDown={() => SetShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li> */}
      </ul>
    </NavMenuStyles>
  );
}
