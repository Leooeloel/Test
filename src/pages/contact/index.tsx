import { navigate, PageProps, withPrefix } from "gatsby";
import { getUserLangKey } from "ptz-i18n";
import styled from "styled-components";
import { brks, button, clrs } from "../../components/common";
import useSiteMetadata from "../../hooks/use-site-metadata";
import { Flex, JoinWrapper } from "../about";

export default function RedirectIndex(props: PageProps) {
    const data = useSiteMetadata();
    if (typeof window !== "undefined") {
        const { langs, defaultLangKey } = data.languages;
        const langKey = getUserLangKey(langs, defaultLangKey);
        navigate(withPrefix(`/${langKey}/contact/`));
    }
    return null;
}

export const HeaderWrapper = styled.header`
    background-color: #f3f6f9;

    .wrapper {
        max-width: ${brks.desktop};
        margin: 0 auto;
        margin-bottom: -130px;
        padding: 160px 16px;
        @media (max-width: ${brks.tablet}) {
            margin: 0 auto;
        }
    }

    h1 {
        margin: 0 0 24px;
        color: ${clrs.dark};
    }

    p {
        margin: 0;
        font-size: 20px;
        font-weight: 300;
        color: ${clrs.dark};
        @media (max-width: ${brks.tablet}) {
            margin: 0 0 40px;
            font-size: 16px;
        }
    }
`;

export const ContactWrapper = styled(JoinWrapper)`
    @media (max-width: ${brks.tablet}) {
        flex-basis: 100%;
        border-right: 0;
        padding-bottom: 50px;
        border-bottom: 1px solid ${clrs.border};
    }

    button {
        line-height: 1.5;
        background-color: ${clrs.white};
        outline: 0;
    }
`;

export const ModalWrapper = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;

    &.active {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .wrapper {
        max-width: 492px;
        @media (min-width: ${brks.tablet}) {
            min-width: 492px;
        }
        position: relative;
        background-color: ${clrs.white};
        box-shadow: 0px 16px 64px 0px rgba(0, 0, 0, 0.16);
        border-radius: 12px;
        padding: 24px;
        @media (max-width: ${brks.phone}) {
            padding: 16px;
            border-radius: 0;
        }
    }

    .close {
        position: absolute;
        right: 24px;
        top: 24px;
        cursor: pointer;

        img {
            user-select: none;
        }
    }

    .grid {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 24px;

        @media (max-width: ${brks.phone}) {
            grid-gap: 8px;
        }
    }

    h1 {
        font-size: 20px;
        font-weight: normal;
        color: ${clrs.dark};
        text-align: center;
    }

    p {
        margin: 16px auto 24px;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
        color: ${clrs.gray};
        @media (max-width: ${brks.phone}) {
            margin: 8px auto 16px;
        }
    }

    label {
        margin-top: 7px;
        font-weight: 300;
        color: ${clrs.dark};
        @media (max-width: ${brks.phone}) {
            padding-right: 8px;
        }
    }

    input,
    textarea {
        border: 0;
        padding: 11px 16px;
        background: #f3f6f9;
        border-radius: 8px;
        font-size: 1rem;
        color: ${clrs.dark};

        &::placeholder {
            color: ${clrs.dark};
            opacity: 0.42;
        }

        &:focus {
            outline: 0;
            box-shadow: 0 0 0 1px ${clrs.outline};
        }
    }

    textarea {
        resize: vertical;
    }

    .action {
        margin-top: 24px;
        text-align: right;
        @media (max-width: ${brks.phone}) {
            margin-top: 16px;
        }
    }

    button {
        ${button}
        border: 0;
        border-radius: 8px;
        padding: 10px 32px;
        background-color: ${clrs.primary};
        color: ${clrs.white};
    }

    .check {
        text-align: center;
        margin-bottom: 24px;
    }

    .circle {
        width: 60px;
        height: 60px;
        background-color: #f3f6f9;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .close-thank {
        text-align: center;

        button {
            padding: 10px 48px;
            background-color: white;
            border: 1px solid ${clrs.border};
            color: ${clrs.gray};

            &:hover {
                opacity: 1;
                border: 1px solid ${clrs.primary};
                box-shadow: none;
                transform: none;
                color: ${clrs.primary};
            }
        }
    }
`;

export const FlexEx = styled(Flex)`
    .sample {
        position: relative;
    }

    .text {
        font-size: 34px;
        font-weight: 300;
        position: absolute;
        bottom: 40px;
        left: 0;
        right: 0;
        color: ${clrs.white};
        text-align: center;
        text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.64);
        @media (max-width: ${brks.tablet}) {
            font-size: 28px;
            bottom: 30px;
        }
        @media (max-width: ${brks.phone}) {
            font-size: 18px;
            bottom: 20px;
        }
    }

    .desc {
        flex: 1;
        margin: 36px auto 60px;
        padding: 0 16px;
        text-align: center;
        font-size: 24px;
        color: ${clrs.dark};
        @media (max-width: ${brks.tablet}) {
            margin: 30px auto 40px;
            font-size: 18px;
        }
        @media (max-width: ${brks.phone}) {
            margin: 16px auto;
            flex-basis: 100%;
            text-align: left;
            font-size: 14px;
        }
    }
`;
