import { useStaticQuery, graphql } from "gatsby";

export interface SiteMetadata {
    title: string;
    languages: {
        langs: string[];
        defaultLangKey: string;
    };
}

// https://www.gatsbyjs.com/docs/use-static-query
// note: only one `useStaticQuery` can be used in a file
const useSiteMetadata: () => SiteMetadata = () => {
    const e = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    languages {
                        defaultLangKey
                        langs
                    }
                }
            }
        }
    `) as { site: { siteMetadata: SiteMetadata } };
    return e.site.siteMetadata;
};

export default useSiteMetadata;
