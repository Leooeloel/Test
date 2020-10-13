import { navigate, PageProps, withPrefix } from "gatsby";
import { getUserLangKey } from "ptz-i18n";
import styled from "styled-components";
import { brks, clrs, container } from "../../components/common";
import useSiteMetadata from "../../hooks/use-site-metadata";
import check from "../../images/check.svg";

export default function RedirectIndex(props: PageProps) {
    const data = useSiteMetadata();
    if (typeof window !== "undefined") {
        const { langs, defaultLangKey } = data.languages;
        const langKey = getUserLangKey(langs, defaultLangKey);
        navigate(withPrefix(`/${langKey}/join/`));
    }
    return null;
}

export const HeaderWrapper = styled.header`
    background-color: #f3f6f9;

    .wrapper {
        max-width: ${brks.desktop};
        margin: 0 auto;
        padding: 160px 16px;
        @media (max-width: ${brks.tablet}) {
            margin: 100px auto 0;
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

export const Grid = styled.div`
    ${container}
    margin-bottom: 120px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: ${brks.tablet}) {
        grid-template-columns: 1fr 1fr;
        margin-bottom: 60px;
    }
    @media (max-width: ${brks.phone}) {
        grid-template-columns: 1fr;
        margin-bottom: 30px;
    }

    .item {
        display: flex;
        padding: 12px 24px;
        color: ${clrs.gray};
        align-items: center;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 50;
            margin-top: -3px;
            margin-right: 16px;
            width: 18px;
            height: 18px;
            background-image: url(${check});
            background-repeat: no-repeat;
        }
    }
`;

export const CardsWrapper = styled.div`
    ${container}
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 120px;
    @media (max-width: ${brks.tablet}) {
        grid-template-columns: 1fr;
        margin-bottom: 60px;
    }
    @media (max-width: ${brks.phone}) {
        margin-bottom: 30px;
    }

    .card {
        margin: 12px;
        border-radius: 12px;
        box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.08), 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
        padding: 24px;
        display: flex;
        align-items: center;

        .right {
            flex: 1;
            margin-left: 12px;
            display: flex;
            flex-flow: column nowrap;
            align-items: flex-start;
        }

        .title {
            font-size: 20px;
            color: ${clrs.dark};
            margin-bottom: 16px;
        }
        .text {
            font-weight: 300;
            color: ${clrs.gray};
        }
    }
`;
