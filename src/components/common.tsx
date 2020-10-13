import { css } from "styled-components";

export const brks = {
    desktop: "1024px",
    tablet: "768px",
    phone: "425px",
};

export const clrs = {
    white: "#ffffff",
    black: "#111111",
    primary: "#1890ff",
    dark: "#444e60",
    gray: "#7a7b7c",
    border: "#dbe1ea",
    outline: "#3381FF",
};

export const container = css`
    max-width: ${brks.desktop};
    margin: 0 auto;
`;

export const button = css`
    display: inline-block;
    color: inherit;
    border: 1px solid;
    border-radius: 23px;
    padding: 10px 50px;
    white-space: nowrap;
    text-align: center;
    transition: 200ms;
    outline: 0;
    &:hover {
        opacity: 0.6;
        background-color: ${clrs.primary};
        color: ${clrs.white};
        box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.2);
        transform: translateY(-3px);
        text-decoration: none;
    }
    &:active {
        box-shadow: none;
        transform: none;
        opacity: 1;
    }
    @media (max-width: ${brks.tablet}) {
        border-radius: 19px;
        padding: 8px 40px;
        font-size: 14px;
    }
    @media (max-width: ${brks.phone}) {
        padding: 6px 30px;
    }
`;
