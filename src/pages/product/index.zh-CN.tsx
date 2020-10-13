import useScrollPosition from "@react-hook/window-scroll";
import classNames from "classnames";
import { Link } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import {
    ButtonWrapper,
    CardWrapper,
    CustomersWrapper,
    Description,
    HeaderWrapper,
    PresentationWrapper,
    SectionTitle,
    Space,
    StickyWrapper,
} from ".";
import { ExternalLink } from "../../components/external-link";
import Layout from "../../components/layout";
import product_1 from "../../images/product_1.svg";
import product_2 from "../../images/product_2.svg";
import product_3 from "../../images/product_3.svg";
import product_4 from "../../images/product_4.svg";
import product_5 from "../../images/product_5.svg";
import product_6 from "../../images/product_6.svg";
import product_7 from "../../images/product_7.svg";
import product_agora from "../../images/product_agora.png";
import whiteboard from "../../images/whiteboard.png";
import { Features, Footer, Navigation } from "../index.zh-CN";

const Header: React.FC = () => (
    <HeaderWrapper>
        <div className="container">
            <div className="wrapper">
                <h1 className="title">互动白板，专为教育场景定制</h1>
                <div className="desc">
                    支持多人实时在线勾划涂鸦、提供全套课堂教具，和文档转码、白板录制、回放等功能，为您提供顺畅的在线教学体验
                </div>
            </div>
            <div className="actions">
                <ExternalLink className="btn" to="https://console.netless.link">
                    立即试用
                </ExternalLink>
                <ExternalLink className="btn" to="https://demo-rtc.herewhite.com">
                    在线体验
                </ExternalLink>
            </div>
        </div>
    </HeaderWrapper>
);

const anchors = ["whiteboard", "replay", "dynamic", "static"];
const sectionNames = ["互动白板", "白板云录制", "文档转网页", "文档转图片"];

const findClosestIndex = (e: number, a: number[]) => {
    let i = 0,
        d = Infinity;
    for (let j in a) {
        const f = a[j];
        const c = Math.abs(e - f);
        if (d > c) {
            d = c;
            i = Number(j);
        }
    }
    return i;
};

const Sticky: React.FC = () => {
    const [index, setIndex] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (wrapperRef.current == null) return;
        const indexFromHash = anchors.indexOf(location.hash.substring(1));
        if (indexFromHash >= 0) setIndex(indexFromHash);
    }, []);

    const scrollY = useScrollPosition(4);
    const sections = Array.from(document.querySelectorAll("h2[id]"));
    const targetIndex = findClosestIndex(
        scrollY,
        sections.map((e) => (e as HTMLElement).offsetTop)
    );
    if (targetIndex !== index) {
        setIndex(targetIndex);
        history.replaceState(null, "", `#${anchors[targetIndex]}`);
    }

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

const Presentation: React.FC = () => {
    return (
        <>
            <SectionTitle>互动白板，适用于多种场景</SectionTitle>
            <Description>
                互动白板可广泛应用于线上语言培训、K12 学科辅导、STEAM
                教育、成人培训等课堂场景，打破线上教学师生信息传递的障碍。教师可演示课件、勾划标注要点，学生可在线同步操作，直观反馈课程掌握情况
            </Description>
            <PresentationWrapper>
                <img src={whiteboard} />
            </PresentationWrapper>
            <Features />
        </>
    );
};

const Card: React.FC<{ src: string; title: string; desc: string }> = ({ src, title, desc }) => {
    return (
        <CardWrapper>
            <img src={src} />
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </CardWrapper>
    );
};

const WhiteBoard: React.FC = () => {
    return (
        <>
            <a id={anchors[0]} className="anchor" />
            <SectionTitle id={`${anchors[0]}-tab`}>互动白板</SectionTitle>
            <Card
                src={product_1}
                title="超低时延，让您的教学体验更顺滑"
                desc="Netless 自研引擎，白板操作延迟低至 100ms，弱网环境下依然流畅，打造全球互联、真正无感知的超强互动体验"
            />
            <Card
                src={product_2}
                title="全平台支持，帮您快速构建自己的应用"
                desc="互动白板 SDK 全面覆盖 iOS、Android、Web 等主流平台，同时提供完整的配套功能服务。全平台 SDK 支持，帮助各平台开发者快速集成，研发与业务高效联动，让产品迅速到达市场"
            />
            <Card
                src={product_3}
                title="自由拓展，按需搭配组合"
                desc="互动白板可与实时音视频、IM 等服务同时使用，您可按需自由组合搭配"
            />
            <ButtonWrapper>
                <Link to="/">立即开始</Link>
            </ButtonWrapper>
        </>
    );
};

const Replay: React.FC = () => {
    return (
        <>
            <a id={anchors[1]} className="anchor" />
            <SectionTitle id={`${anchors[1]}-tab`}>白板云录制</SectionTitle>
            <Card
                src={product_4}
                title="白板云录制，记录课堂精彩瞬间"
                desc="云端录制白板、动态PPT、音视频和自定义事件，实时记录课堂精彩瞬间"
            />
            <Card
                src={product_5}
                title="录播回放，随时随地复习课堂内容"
                desc="白板云录制支持多端回放、前进倒退进度条，轻松呈现课堂全过程，帮助学生随时随地复习课堂内容"
            />
            <Space />
        </>
    );
};

const Dynamic: React.FC = () => {
    return (
        <>
            <a id={anchors[2]} className="anchor" />
            <SectionTitle id={`${anchors[2]}-tab`}>文档转网页，让你的课件动起来</SectionTitle>
            <Card
                src={product_6}
                title="文档转网页，让你的课件动起来"
                desc="支持将 PPTX 转换成网页，相比静态转换，动态转换能保留课件中的动画效果，信息传递更完整、观感更佳"
            />
            <Space />
        </>
    );
};

const Static: React.FC = () => {
    return (
        <>
            <a id={anchors[3]} className="anchor" />
            <SectionTitle id={`${anchors[3]}-tab`}>文档转图片，丰富您的板书素材</SectionTitle>
            <Card
                src={product_7}
                title="文档转图片，丰富您的板书素材"
                desc="静态文档转换，支持将 PPT、PPTX、DOC、DOCX、PDF 等格式文件转换成图片，丰富您的板书素材"
            />
        </>
    );
};

const Customers: React.FC = () => {
    return (
        <>
            <SectionTitle style={{ paddingBottom: 16 }}>我们的客户</SectionTitle>
            <Description>2,000 + 在线教育机构的选择</Description>
            <CustomersWrapper>
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
                <img src={product_agora} alt="agora" />
            </CustomersWrapper>
        </>
    );
};

export default function Index() {
    return (
        <Layout>
            <Navigation />
            <Header />
            <Sticky />
            <Presentation />
            <WhiteBoard />
            <Replay />
            <Dynamic />
            <Static />
            <Customers />
            <Footer />
        </Layout>
    );
}
