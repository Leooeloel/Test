import { PageProps } from "gatsby";
import { redirectToHome } from "ptz-i18n";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";
import { brks, button, clrs, container } from "../components/common";
import useSiteMetadata from "../hooks/use-site-metadata";

export default function RedirectIndex(props: PageProps) {
    const data = useSiteMetadata();
    if (typeof window !== "undefined") {
        const { langs, defaultLangKey } = data.languages;
        redirectToHome(langs, defaultLangKey);
    }
    return null;
}

export const Nav = styled.nav<{ invert: boolean }>`
    ${container}
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding-top: 16px;
    color: ${(props) => (props.invert ? clrs.black : clrs.white)};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    .icon {
        display: flex;
        align-items: center;
        width: 0;
        opacity: 0;
        transition: 400ms;
        z-index: 2;

        img {
            width: 30px;
            height: 30px;
        }

        @media (max-width: ${brks.tablet}) {
            margin-left: 16px;
            width: 30px;
            opacity: 1;
        }
    }

    .logo {
        display: flex;
        align-items: center;
        padding-left: 16px;
        z-index: 2;
    }

    .splitter {
        flex-grow: 1;
    }

    .menu {
        display: none;
        padding: 4px 16px;
        z-index: 2;
        @media (max-width: ${brks.tablet}) {
            display: flex;
            align-items: center;
        }
    }

    .links {
        a {
            padding: 4px 16px;
            color: inherit;
            opacity: 0.618;
            transition: 400ms;
        }
        a:hover {
            opacity: 1;
            text-decoration: none;
        }
        @media (max-width: ${brks.tablet}) {
            flex-basis: 100%;
            display: none;
            padding: 16px 0;
            flex-flow: column nowrap;
            background-color: ${(props) =>
                props.invert ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.9)"};
            &.visible {
                display: flex;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                padding-top: 56px;
                a {
                    padding-bottom: 8px;
                    animation: nav-links-in 200ms;
                }
            }
        }
    }

    @keyframes nav-links-in {
        from {
            margin-top: -2px;
        }
        to {
            margin-top: 0;
        }
    }
`;

export const HeaderWrapper = styled.header`
    position: relative;
    height: 100vh;
    overflow: hidden;
    color: ${clrs.white};
    background: linear-gradient(90deg, #101e2b 0%, #131415 100%);

    .layer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        &--beneath {
            z-index: 0;
        }

        &--center {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
        }
    }

    .shape {
        position: absolute;
        pointer-events: none;
        transform: translate(-50%, -50%);
    }

    .title {
        margin: 0 16px 32px;
        text-align: center;
        white-space: nowrap;
        word-break: break-word;
    }

    .buttons {
        text-align: center;

        a {
            ${button}
            &:hover {
                color: ${clrs.primary};
                background-color: transparent;
                transform: none;
                opacity: 1;
            }
            &:active {
                color: ${clrs.white};
                border-color: ${clrs.primary};
                background-color: ${clrs.primary};
            }
            margin: 4px 12px;
        }
    }

    .bottom {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }

    .arrow {
        flex-basis: 100%;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }

    .stat {
        padding: 25px 0;
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .splitter {
        height: 36px;
        border-right: 1px solid;
        opacity: 0.24;
    }
`;

export const SectionTitle = styled.h1`
    ${container}
    margin: 60px auto 50px;
    padding: 0 16px;
    text-align: center;
    color: ${clrs.dark};
    @media (max-width: ${brks.tablet}) {
        margin: 30px auto 15px;
    }
    @media (max-width: ${brks.phone}) {
        margin: 20px auto 10px;
    }
`;

export const NextSectionTitle = styled(SectionTitle)`
    margin: 120px auto 20px;
    @media (max-width: ${brks.tablet}) {
        margin: 60px auto 15px;
    }
    @media (max-width: ${brks.phone}) {
        margin: 40px auto 10px;
    }
`;

