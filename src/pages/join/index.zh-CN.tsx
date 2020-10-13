import classNames from "classnames";
import { Link } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import { CardsWrapper, Grid, HeaderWrapper } from ".";
import { NextSectionTitle } from "..";
import Accordion from "../../components/accordion";
import Layout from "../../components/layout";
import { Flex, SectionDesc, SectionTitle } from "../about";
import { Footer, Navigation } from "../index.zh-CN";
import { Section } from "../price";
import { StickyWrapper } from "../product";

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <div className="wrapper">
                <h1>加入 Netless，发现你的价值</h1>
                <p>如果你正在寻找职业生涯的机遇，不妨来 Netless 看看</p>
            </div>
        </HeaderWrapper>
    );
};

const anchors = ["job", "info", "work"];
const sectionNames = ["热招职位", "了解 Netless", "人在 Netless"];

const Sticky: React.FC<{
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}> = ({ index, setIndex }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (wrapperRef.current == null) return;
        const wrapper = wrapperRef.current;
        const indexFromHash = anchors.indexOf(location.hash.substring(1));
        if (indexFromHash >= 0) setIndex(indexFromHash);
    }, []);

    return (
        <StickyWrapper>
            <div className="container" ref={wrapperRef}>
                {anchors.map((id, i) => (
                    <Link
                        to={`#${id}`}
                        className={classNames({ active: index === i })}
                        onClick={() => setIndex(i)}
                        key={id}
                    >
                        {sectionNames[i]}
                    </Link>
                ))}
            </div>
        </StickyWrapper>
    );
};

const job = [
    {
        title: "前端开发专家",
        subtitle: "杭州",
        content: `岗位描述：
开发 Netless Web 相关功能
前端功能梳理、开发以及撰写单元测试
需求分析，提供的解决方案及设计，辅导/协助团队成员定位问题
对前端架构进行优化，绘制架构图
对技术有强烈的进取心，主观能动性，优秀的分析问题和解决问题的能力

岗位要求：
熟练使用 TypeScript 和 JavaScript （ES6+）
至少掌握一门现代前端框架如 React / Vue / Angular 并熟悉其中的运作原理
在项目中使用过 Redux / Vuex 等前端数据流框架
熟练使用 Git 或类似的代码版本管理工具
良好的编程风格
熟悉模块化、前端编译和构建工具（包括但不限于 gulp / webpack）
熟悉HTTP的基本工作原理以及常用Web开发调试工具
善于交流`,
    },
    {
        title: "前端开发专家",
        subtitle: "杭州",
        content: `岗位描述：
开发 Netless Web 相关功能
前端功能梳理、开发以及撰写单元测试
需求分析，提供的解决方案及设计，辅导/协助团队成员定位问题
对前端架构进行优化，绘制架构图
对技术有强烈的进取心，主观能动性，优秀的分析问题和解决问题的能力

岗位要求：
熟练使用 TypeScript 和 JavaScript （ES6+）
至少掌握一门现代前端框架如 React / Vue / Angular 并熟悉其中的运作原理
在项目中使用过 Redux / Vuex 等前端数据流框架
熟练使用 Git 或类似的代码版本管理工具
良好的编程风格
熟悉模块化、前端编译和构建工具（包括但不限于 gulp / webpack）
熟悉HTTP的基本工作原理以及常用Web开发调试工具
善于交流`,
    },
];

const SectionJob: React.FC<{ index: number; multiple?: boolean }> = ({ index, multiple }) => {
    const [faqIndex, setFaqIndex] = useState(-1);
    const [multi, setMulti] = useState<Array<number>>([]);

    return (
        <Section id={`${anchors[0]}-tab`} style={{ display: index === 0 ? "block" : "none" }}>
            {job.map(({ title, subtitle, content }, i) => (
                <Accordion
                    key={i}
                    title={title}
                    subtitle={subtitle}
                    content={content}
                    active={multiple ? multi.includes(i) : faqIndex === i}
                    onClick={(e) => {
                        if (multiple) {
                            if (e) setMulti(multi.filter((j) => j !== i));
                            else setMulti([...multi, i]);
                        } else {
                            if (e) setFaqIndex(-1);
                            else setFaqIndex(i);
                        }
                    }}
                />
            ))}
            <div className="center">
                <Link to="/" className="btn">
                    查看更多
                </Link>
            </div>
        </Section>
    );
};

