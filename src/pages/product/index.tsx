import { navigate, PageProps, withPrefix } from "gatsby";
import { getUserLangKey } from "ptz-i18n";
import styled from "styled-components";
import { brks, button, clrs } from "../../components/common";
import useSiteMetadata from "../../hooks/use-site-metadata";

export default function RedirectIndex(props: PageProps) {
    const data = useSiteMetadata();
    if (typeof window !== "undefined") {
        const { langs, defaultLangKey } = data.languages;
        const langKey = getUserLangKey(langs, defaultLangKey);
        navigate(withPrefix(`/${langKey}/product/`));
    }
    return null;
}

export const HeaderWrapper = styled.header`
    color: ${clrs.white};
    background: linear-gradient(90deg, #101e2b 0%, #131415 100%);

    .container {
        padding: 160px;
        @media (max-width: ${brks.desktop}) {
            padding: 120px;
        }
        @media (max-width: ${brks.tablet}) {
            padding: 80px 60px;
        }
        @media (max-width: ${brks.phone}) {
            padding: 80px 16px 32px;
        }
    }

    .title {
    }

    .desc {
        margin: 24px 0 36px;
        font-size: 20px;
        font-weight: 300;
        @media (max-width: ${brks.tablet}) {
            margin: 16px 0 24px;
            font-size: 16px;
        }
        @media (max-width: ${brks.phone}) {
            font-size: 14px;
        }
    }

    .actions {
    }

    .btn {
        ${button}
        margin: 4px 12px;
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
        @media (max-width: ${brks.tablet}) {
            padding: 6px 30px;
            font-size: 14px;
        }
        @media (max-width: ${brks.phone}) {
            padding: 4px 20px;
            font-size: 12px;
        }
    }
`;

export const StickyWrapper = styled.div`
    position: sticky;
    top: 0;
    border-bottom: 1px solid #dbe1ea;
    background-color: ${clrs.white};
    z-index: 10;

    .container {
        max-width: ${brks.desktop};
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        padding: 10px;
        a {
            padding: 8px 16px;
            white-space: nowrap;
            word-break: keep-all;
            border-bottom: 2px solid transparent;
            user-select: none;
            &:hover,
            &.active {
                text-decoration: none;
                color: ${clrs.primary};
                border-bottom-color: ${clrs.primary};
            }
            @media (max-width: ${brks.tablet}) {
                padding: 4px 8px;
                font-size: 14px;
            }
            @media (max-width: ${brks.phone}) {
                font-size: 12px;
            }
        }
    }
`;

export const Description = styled.div`
    max-width: ${brks.desktop};
    margin: 0 auto 24px;
    padding: 0 12px;
    text-align: center;
    font-weight: 200;
    color: ${clrs.dark};
    @media (max-width: ${brks.tablet}) {
        font-size: 14px;
    }
    @media (max-width: ${brks.phone}) {
        font-size: 12px;
    }
`;

export const PresentationWrapper = styled.div`
    max-width: ${brks.desktop};
    margin: 0 auto;
    img {
        max-width: 100%;
        height: auto;
    }
`;

export const CardWrapper = styled.div`
    max-width: ${brks.desktop};
    margin: 24px auto 0;
    padding: 25px;
    box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.08), 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    display: flex;
    @media (max-width: ${brks.tablet}) {
        padding: 15px;
    }
    img {
        margin: 1px 25px 1px 1px;
        @media (max-width: ${brks.tablet}) {
            width: 100px;
        }
        @media (max-width: ${brks.phone}) {
            width: 50px;
        }
    }
    div {
        flex: 1;
        h3 {
            margin: 11px 0 0;
            font-size: 20px;
            color: ${clrs.dark};
        }
        p {
            margin: 16px 0 0;
            font-weight: 300;
            color: ${clrs.gray};
        }
        @media (max-width: ${brks.tablet}) {
            h3 {
                font-size: 16px;
            }
            p {
                font-size: 12px;
            }
        }
    }
`;

export const ButtonWrapper = styled.div`
    text-align: center;
    margin-bottom: 60px;

    a {
        display: inline-block;
        margin-top: 36px;
        color: ${clrs.primary};
        padding: 10px 50px;
        border: 1px solid ${clrs.primary};
        border-radius: 23px;
        transition: 200ms;
        &:hover {
            text-decoration: none;
            color: ${clrs.white};
            background-color: ${clrs.primary};
            opacity: 0.6;
            box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.2);
            transform: translateY(-3px);
        }
        &:active {
            box-shadow: none;
            transform: none;
            opacity: 1;
        }
    }
`;

export const Space = styled.div`
    margin-bottom: 60px;
`;

export const CustomersWrapper = styled.div`
    max-width: ${brks.desktop};
    margin: 50px auto 60px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: ${brks.tablet}) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: ${brks.phone}) {
        grid-template-columns: repeat(2, 1fr);
    }
    img {
        width: 100%;
        height: auto;
        user-select: none;
    }
`;

export const SectionTitle = styled.h2`
    margin: 0;
    padding: 60px 0 36px;
    color: ${clrs.dark};
    font-size: 34px;
    font-weight: 600;
    text-align: center;
    @media (max-width: ${brks.tablet}) {
        padding: 60px 0 15px;
        font-size: 28px;
    }
    @media (max-width: ${brks.phone}) {
        padding: 60px 0 10px;
        font-size: 18px;
    }
`;
