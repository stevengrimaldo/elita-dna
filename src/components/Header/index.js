import { h } from 'preact'
import { Link } from 'preact-router/match'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container } from '../'

import { color, fontFamily, fontWeight } from '../../global/theme'

import { setWidth, letterSpacing, shadeOf, toEms } from '../../global/utils'

const logo = '/img/logo.png'

const Wrapper = styled.header`
  background-color: ${color.white};
  position: relative;
  z-index: 10;
  padding: 25px 0 0;
`

const Contain = styled(Container)`
  display: flex;
`

const Logo = styled.figure`
  max-width: 385px;
  width: 100%;
  flex: 1 1 auto;

  img {
    width: auto;
    max-height: 75px;
    max-width: 200px;
  }
`

const Nav = styled.nav`
  max-width: 1330px;
  width: 100%;
  text-align: right;
  flex: 1 1 auto;
`

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
`

const NavLink = NavText.withComponent(Link).extend`
  cursor: pointer;
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

const SubNav = styled.ul`
  display: none;
  position: absolute;
  background-color: ${color.white};
  width: 225px;
`

const LinkItem = styled.li`
  display: inline-block;
  vertical-align: top;
  margin-left: ${setWidth(55, 1330)};

  &:hover {
    ${SubNav} {
      display: block;
    }
  }
`

const SubNavLink = NavText.withComponent(Link).extend`
  padding: 10px 20px;
  border-bottom: 1px solid ${shadeOf(color.emperor, 0.15)};
  font-weight: ${fontWeight.regular};
  cursor: pointer;

  &.active,
  &:hover {
    color: ${color.strikemaster};
  }
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
`

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  padding: 25px;
  margin-right: -25px;
  max-height: 83px;
  float: right;
  position: relative;
  z-index: 9;

  &::before,
  &::after {
    content: '';
    width: 30px;
    height: 2px;
    background-color: ${color.strikemaster};
    margin: 7px 0;
    border-radius: 50px;
    display: block;
  }

  &:before {
    margin-top: 0;
  }

  &:after {
    margin-bottom: 0;
  }
`

const Header = ({ data }) => (
  <Wrapper>
    <Contain>
      <Logo>
        <Link href="/">
          <img src={logo} alt="Elite DNA Therapy" />
        </Link>
      </Logo>
      <Nav>
        <ul>
          <UtilityLink>
            <strong>
              <a href="mailto:info@elitednatherapy.com" native>
                info@elitednatherapy.com
              </a>
            </strong>
          </UtilityLink>
          <UtilityLink>(239) 223-2751</UtilityLink>
        </ul>
        <ul>
          {data.map((link, i) => (
            <LinkItem key={i}>
              {link.path ? (
                <NavLink activeClassName="active" href={link.path}>
                  {link.text}
                </NavLink>
              ) : (
                <NavText>{link.text}</NavText>
              )}
              {link.links && (
                <SubNav>
                  {link.links.map((subLink, i) => (
                    <SubNavItem key={i}>
                      <SubNavLink activeClassName="active" href={subLink.path}>
                        {subLink.text}
                      </SubNavLink>
                    </SubNavItem>
                  ))}
                </SubNav>
              )}
            </LinkItem>
          ))}
        </ul>
      </Nav>
      <HamburgerMenu>
        <HamburgerMenuMiddle />
      </HamburgerMenu>
    </Contain>
  </Wrapper>
)

Header.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Header
