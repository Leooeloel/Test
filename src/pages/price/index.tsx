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
        navigate(withPrefix(`/${langKey}/price/`));
    }
    return null;
}

export const Section = styled.section`
    .desc {
        margin: 0;
        text-align: center;
        font-size: 24px;
        font-weight: 300;
        color: ${clrs.dark};
        @media (max-width: ${brks.tablet}) {
            font-size: 16px;
        }
        @media (max-width: ${brks.phone}) {
            font-size: 14px;
        }
    }

    .table {
        max-width: ${brks.desktop};
        margin: 50px auto 60px;
        overflow-x: auto;
        @media (max-width: ${brks.tablet}) {
            margin: 36px auto 40px;
        }
        @media (max-width: ${brks.phone}) {
            margin: 18px auto 30px;
        }
    }

    table {
        th {
            padding: 12px 16px;
            color: ${clrs.gray};
            font-weight: normal;
            background: #eef0f6;
            white-space: nowrap;
        }
        td {
            padding: 16px 36px;
            font-size: 14px;
            color: ${clrs.dark};
            &:not(:nth-child(2)) {
                white-space: nowrap;
                text-align: center;
            }
            @media (max-width: ${brks.tablet}) {
                white-space: nowrap;
                word-break: keep-all;
            }
        }
        tr:nth-child(even) td {
            background: #eef0f6;
        }
    }

    .grid {
        max-width: ${brks.desktop};
        margin: 50px auto 36px;
        display: grid;
        grid-template-columns: auto auto 1fr auto;
        grid-row-gap: 32px;
        align-items: center;
        @media (max-width: ${brks.tablet}) {
            margin: 24px auto 16px;
            grid-row-gap: 12px;
        }
    }

    .span3 {
        grid-column-end: span 3;
        display: flex;
        align-items: center;
        input[type="radio"] {
            appearance: none;
            display: inline-block;
            position: relative;
            text-align: center;
            vertical-align: middle;
            width: 17px;
            height: 17px;
            padding: 3px;
            border: 1px solid ${clrs.border};
            background-clip: content-box;
            border-radius: 50%;
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
            cursor: pointer;
            &:checked {
                background-color: ${clrs.primary};
            }
        }
        label {
            padding: 0 36px 0 12px;
            color: ${clrs.dark};
            cursor: pointer;
        }
        @media (max-width: ${brks.tablet}) {
            grid-column-end: span 4;
            margin-left: 16px;
        }
    }

    .entry {
        color: ${clrs.gray};
        margin-left: 16px;
        padding-right: 100px;
        @media (max-width: ${brks.tablet}) {
            padding-right: 0;
            grid-column-end: span 4;
            &:not(:first-child) {
                margin-bottom: 12px;
            }
        }
    }

    .input {
        padding: 0 16px;
        @media (max-width: ${brks.tablet}) {
            grid-column-end: span 2;
            padding: 0;
        }
    }

    .end {
        font-size: 12px;
        color: ${clrs.gray};
        user-select: none;
        margin-right: 4px;
        @media (max-width: ${brks.tablet}) {
            margin: 0 16px;
        }
    }

    > hr {
        display: block;
        max-width: ${brks.desktop};
        border: 0;
        border-bottom: 1px solid ${clrs.border};
    }

    .flex {
        display: flex;
        align-items: center;
        max-width: ${brks.desktop};
        margin: 36px auto;
        @media (max-width: ${brks.tablet}) {
            margin: 16px auto;
        }
    }

    .right {
        flex: 1;
        flex-flow: row wrap;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 16px;
    }

    .price {
        font-size: 24px;
        color: ${clrs.dark};
        @media (max-width: ${brks.tablet}) {
            margin-left: 36px;
        }
    }

    small {
        color: ${clrs.gray};
        font-size: 12px;
        font-weight: normal;
        margin-left: 24px;
        @media (max-width: ${brks.tablet}) {
            flex-basis: 100%;
            text-align: right;
        }
    }

    .note {
        margin: 36px auto 60px;
        padding: 0 16px;
        text-align: center;
        font-size: 12px;
        color: ${clrs.gray};
        @media (max-width: ${brks.tablet}) {
            margin: 16px auto 30px;
        }
    }

    .center {
        margin: 36px auto;
        text-align: center;
    }

    .btn {
        ${button}
        color: ${clrs.primary};
        border-color: ${clrs.primary};

        &:hover,
        &:active {
            border-color: ${clrs.primary};
        }
    }
`;