export const VideosWrapper = styled.section`
    width: 1080px;
    height: 608px;
    position: relative;
    margin: 0 auto;
    box-shadow: 0px 16px 64px 0px rgba(0, 0, 0, 0.16);
    border-radius: 12px;
    overflow: hidden;
    video {
        width: 100%;
        height: auto;
    }
    @media (max-width: ${brks.desktop}) {
        width: 100%;
        height: 61.8vw;
    }

    .cover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.42;
        transition: 200ms;
        cursor: pointer;
        &.active {
            opacity: 1;
        }
        img {
            zoom: 5;
        }
    }

    .control {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -1px;
        height: 160px;
        background: rgba(255, 255, 255, 0.64);
        backdrop-filter: blur(20px);
        display: flex;
        @media (max-width: ${brks.desktop}) {
            zoom: 0.5;
        }
    }

    .progress {
        position: absolute;
        width: 100%;
        height: 2px;
        border-top: 1px solid #3381ff;
    }

    .buttons {
        flex: 1;
        display: flex;
    }

    .button {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        user-select: none;
        cursor: pointer;
        &.active *,
        &:hover * {
            stroke: ${clrs.primary};
            color: ${clrs.primary};
        }
    }

    .icon {
        svg * {
            stroke: ${clrs.dark};
        }
    }

    .text {
        margin: 6px auto 8px;
        text-align: center;
        color: ${clrs.dark};
        transition: 400ms;
    }
`;

export const SectionDesc = styled.p`
    margin: 36px auto 60px;
    font-size: 24px;
    text-align: center;
    font-weight: 300;
    color: ${clrs.dark};
    @media (max-width: ${brks.tablet}) {
        margin: 28px 0 30px;
        font-size: 16px;
    }
    @media (max-width: ${brks.phone}) {
        margin: 16px 0 24px;
        font-size: 12px;
    }
`;

export const FeaturesWrapper = styled.section`
    margin: 0 auto;
    max-width: calc(160px + ${brks.desktop});
    padding-left: 80px;
    display: flex;
    align-items: center;
    @media (max-width: ${brks.tablet}) {
        padding-left: 0;
    }

    .left {
        @media (max-width: ${brks.tablet}) {
            display: none;
        }
    }

    .btn {
        border-left: 2px solid transparent;
        padding: 12px 72px 12px 36px;
        font-weight: 300;
        color: ${clrs.dark};
        user-select: none;
        cursor: pointer;
        &:hover,
        &.active {
            color: ${clrs.primary};
        }
        &.active {
            border-left-color: ${clrs.primary};
        }
    }

    .right {
        flex: 1;
        height: 576px;
        display: flex;
        justify-content: center;
        img,
        video {
            width: 100%;
            height: auto;
        }
        @media (max-width: ${brks.desktop}) {
            height: unset;
            margin-right: 8px;
        }
    }
`;

export const IntrosWrapper = styled.section`
    margin: 60px auto 0;
    padding: 0 16px;
    max-width: ${brks.desktop};
    @media (max-width: ${brks.tablet}) {
        margin: 20px auto 0;
    }

    .cell {
        display: flex;
        flex-flow: row wrap;
        padding-bottom: 60px;
        &:nth-child(odd) {
            flex-direction: row-reverse;
            @media (max-width: ${brks.tablet}) {
                flex-direction: row;
            }
        }
        @media (max-width: ${brks.tablet}) {
            padding-bottom: 20px;
        }
    }

    .icon {
        user-select: none;
        pointer-events: none;
        @media (max-width: ${brks.tablet}) {
            zoom: 0.5;
        }
        @media (max-width: ${brks.phone}) {
            flex-basis: 100%;
            text-align: center;
        }
    }

    .text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .title {
        color: ${clrs.dark};
    }

    .desc {
        margin: 36px 0 0;
        font-weight: 300;
        color: ${clrs.gray};
        @media (max-width: ${brks.tablet}) {
            margin: 16px 0 0;
        }
        @media (max-width: ${brks.phone}) {
            margin: 8px 0 0;
        }
    }
`;

export const CustomersWrapper = styled.section`
    position: relative;
    margin-top: 50px;

    .logos {
        display: flex;
        height: 90px;
        @media (max-width: ${brks.desktop}) {
            display: none;
        }
    }

    .logo {
        padding: 0 30px;
        display: flex;
        align-items: center;
        img {
            width: 100%;
            height: auto;
        }
    }

    .head {
        text-align: center;
        user-select: none;
        img {
            border-radius: 50%;
        }
    }

    .name {
        margin-top: 4px;
        text-align: center;
        color: ${clrs.dark};
        user-select: none;
    }

    .job {
        margin-top: 4px;
        text-align: center;
        font-size: 14px;
        font-weight: 300;
        color: ${clrs.gray};
        user-select: none;
    }

    .text {
        margin-top: 24px;
        font-weight: 300;
        color: ${clrs.gray};
        user-select: none;
    }

    .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
                to right,
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 1)
            ),
            linear-gradient(
                to left,
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 1)
            );
        z-index: 100;
        pointer-events: none;
        @media (max-width: ${brks.tablet}) {
            display: none;
        }
    }

    .swiper-container {
        padding-bottom: 50px !important;
    }

    .swiper-slide {
        position: relative;
    }

    .card {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        flex: 1;
        width: 480px;
        height: 240px;
        margin: 32px auto;
        padding: 24px;
        background-color: #ffffff;
        box-shadow: 0px 13px 51px 0px rgba(0, 0, 0, 0.16);
        transition: transform 400ms linear;
    }

    @media (max-width: ${brks.tablet}) {
        .card {
            width: 100%;
            height: auto;
            margin: 0;
            box-shadow: none;
            border-right: 1px solid rgba(0, 0, 0, 0.3);
        }
    }

    .swiper-slide-active .card {
        z-index: 9999;
    }

    @media (max-width: ${brks.desktop}) {
        .swiper-slide-prev {
            z-index: -1;
        }

        .swiper-slide-next {
            z-index: -1;
        }
    }
`;

