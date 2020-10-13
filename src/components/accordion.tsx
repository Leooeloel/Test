import classNames from "classnames";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import expand_more from "../images/expand_more.svg";
import { brks, clrs } from "./common";

interface AccordionProps {
    active?: boolean;
    title: string;
    subtitle?: string;
    content?: string;
    onClick: (active: boolean) => void;
}

const Wrapper = styled.section`
    max-width: ${brks.desktop};
    margin: 24px auto;
    border-radius: 12px;
    box-shadow: 0px 16px 24px 0px rgba(0, 0, 0, 0.08), 0px 4px 12px 0px rgba(0, 0, 0, 0.08);
    @media (max-width: ${brks.tablet}) {
        margin: 8px auto;
        border-radius: 4px;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.08);
    }

    hr {
        max-width: ${brks.desktop};
        margin: 0 36px;
        display: block;
        border: 0;
        border-bottom: 1px solid transparent;
        transition: 200ms;
        &.active {
            border-bottom: 1px solid #dbe1ea;
        }
        @media (max-width: ${brks.tablet}) {
            margin: 0 16px;
        }
    }
`;

const TitleWrapper = styled.h3`
    margin: 0;
    padding: 36px;
    margin-bottom: -1px;
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    @media (max-width: ${brks.tablet}) {
        padding: 8px 16px;
    }
`;

const Title = styled.div`
    flex: 1;
    margin: 0;
    font-size: 20px;
    font-weight: normal;
    color: ${clrs.dark};
    @media (max-width: ${brks.tablet}) {
        font-size: 14px;
    }
`;

const Subtitle = styled.span`
    font-size: 20px;
    font-weight: normal;
    color: ${clrs.gray};
    @media (max-width: ${brks.tablet}) {
        font-size: 14px;
    }
`;

const ContentWrapper = styled.div`
    max-height: 0;
    overflow: hidden;
    transition: max-height 200ms ease-out;
`;

const Content = styled.div`
    margin: 0;
    font-size: 14px;
    font-weight: 300;
    color: ${clrs.dark};
    padding: 18px 36px 36px;
    white-space: pre-wrap;
    @media (max-width: ${brks.tablet}) {
        padding: 8px 16px 16px;
        font-size: 12px;
    }
`;

const Icon = styled.i`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    margin-left: 12px;
    img {
        width: 100%;
        height: auto;
        user-select: none;
        transition: transform 200ms;
    }
    @media (max-width: ${brks.tablet}) {
        width: 16px;
        height: 16px;
    }
    &.active {
        img {
            transform: rotate(180deg);
        }
    }
`;

const Accordion: React.FC<AccordionProps> = ({
    active = false,
    onClick,
    title,
    subtitle,
    content,
    children,
}) => {
    const contentRef = useRef<HTMLParagraphElement>(null);
    const calcHeight = () => {
        if (!active) return 0;
        return contentRef.current?.scrollHeight ?? 0;
    };

    return (
        <Wrapper>
            <TitleWrapper className={classNames({ active })} onClick={() => onClick(active)}>
                <Title>{title}</Title>
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                <Icon className={classNames({ active })}>
                    <img src={expand_more} alt="expand" />
                </Icon>
            </TitleWrapper>
            <hr className={classNames({ active })} />
            <ContentWrapper ref={contentRef} style={{ maxHeight: calcHeight() }}>
                <Content>{content ? content : children}</Content>
            </ContentWrapper>
        </Wrapper>
    );
};

export default Accordion;
