import { navigate, PageProps, withPrefix } from "gatsby";
import { getUserLangKey } from "ptz-i18n";
import styled from "styled-components";
import { clrs } from "../../components/common";
import useSiteMetadata from "../../hooks/use-site-metadata";

export default function RedirectIndex(props: PageProps) {
    const data = useSiteMetadata();
    if (typeof window !== "undefined") {
        const { langs, defaultLangKey } = data.languages;
        const langKey = getUserLangKey(langs, defaultLangKey);
        navigate(withPrefix(`/${langKey}/404/`));
    }
    return null;
}

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;

    img {
        flex: 1;
    }

    .right {
        flex: 1;

        h1 {
            margin: 0 0 8px;
            font-size: 20px;
            font-weight: 300;
            color: ${clrs.dark};
        }

        p {
            margin: 0 0 36px;
            font-weight: 300;
            color: ${clrs.gray};
        }

        a {
            display: inline-block;
            border: 1px solid ${clrs.primary};
            border-radius: 4px;
            padding: 10px 30px;
            color: ${clrs.primary};
            transition: 200ms;
        }

        a:hover {
            text-decoration: none;
            background-color: ${clrs.primary};
            opacity: 0.6;
            color: ${clrs.white};
            box-shadow: 0 3px 8px 1px rgba(0, 0, 0, 0.2);
            transform: translateY(-3px);
        }

        a:active {
            box-shadow: none;
            transform: none;
            opacity: 1;
        }
    }
`;
