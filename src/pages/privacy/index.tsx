import { navigate, PageProps, withPrefix } from "gatsby";
import { getUserLangKey } from "ptz-i18n";
import styled from "styled-components";
import { container } from "../../components/common";
import useSiteMetadata from "../../hooks/use-site-metadata";

export default function RedirectIndex(props: PageProps) {
    const data = useSiteMetadata();
    if (typeof window !== "undefined") {
        const { langs, defaultLangKey } = data.languages;
        const langKey = getUserLangKey(langs, defaultLangKey);
        navigate(withPrefix(`/${langKey}/privacy/`));
    }
    return null;
}

export const ContentWrapper = styled.article`
    ${container}
    margin-top: 120px;
    margin-bottom: 60px;
    padding: 16px;
`;
