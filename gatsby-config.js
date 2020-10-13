const languages = require("./src/data/languages");

module.exports = {
    siteMetadata: {
        title: "Netless",
        languages,
    },
    plugins: [
        "gatsby-plugin-typescript",
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-sass",
            options: {
                outputStyle: "compressed",
                precision: 6,
                useResolveUrlLoader: true,
            },
        },
        {
            resolve: "gatsby-plugin-i18n",
            options: {
                langKeyDefault: languages.defaultLangKey,
                useLangKeyLayout: false,
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        {
            resolve: `gatsby-plugin-baidu-analytics`,
            options: {
                siteId: "8d64e6383ca1f180d2afbcd2b1fead96",
                head: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-121342880-1",
                head: true,
                anonymize: true,
                respectDNT: true,
            },
        },
    ],
};
