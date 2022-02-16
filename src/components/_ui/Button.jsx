import React, { Component } from 'react';
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";

const ButtonContainer = styled("button")`
    padding: 1em 2em;
    background: ${colors.blue400};
    font-weight: 600;
    color: white;
    outline: none;
    border: none;
    font-size: 1rem;
    position: relative;
    transition: background 100ms ease-in-out;
    font-family: 'Poppins', sans-serif;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        padding: 0.8em 1.8em;
        font-size: 1em;
    }

    p {
        margin: 0;
    }

    &:hover {
        cursor: pointer;
        background: ${colors.blue350};
        transition: background 300ms ease-in-out;
    }

    &.Button--secondary {
        background: ${colors.blue200};
        color: ${colors.blue600};
        padding: 0.95em 1.8em;
        font-size: 0.95rem;

        &:hover {
            background: ${colors.blue300};
            transition: background 100ms ease-in-out;
        }
    }

    &.Button--repo {
        background: ${colors.dark100};
        color: "#FFF";
        &:hover {
            background: ${colors.dark200};
        }
    }

    &.Button--main {
        p {
            padding-left: 10px;
        }
    }
`

class Button extends Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <ButtonContainer
                onClick={this.props.onClick}
                {...props}>
                {this.props.children}
            </ButtonContainer>
        );
    }
}

export default Button;