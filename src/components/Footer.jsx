import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";

const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`

const FooterAuthor = styled("a")`
    font-size: 0.75em;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

     &:hover {
         color: ${colors.blue900};

        .FooterSpooch {
            animation-name: rotate;
            animation-duration: 1.5s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }
    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`

const StyledLink = styled(Link)`
    font-weight: 600;
    color: ${colors.blue400};
    text-decoration: none;
    transition: all 300ms ease;
    
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }

    &:hover {
        transform: translateY(-6px);
    }
`

const Footer = () => (
    <FooterContainer data-sal="slide-up" data-sal-delay="200" data-sal-duration="1500" data-sal-easing="ease">
        <StyledLink to="/">
            <Logo />
        </StyledLink>
        <FooterAuthor href="https://instagram.com/galfre.v">
            © 2021 — Galfre.vn portfolio | Hope you liked  
        </FooterAuthor>
    </FooterContainer>
)

export default Footer;