import join_1 from "../../images/join_1.svg";
const SectionInfo: React.FC<{ index: number }> = ({ index }) => {
    return (
        <Section id={`${anchors[1]}-tab`} style={{ display: index === 1 ? "block" : "none" }}>
            <SectionTitle>公司的使命</SectionTitle>
            <SectionDesc>争取早日实现共产主义</SectionDesc>
            <SectionTitle>公司的愿景</SectionTitle>
            <SectionDesc>协助更多公司和团队实现业务目标</SectionDesc>
            <SectionTitle>价值观</SectionTitle>
            <SectionDesc>协助更多公司和团队实现业务目标</SectionDesc>
        </Section>
    );
};

const SectionWork: React.FC<{ index: number }> = ({ index }) => {
    return (
        <Section id={`${anchors[2]}-tab`} style={{ display: index === 2 ? "block" : "none" }}>
            <NextSectionTitle>公司福利</NextSectionTitle>
            <SectionDesc style={{ marginBottom: 50 }}>
                除了公平公正的上升机会，发挥自我价值的发展空间，Netless
                还能给你很多「实实在在」的待遇
            </SectionDesc>
            <Grid>
                <div className="item">超出当地行业同等岗位的薪资</div>
                <div className="item">超出当地行业同等岗位的薪资</div>
                <div className="item">超出岗位的薪资</div>
                <div className="item">超出当地行业同等岗位的薪资</div>
                <div className="item">超出当地行业同等岗位的薪资</div>
                <div className="item">超出当地行业同等岗位的薪资</div>
            </Grid>
            <Flex>
                <div className="sample">
                    <img src="https://via.placeholder.com/720x320" />
                </div>
                <div className="sample">
                    <img src="https://via.placeholder.com/720x320" />
                </div>
            </Flex>
            <NextSectionTitle>成长体系</NextSectionTitle>
            <CardsWrapper>
                <div className="card">
                    <img src={join_1} />
                    <div className="right">
                        <div className="title">入职指南</div>
                        <div className="text">
                            帮助你在最短的时间内了解公司的内部环境，包括效率工具的使用、内部架构等，帮助你快速融入大家庭
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_1} />
                    <div className="right">
                        <div className="title">入职指南</div>
                        <div className="text">
                            帮助你在最短的时间内了解公司的内部环境，包括效率工具的使用、内部架构等，帮助你快速融入大家庭
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_1} />
                    <div className="right">
                        <div className="title">入职指南</div>
                        <div className="text">
                            帮助你在最短的时间内了解公司的内部环境，包括效率工具的使用、内部架构等，帮助你快速融入大家庭
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_1} />
                    <div className="right">
                        <div className="title">入职指南</div>
                        <div className="text">
                            帮助你在最短的时间内了解公司的内部环境，包括效率工具的使用、内部架构等，帮助你快速融入大家庭
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_1} />
                    <div className="right">
                        <div className="title">入职指南</div>
                        <div className="text">
                            帮助你在最短的时间内了解公司的内部环境，包括效率工具的使用、内部架构等，帮助你快速融入大家庭
                        </div>
                    </div>
                </div>
                <div className="card">
                    <img src={join_1} />
                    <div className="right">
                        <div className="title">入职指南</div>
                        <div className="text">
                            帮助你在最短的时间内了解公司的内部环境，包括效率工具的使用、内部架构等，帮助你快速融入大家庭
                        </div>
                    </div>
                </div>
            </CardsWrapper>
        </Section>
    );
};

export default function Index() {
    const [index, setIndex] = useState(0);

    return (
        <Layout>
            <Navigation invert />
            <Header />
            <Sticky index={index} setIndex={setIndex} />
            <SectionJob index={index} />
            <SectionInfo index={index} />
            <SectionWork index={index} />
            <Footer />
        </Layout>
    );
}
