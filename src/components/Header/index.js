import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import styled from 'preact-emotion'

import { Container } from '../'

import { color, fontFamily, fontWeight, spacing } from '../../global/theme'

import {
  media,
  setWidth,
  letterSpacing,
  shadeOf,
  toEms,
} from '../../global/utils'

const logo = '/img/logo.png'

// prettier-ignore
const Wrapper = styled.header`
  background-color: ${color.white};
  position: relative;
  z-index: 10;
  padding: 25px 0 0;

  ${media.down.md`
    padding: 0;
  `}
`

// prettier-ignore
const Contain = styled(Container)`
  display: flex;
  justify-content: space-between;

  ${props => media.down.md`
    &::before {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: ${shadeOf(color.black, 0.3)};
      pointer-events: none;
      z-index: 1;
      content: '';
      transition: opacity 500ms;
    }

    ${props.menuOpen ? `
      &::before {
        opacity: 1;
      }
    ` : `
      &::before {
        opacity: 0;
      }
    `}
  `}
`

// prettier-ignore
const Logo = styled.figure`
  max-width: 200px;
  width: 100%;
  flex: 1 1 200px;

  a {
    display: block;
  }

  img {
    width: auto;
    max-height: 75px;
    margin-top: 10px;
  }

  ${media.down.md`
    max-width: 150px;
    flex-basis: 150px;
  `}
`

// prettier-ignore
const Nav = styled.nav`
  max-width: 1330px;
  width: 100%;
  text-align: right;
  flex: 1 1 auto;

  ${props => media.down.md`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    max-width: 375px;
    text-align: left;
    background-color: ${color.white};
    box-shadow: 0 0 20px 5px ${shadeOf(color.black, 0.03)};
    transition: transform 500ms;
    z-index: 2;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    padding: 70px 20px;

    ${props.menuOpen ? `
      transform: translate3d(0, 0, 0);
    ` : `
      transform: translate3d(100%, 0, 0);
    `}
  `}
`

// prettier-ignore
const NavText = styled.span`
  color: ${color.emperor};
  font-weight: inherit;
  padding: 25px 0;
  display: block;
  font-size: ${toEms('15px')};
  letter-spacing: ${letterSpacing(-10, 15)};
  font-family: ${fontFamily.openSans};
  font-weight: ${fontWeight.semiBold};
  position: relative;
  cursor: default;

  &.active,
  &:hover {
    color: ${color.strikemaster};
  }

  ${media.down.md`
    cursor: pointer;
  `}
`

// prettier-ignore
const NavLink = styled(NavText.withComponent(Link))`
  cursor: pointer;

  ${props => media.down.md`
    ${props.hasSubNav ? `
      display: inline-block;
    ` : ``}
  `}
`

// prettier-ignore
const NavLinks = styled.ul`
  ${props => media.down.md`
    ${props.subNavOpen ? `
      > li {
        display: none;
      }
    ` : ``}
  `}
`

const UtilityLink = styled.li`
  display: inline-block;
  vertical-align: top;
  color: ${color.emperor};
  font-size: ${toEms('13px')};
  letter-spacing: ${letterSpacing(-10, 13)};
  font-family: ${fontFamily.openSans};
  font-weight: ${fontWeight.semiBold};

  a {
    color: ${color.persimmon};
  }

  &::after {
    content: '•';
    color: inherit;
    padding: 0 8px;
  }

  &:last-child {
    &::after {
      content: none;
      padding: 0;
    }
  }
`

// prettier-ignore
const UtilityLinks = styled.ul`
  ${props => media.down.md`
    margin-top: 25px;

    ${props.subNavOpen ? `
      display: none;
    ` : ``}
  `}
`

// prettier-ignore
const SubNav = styled.ul`
  display: none;
  position: absolute;
  background-color: ${color.white};
  width: 225px;

  ${media.down.md`
    width: 100%;
  `}
`

// prettier-ignore
const LinkItem = styled.li`
  display: inline-block;
  vertical-align: top;
  margin-left: ${setWidth(55, 1330)};

  ${media.up.md`
    &:hover {
      ${SubNav} {
        display: block;
      }
    }
  `}

  ${props => media.down.md`
    margin-left: 0;
    display: block;
    cursor: pointer;
    border-bottom: 1px solid ${shadeOf(color.emperor, 0.2)};

    ${props.hasSubNav ? `
      position: relative;

      &::before,
      &::after {
        content: '';
        position: absolute;
        right: 0;
        width: 12px;
        height: 2px;
        border-radius: 50px;
        background-color: ${shadeOf(color.emperor, 0.2)};
        top: 50%;
        transform: translate3d(0, -50%, 0);
        transform-origin: right;
      }

      &::before {
        transform: translate3d(0, -50%, 0) rotate(45deg);
      }

      &::after {
        transform: translate3d(0, -50%, 0) rotate(-45deg);
      }
    ` : ``}

    ${props.subNavOpen ? `
      display: block !important;

      > a,
      > span {
        margin-left: 25px;
      }

      ${SubNav} {
        display: block;
      }

      &::before,
      &::after {
        left: 0;
        right: auto;
        transform-origin: left;
      }

      &::before {
        transform: translate3d(0, -50%, 0) rotate(-45deg);
      }

      &::after {
        transform: translate3d(0, -50%, 0) rotate(45deg);
      }
    ` : ``}
  `}
`

