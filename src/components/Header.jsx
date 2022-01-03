import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Logo from "components/_ui/Logo";

const HeaderContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
`

const HeaderLinks = styled("div")`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 7em;
    justify-content: flex-end;
    width: 100%;
    max-width: 200px;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-gap: 5.5em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-gap: 2.5em;
    }

    a {
        color: currentColor;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 600;
        font-size: 0.95em;
        height: 100%;
        padding-bottom: .25em;
        padding-top: 0.25em;
        display: block;
        position: relative;
        transition: all 300ms ease;

        &:hover {
            transform: translateY(-6px);
        }

        &.Link--is-active {
            padding: 5px 12px 5px 12px;

            &:nth-of-type(1) { color: ${colors.blue400}; background-color: ${colors.blue200}; }
            &:nth-of-type(2) { color: ${colors.orange600}; background-color: ${colors.orange200}; }
            &:nth-of-type(3) { color: ${colors.purple600}; background-color: ${colors.purple200}; }

            &:hover {
                transform: translateY(0);
            }
        }
    }
`

const StyledLink = styled(Link)`
    font-weight: 600;
    color: ${colors.blue400};
    text-decoration: none;
    transition: all 300ms ease;
    display: flex;
    justify-content: center;
    align-items: center;
    
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        transform: translateY(-6px);
    }
`

const Header = () => (
    <HeaderContainer>
        <HeaderContent data-sal="slide-up" data-sal-delay="100" data-sal-duration="1500" data-sal-easing="ease">
            <StyledLink to="/">
                <Logo/>
            </StyledLink>
            <HeaderLinks data-sal="slide-up" data-sal-delay="200" data-sal-duration="1500" data-sal-easing="ease">
                <Link
                    activeClassName="Link--is-active"
                    to="/work">
                    Works
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/blog">
                    Blog
                </Link>
            </HeaderLinks>
        </HeaderContent>
    </HeaderContainer>
)

export default Header;