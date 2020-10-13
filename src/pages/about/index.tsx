import { navigate, PageProps, withPrefix } from "gatsby";
import { getUserLangKey } from "ptz-i18n";
import styled from "styled-components";
import { SectionDesc as SecDesc } from "..";
import { brks, button, clrs } from "../../components/common";
import useSiteMetadata from "../../hooks/use-site-metadata";
import { SectionTitle as SecTitle } from "../product/index";

export default function RedirectIndex(props: PageProps) {
    const data = useSiteMetadata();
    if (typeof window !== "undefined") {
        const { langs, defaultLangKey } = data.languages;
        const langKey = getUserLangKey(langs, defaultLangKey);
        navigate(withPrefix(`/${langKey}/about/`));
    }
    return null;
}

export const TitleWrapper = styled.header`
    max-width: ${brks.desktop};
    margin: 160px auto 0;
    padding: 0 16px;
    @media (max-width: ${brks.tablet}) {
        margin: 100px auto 0;
    }

    h1 {
        margin: 0 0 24px;
        color: ${clrs.dark};
    }

    p {
        margin: 0 0 80px;
        font-size: 20px;
        font-weight: 300;
        color: ${clrs.dark};
        @media (max-width: ${brks.tablet}) {
            margin: 0 0 40px;
            font-size: 16px;
        }
    }
`;

export const Flex = styled.div`
    display: flex;
    @media (max-width: ${brks.phone}) {
        flex-flow: row wrap;
    }

    .sample {
        flex: 1;
        @media (max-width: ${brks.phone}) {
            flex-basis: 100%;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .desc-wrapper {
        flex: 1;
        background: #f3f6f9;
        .desc {
            color: ${clrs.gray};
            padding: 40px 60px;
            font-size: 20px;
            @media (max-width: ${brks.tablet}) {
                padding: 16px;
                font-size: 16px;
            }
            @media (max-width: ${brks.phone}) {
                font-size: 14px;
            }
        }
    }
`;

export const Stats = styled.div`
    display: flex;
    border-bottom: 1px solid ${clrs.border};

    .col {
        padding: 25px 0;
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .number {
        font-size: 24px;
        font-weight: 600;
        color: ${clrs.dark};
        @media (max-width: ${brks.tablet}) {
            font-size: 18px;
        }
        @media (max-width: ${brks.phone}) {
            font-size: 16px;
        }
    }

    .text {
        margin-top: 8px;
        opacity: 0.618;
        text-align: center;
        color: ${clrs.gray};
        @media (max-width: ${brks.tablet}) {
            font-size: 14px;
        }
        @media (max-width: ${brks.phone}) {
            font-size: 12px;
        }
    }
`;

export const SectionTitle = styled(SecTitle)`
    margin-top: 120px;
    margin-bottom: 16px;
    padding: 0;
    @media (max-width: ${brks.tablet}) {
        margin-top: 60px;
    }
    @media (max-width: ${brks.phone}) {
        margin-top: 30px;
        margin-bottom: 8px;
    }
`;

export const SectionDesc = styled(SecDesc)`
    margin-top: 16px;
    margin-bottom: 120px;
    @media (max-width: ${brks.phone}) {
        margin-bottom: 60px;
    }
    @media (max-width: ${brks.phone}) {
        margin-top: 8px;
        margin-bottom: 120px;
    }
`;

export const HistoryWrapper = styled.div`
    margin-top: 50px;
    position: relative;

    .wrapper {
        padding: 0 120px;
        width: auto;
        white-space: nowrap;
        overflow-x: auto;
        @media (max-width: ${brks.tablet}) {
            padding: 0;
        }
    }

    .cell {
        display: inline-block;
        width: 360px;
        height: 180px;
        @media (max-width: ${brks.phone}) {
            width: 280px;
            height: 120px;
        }
    }

    .date {
        height: 70px;
        border-bottom: 1px solid ${clrs.border};
        padding: 16px;
        display: flex;
        align-items: center;
        font-size: 24px;
        color: ${clrs.dark};
        @media (max-width: ${brks.phone}) {
            height: 50px;
            font-size: 16px;
        }
    }

    .text {
        padding: 16px;
        color: ${clrs.gray};
        @media (max-width: ${brks.phone}) {
            font-size: 12px;
        }
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
`;

export const BigFlex = styled(Flex)`
    margin-top: 50px;
    margin-bottom: -130px;
    @media (max-width: ${brks.tablet}) {
        margin-bottom: 0;
    }
`;

export const JoinWrapper = styled.div`
    max-width: ${brks.desktop};
    margin: 0 auto 60px;
    position: relative;
    background-color: ${clrs.white};
    height: 260px;
    box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.08), 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    z-index: 9;
    display: flex;

    @media (max-width: ${brks.tablet}) {
        font-size: 14px;
        padding: 0 16px;
        box-shadow: none;
        border-radius: 0;
        display: block;
        height: auto;
    }

    .cell {
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        &:first-child {
            border-right: 1px solid ${clrs.border};
        }

        h3 {
            margin: 36px auto 0;
            font-size: 24px;
            text-align: center;
            font-weight: 600;
            color: ${clrs.dark};
            @media (max-width: ${brks.tablet}) {
                font-size: 20px;
            }
        }

        p {
            flex: 1;
            margin: 24px auto 36px;
            padding: 0 36px;
            font-weight: 300;
            color: ${clrs.dark};
            text-align: center;
            @media (max-width: ${brks.tablet}) {
                font-size: 14px;
                padding: 0 16px;
            }
        }

        @media (max-width: ${brks.tablet}) {
            flex-basis: 100%;
            &:first-child {
                border-right: 0;
                padding-bottom: 50px;
                border-bottom: 1px solid ${clrs.border};
            }
        }

        .btn {
            ${button}
            color: ${clrs.primary};
            border-color: ${clrs.primary};
            margin-bottom: 36px;
            @media (max-width: ${brks.tablet}) {
                margin-bottom: 0;
            }

            &:hover,
            &:active {
                border-color: ${clrs.primary};
            }
        }
    }
`;