// prettier-ignore
const SubNavLink = styled(NavText.withComponent(Link))`
  padding: 10px 20px;
  border-bottom: 1px solid ${shadeOf(color.emperor, 0.15)};
  font-weight: ${fontWeight.regular};
  cursor: pointer;

  ${media.up.md`
    &.active,
    &:hover {
      color: ${color.strikemaster};
    }
  `}

  ${media.down.md`
    padding: 25px 0;
  `}
`

const SubNavItem = styled.li`
  text-align: left;
  font-weight: 400;
  display: block;
  margin: 0;

  &:last-child {
    ${SubNavLink} {
      border-bottom: 0 none;
    }
  }
`

const HamburgerMenuMiddle = styled.div`
  display: block;
  background-color: ${color.strikemaster};
  border-radius: 50px;
  height: 2px;
  width: 30px;
  margin: 7px 0;

  &::before,
  &::after {
    content: '';
    width: 30px;
    height: 2px;
    background-color: ${color.strikemaster};
    border-radius: 50px;
    display: block;
    transform-origin: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transition: transform 250ms;
  }

  &::before {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }

  &::after {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
`

// prettier-ignore
const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  padding: 25px;
  margin-right: -${setWidth(spacing.horizontalPadding)};
  height: 70px;
  position: relative;
  z-index: 9;
  flex: 0 0 auto;

  &::before,
  &::after {
    content: '';
    width: 30px;
    height: 2px;
    background-color: ${color.strikemaster};
    margin: 7px 0;
    border-radius: 50px;
    display: block;
    transition: transform 250ms;
    transform-origin: center;
  }

  &::before {
    margin-top: 0;
  }

  &::after {
    margin-bottom: 0;
  }

  ${props => props.menuOpen ? `
    &::before,
    &::after {
      opacity: 0;
      transition: opacity 100ms;
      transition-delay: 250ms;
    }

    &::before {
      transform: translate3d(0, 9px, 0);
    }

    &::after {
      transform: translate3d(0, -9px, 0);
    }

    > div {
      height: 0;
      transition: height 250ms;
      transition-delay: 250ms;

      &::before,
      &::after {
        transition: transform 250ms;
        transition-delay: 250ms;
      }

      &::before {
        transform: translate3d(-50%, -50%, 0) rotate(45deg);
      }

      &::after {
        transform: translate3d(-50%, -50%, 0) rotate(-45deg);
      }
    }
  ` : `
    &:hover {
      &::before {
        transform: translate3d(0, 3px, 0);
      }

      &::after {
        transform: translate3d(0, -3px, 0);
      }
    }
  `}

  ${media.down.md`
    display: block;
  `}
`

class Header extends Component {
  windowWidth = 0

  state = {
    menuOpen: false,
    subNavOpen: false,
  }

  componentDidMount() {
    this.windowWidth = window.innerWidth

    window.addEventListener(
      'resize',
      () => {
        requestAnimationFrame(this.handleResize)
      },
      false
    )
  }

  handleResize = () => {
    this.windowWidth = window.innerWidth

    if (this.windowWidth >= 960) {
      if (this.state.menuOpen || this.state.subNavOpen) {
        this.setState({ menuOpen: false, subNavOpen: false })
      }
    }
  }

  toggleMenu = () => {
    this.setState(
      state => ({ menuOpen: !state.menuOpen }),
      () => {
        if (this.state.menuOpen) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = ''
        }
      }
    )
  }

  handleChildClick = e => {
    e.stopPropagation()
  }

  toggleSubNav = index => {
    if (this.windowWidth < 960) {
      this.setState(state => ({
        activeSubNav: index,
        subNavOpen: !state.subNavOpen,
      }))
    }
  }

  render(props, state) {
    return (
      <Wrapper>
        <Contain menuOpen={this.state.menuOpen}>
          <Logo>
            <Link href="/">
              <img src={logo} alt="Elite DNA Therapy" />
            </Link>
          </Logo>
          <Nav menuOpen={this.state.menuOpen}>
            <UtilityLinks subNavOpen={this.state.subNavOpen}>
              <UtilityLink>
                <strong>
                  <a href="mailto:info@elitednatherapy.com" native>
                    info@elitednatherapy.com
                  </a>
                </strong>
              </UtilityLink>
              <UtilityLink>(239) 223-2751</UtilityLink>
            </UtilityLinks>
            <NavLinks subNavOpen={this.state.subNavOpen}>
              {props.data.map((link, i) => (
                <LinkItem
                  hasSubNav={link.links && link.links.length > 0}
                  key={i}
                  onClick={() => this.toggleSubNav(i)}
                  subNavOpen={
                    this.state.subNavOpen && this.state.activeSubNav === i
                  }>
                  {link.path ? (
                    <NavLink
                      activeClassName="active"
                      hasSubNav={link.links && link.links.length > 0}
                      href={link.path}
                      onClick={this.handleChildClick}>
                      {link.text}
                    </NavLink>
                  ) : (
                    <NavText>{link.text}</NavText>
                  )}
                  {link.links && (
                    <SubNav>
                      {link.links.map((subLink, i) => (
                        <SubNavItem key={i}>
                          <SubNavLink
                            activeClassName="active"
                            href={subLink.path}>
                            {subLink.text}
                          </SubNavLink>
                        </SubNavItem>
                      ))}
                    </SubNav>
                  )}
                </LinkItem>
              ))}
            </NavLinks>
          </Nav>
          <HamburgerMenu
            menuOpen={this.state.menuOpen}
            onClick={this.toggleMenu}>
            <HamburgerMenuMiddle />
          </HamburgerMenu>
        </Contain>
      </Wrapper>
    )
  }
}

export default Header