export const RegisterWrapper = styled.section`
    padding: 60px 0;
    background: linear-gradient(180deg, ${clrs.border} 0%, #e7e9ee 100%);
    @media (max-width: ${brks.tablet}) {
        padding: 30px 0 40px;
    }
    @media (max-width: ${brks.phone}) {
        padding: 20px 0;
    }

    .title {
        padding: 0 12px;
        color: ${clrs.dark};
        text-align: center;
        @media (max-width: ${brks.tablet}) {
            margin: 30px 0 15px;
        }
        @media (max-width: ${brks.phone}) {
            margin: 20px 0 10px;
        }
    }

    .input-container {
        text-align: center;
        @media (max-width: ${brks.tablet}) {
            font-size: 14px;
        }
        @media (max-width: ${brks.phone}) {
            font-size: 12px;
        }
    }

    .input-wrapper {
        display: inline-block;
        margin-top: 60px;
        background: ${clrs.white};
        border-radius: 8px;
        border: 1px solid ${clrs.border};
        input {
            border: 0;
            background: transparent;
            padding: 10px 24px;
            line-height: 24px;
            &::placeholder {
                color: ${clrs.dark};
                opacity: 0.42;
            }
        }
        button {
            border: 0;
            padding: 10px 32px;
            line-height: 24px;
            background: #3381ff;
            border-radius: 8px;
            color: ${clrs.white};
        }
        @media (max-width: ${brks.tablet}) {
            margin-top: 30px;
            input {
                padding: 5px 12px;
                line-height: 16px;
            }
            button {
                padding: 5px 12px;
            }
        }
        @media (max-width: ${brks.phone}) {
            margin-top: 20px;
        }
    }
`;

export const FooterWrapper = styled.footer`
    border-top: 1px solid ${clrs.border};
    padding: 36px 0 24px;

    .columns {
        max-width: ${brks.desktop};
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
    }

    .col {
        flex: 1;
        padding-left: 16px;
        @media (max-width: ${brks.phone}) {
            flex-basis: 100%;
        }
    }

    .logo {
        padding: 0 16px 8px;
        @media (max-width: ${brks.phone}) {
            padding: 0 0 8px;
            font-size: 12px;
        }
    }

    .btn {
        ${button}
        color: ${clrs.gray};
        margin-top: 8px;
        margin-left: 16px;
        border: 1px solid ${clrs.border};
        padding: 8px 24px;
        &:hover {
            color: ${clrs.black};
            border-color: ${clrs.black};
            background-color: ${clrs.white};
            opacity: 1;
        }
        @media (max-width: ${brks.phone}) {
            margin-left: 0;
            font-size: 12px;
        }
    }

    .title {
        color: ${clrs.gray};
        font-size: 16px;
        margin-bottom: 32px;
        @media (max-width: ${brks.tablet}) {
            margin-bottom: 24px;
        }
        @media (max-width: ${brks.phone}) {
            margin-top: 24px;
            margin-bottom: 12px;
        }
    }

    .link {
        margin-bottom: 16px;
        a {
            text-decoration: none;
            font-size: 14px;
            color: ${clrs.dark};
            &:hover {
                text-decoration: underline;
            }
            @media (max-width: ${brks.tablet}) {
                font-size: 12px;
            }
        }
        @media (max-width: ${brks.tablet}) {
            margin-bottom: 12px;
        }
    }

    .beian {
        margin-top: 38px;
        padding: 0 12px;
        text-align: center;
        font-size: 14px;
        color: ${clrs.gray};
        a {
            color: inherit;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
        @media (max-width: ${brks.tablet}) {
            margin-top: 12px;
            font-size: 12px;
        }
    }
`;
