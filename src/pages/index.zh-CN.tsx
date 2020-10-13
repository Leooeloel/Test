import classNames from "classnames";
import { Link } from "gatsby";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    CustomersWrapper,
    FeaturesWrapper,
    FooterWrapper,
    HeaderWrapper,
    IntrosWrapper,
    Nav,
    NextSectionTitle,
    RegisterWrapper,
    SectionDesc,
    SectionTitle,
    VideosWrapper,
} from ".";
import { ExternalLink } from "../components/external-link";
import Layout from "../components/layout";
import agora from "../images/agora.png";
import arrow_down from "../images/arrow_down.svg";
import component_preview from "../images/component_preview.png";
import home_0 from "../images/home_0.svg";
import home_1 from "../images/home_1.svg";
import home_2 from "../images/home_2.svg";
import home_3 from "../images/home_3.svg";
import home_4 from "../images/home_4.svg";
import home_5 from "../images/home_5.svg";
import home_6 from "../images/home_6.svg";
import home_7 from "../images/home_7.svg";
import home_8 from "../images/home_8.svg";
import logo from "../images/logo.png";
import menu_black from "../images/menu_black.svg";
import menu_white from "../images/menu_white.svg";
import netless_black from "../images/netless_black.svg";
import netless_white from "../images/netless_white.svg";
import play_circle_white from "../images/play_circle_white.svg";
import static_0 from "../images/static_0.svg";
import static_1 from "../images/static_1.svg";
import static_2 from "../images/static_2.svg";
import static_3 from "../images/static_3.svg";
import Video0 from "../images/video_0.inline.svg";
import Video1 from "../images/video_1.inline.svg";
import Video2 from "../images/video_2.inline.svg";
import Video3 from "../images/video_3.inline.svg";

const shapes = [home_0, home_1, home_2, home_3, home_4, home_5, home_6, home_7, home_8];

export const Navigation: React.FC<{ invert?: boolean }> = ({ invert = false }) => {
    const [visible, setVisible] = useState(false);

    return (
        <Nav invert={invert}>
            <span className="icon">
                <img src={logo} alt="icon" />
            </span>
            <span className="logo">
                <Link to="/zh-CN/">
                    <img src={invert ? netless_black : netless_white} alt="logo" />
                </Link>
            </span>
            <span className="splitter" />
            <span className="menu" tabIndex={-1} onClick={() => setVisible(!visible)}>
                <img src={invert ? menu_black : menu_white} alt="menu" />
            </span>
            <span className={classNames("links", { visible })}>
                <Link to="/zh-CN/product">产品</Link>
                <ExternalLink to="https://developer.netless.link">文档</ExternalLink>
                <Link to="/zh-CN/price">定价</Link>
                <ExternalLink to="https://github.com/netless-io">GitHub</ExternalLink>
                <ExternalLink to="https://console.netless.link">控制台</ExternalLink>
                {/* <Link to="/en/">English</Link> */}
            </span>
        </Nav>
    );
};

export const Header: React.FC = () => {
    const headerRef = useRef<HTMLElement>(null);
    const scrollDown = () => {
        window.scrollTo({ top: headerRef.current?.scrollHeight });
    };

    const [positions, setPositions] = useState<Array<{ x: number; y: Number }>>([]);
    const randomPosition = () => {
        if (headerRef.current == null) return { x: 0, y: 0 };
        const { clientWidth: w, clientHeight: h } = headerRef.current;
        return { x: Math.random() * w, y: Math.random() * (h - 230) + 90 };
    };

    useEffect(() => {
        if (headerRef.current == null) return;
        setPositions(shapes.map((_) => randomPosition()));
    }, [headerRef]);

    return (
        <HeaderWrapper ref={headerRef}>
            <div className="layer layer--beneath">
                {positions.map(({ x, y }, i) => (
                    <div key={i} className="shape" style={{ left: `${x}px`, top: `${y}px` }}>
                        <img src={shapes[i]} />
                    </div>
                ))}
            </div>
            <div className="layer layer--center">
                <h1 className="title">
                    专业的互动白板 SDK，
                    <wbr />
                    助力在线教育
                </h1>
                <div className="buttons">
                    <ExternalLink to="https://console.netless.link">立即注册</ExternalLink>
                    <ExternalLink to="https://demo-rtc.herewhite.com">在线体验</ExternalLink>
                </div>
            </div>
            <div className="bottom">
                <div className="arrow" onClick={scrollDown}>
                    <img src={arrow_down} alt="scroll_down" />
                </div>
                <div className="stat">
                    <h2 className="number">6,288</h2>
                    <div className="text">教育机构</div>
                </div>
                <div className="splitter" />
                <div className="stat">
                    <h2 className="number">3,456,921</h2>
                    <div className="text">并发峰值</div>
                </div>
                <div className="splitter" />
                <div className="stat">
                    <h2 className="number">321,890</h2>
                    <div className="text">服务时长</div>
                </div>
            </div>
        </HeaderWrapper>
    );
};

interface VideoProps {
    thumb?: string;
    src: string;
    icon: React.ReactElement;
}

const videos: Array<VideoProps> = [
    {
        icon: <Video0 />,
        src: "https://white-sdk.oss-cn-beijing.aliyuncs.com/video/whiteboard_video.mp4",
    },
    {
        icon: <Video1 />,
        src: "https://white-sdk.oss-cn-beijing.aliyuncs.com/video/replay_video.mp4",
    },
    {
        icon: <Video2 />,
        src: "https://white-sdk.oss-cn-beijing.aliyuncs.com/video/dynamic_convert_video.mp4",
    },
    {
        icon: <Video3 />,
        src: "https://white-sdk.oss-cn-beijing.aliyuncs.com/video/static_convert_video.mp4",
    },
];

export const Videos: React.FC = () => {
    const numberOfVideos = videos.length;
    const eachPercent = 100 / numberOfVideos;
    const videoRef = useRef<HTMLVideoElement>(null);
    const [index, setIndex] = useState(0);
    const [cover, setCover] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (videoRef.current == null) return;
        const video = videoRef.current;
        const updateProgress = () => {
            const current = video ? video.currentTime / video.duration : 0;
            setProgress((index + current) * eachPercent);
        };
        const playNext = () => setIndex((i) => (i + 1) % numberOfVideos);
        video.addEventListener("timeupdate", updateProgress);
        video.addEventListener("ended", playNext);
        return () => {
            video.removeEventListener("timeupdate", updateProgress);
            video.removeEventListener("ended", playNext);
        };
    }, [progress, index]);

    const texts = ["互动白板", "录制和回放", "文档转网页", "文档转图片"];

    return (
        <>
            <SectionTitle>完备的产品体系，满足您不同的需求</SectionTitle>
            <VideosWrapper>
                <video
                    src={videos[index].thumb ?? videos[index].src}
                    muted
                    autoPlay
                    ref={videoRef}
                ></video>
                <ExternalLink
                    to={videos[index].src}
                    className={classNames("cover", { active: cover })}
                    onMouseEnter={() => setCover(true)}
                    onMouseLeave={() => setCover(false)}
                >
                    <img src={play_circle_white} alt="play" />
                </ExternalLink>
                <div className="control">
                    <div className="progress" style={{ width: `${progress}%` }} />
                    <div className="buttons">
                        {videos.map(({ icon }, i) => (
                            <div
                                className={classNames("button", { active: index === i })}
                                onClick={() => setIndex(i)}
                                key={i}
                            >
                                <div className="icon">{icon}</div>
                                <div className="text">{texts[i]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </VideosWrapper>
            <SectionDesc>全球互联，满足您双向互动和单向直播订阅的需求</SectionDesc>
        </>
    );
};

const features = [
    { title: "概览", media: component_preview },
    {
        title: "多分页预览",
        media: "https://white-sdk.oss-cn-beijing.aliyuncs.com/video/whiteboard_video.mp4",
    },
    { title: "分页控制", media: "" },
    { title: "文档中心", media: "" },
    { title: "文件上传", media: "" },
    { title: "音视频插件", media: "" },
    { title: "光标工具", media: "" },
    { title: "页面缩放", media: "" },
    { title: "撤销重做", media: "" },
    { title: "工具栏", media: "" },
];

const renderMedia = (media: string) => {
    if (media.endsWith(".png")) {
        return <img src={media} />;
    }
    if (media.endsWith(".mp4")) {
        return <video src={media} muted autoPlay></video>;
    }
    return null;
};

export const Features: React.FC = () => {
    const [index, setIndex] = useState(0);

    return (
        <>
            <NextSectionTitle>特色组件，专为在线教育场景设计</NextSectionTitle>
            <FeaturesWrapper>
                <div className="left">
                    {features.map(({ title, media }, i) => (
                        <div
                            className={classNames("btn", { active: index === i })}
                            onClick={() => setIndex(i)}
                            key={i}
                        >
                            {title}
                        </div>
                    ))}
                </div>
                <div className="right">{renderMedia(features[index].media)}</div>
            </FeaturesWrapper>
        </>
    );
};

const intros = [
    {
        icon: static_0,
        title: "全平台支持，帮您快速构建自己的应用",
        description:
            "互动白板 SDK 全面覆盖 iOS、Android、Web 等主流平台，同时提供完整的配套功能服务。全平台 SDK 支持，帮助各平台开发者快速集成，研发与业务高效联动，让产品迅速到达市场。",
    },
    {
        icon: static_1,
        title: "专业云服务团队，帮您省时、省力、省钱",
        description:
            "系统的开发和维护不是一件简单的事。搭建团队、开发联调、迭代升级以及线上运维等工作，都需要长期投入。让专业的团队来处理这些棘手的问题，用成熟的云服务来加速产品迭代过程，省时、省钱、省力。",
    },
    {
        icon: static_2,
        title: "多节点覆盖，跨区域访问加速",
        description:
            "全球加速 CDN，一套服务部署到多个节点，给不同地域用户带来同样顺畅的产品使用体验。",
    },
    {
        icon: static_3,
        title: "取消月功能费，即用即付，按需动态计费",
        description:
            "一对一小班课， 45 分钟/课，白板使用成本仅需 0.864 元。一对多公开课，  1000 人 45 分钟/课，白板使用成本一个人约 0.2 元。录制与回放、文档转码等服务均为按需动态计费，帮您更省钱。",
    },
];

export const Intros: React.FC = () => {
    return (
        <>
            <IntrosWrapper>
                {intros.map(({ icon, title, description }, i) => (
                    <div className="cell" key={i}>
                        <div className="icon">
                            <img src={icon} />
                        </div>
                        <div className="text">
                            <h1 className="title">{title}</h1>
                            <div className="desc">{description}</div>
                        </div>
                    </div>
                ))}
            </IntrosWrapper>
        </>
    );
};

export interface Card {
    logo: string;
    head: string;
    name: string;
    job: string;
    text: string;
}

const customers: Card[] = Array(8).fill({
    logo: agora,
    head: "https://via.placeholder.com/64x64",
    name: "陶思明",
    job: "声网 CTO",
    text:
        "系统的开发和维护不是一件简单的事。搭建团队、开发联调、迭代升级以及线上运维等工作，都需要长期投入。",
}) as Card[];

export const Customers: React.FC = () => {
    const halfCardsNumber = (customers.length >> 1) - 1;

    type SwiperInstance = Parameters<Exclude<Swiper["onSwiper"], undefined>>[0];

    const swiperRef = useRef<SwiperInstance | null>(null);

    const [width, setWidth] = useState(1280);

    const handleClick = (i: number) => {
        if (swiperRef.current == null) return;
        const swiper = swiperRef.current;
        // Swiper loop cause there be (n - 1) + n + (n - 1) elmenets:
        // [dup1, dup2, dup3..., dup[n-1], 0, 1, 2, 3..., n - 1, dup0, dup1, dup2..., dup[n-2]]
        if (i < halfCardsNumber + 2) {
            swiper.slideTo(i + customers.length - 1);
        } else {
            swiper.slideTo(i - 1);
        }
    };

    const swiperRange = 1024;

    const onSlideChange = () => {
        if (swiperRef.current == null) return;
        const swiper = swiperRef.current;
        const a = swiper.slides[swiper.activeIndex];
        const isNoCards = window.innerWidth < swiperRange;
        for (const e of Array.from(swiper.slides)) {
            const i = swiper.slides.indexOf(e);
            const distance = Math.abs(i - swiper.activeIndex);
            const card = e.querySelector(".card") as HTMLDivElement;
            const zoom = isNoCards ? 1 : 0.8 ** distance;
            card.style.transform = `translateX(-50%) scale(${zoom}, ${zoom})`;
            card.style.zIndex = String(100 - distance);
        }
    };

    useEffect(() => {
        if (window.innerWidth) setWidth(window.innerWidth);
        const updateWindowDimensions = () => {
            setWidth(window.innerWidth);
            onSlideChange();
        };
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions);
    }, []);

    const onSwiper = (swiper: SwiperInstance) => {
        swiperRef.current = swiper;
        onSlideChange();
    };

    return (
        <>
            <SectionTitle>Netless 累计为超过 2,000 家教育机构提供服务</SectionTitle>
            <CustomersWrapper>
                <div className="logos">
                    {customers.map(({ logo }, i) => (
                        <div
                            className="logo"
                            style={{ order: (i + halfCardsNumber) % customers.length }}
                            key={i}
                            onClick={() => handleClick(i)}
                        >
                            <img src={logo} />
                        </div>
                    ))}
                </div>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={width < swiperRange ? (width < 400 ? 1 : 2) : 7}
                    onSwiper={onSwiper}
                    onSlideChange={onSlideChange}
                    loop
                    centeredSlides
                    slideToClickedSlide
                >
                    {customers.map(({ head, name, job, text }, i) => (
                        <SwiperSlide key={i}>
                            <div className="card">
                                <div className="head">
                                    <img src={head} />
                                </div>
                                <div className="name">{name}</div>
                                <div className="job">{job}</div>
                                <div className="text">{text}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="mask" />
            </CustomersWrapper>
        </>
    );
};

export const Register: React.FC = () => {
    return (
        <RegisterWrapper>
            <h1 className="title">仅需一步，免费领取 10,000 分钟互动时长</h1>
            <div className="input-container">
                <div className="input-wrapper">
                    <input type="email" placeholder="请输入您的邮箱" />
                    <button>立即开始</button>
                </div>
            </div>
        </RegisterWrapper>
    );
};

const SmartLink: React.FC<{ to: string }> = ({ to, children }) => {
    if (to.startsWith("https://")) {
        return <ExternalLink to={to}>{children}</ExternalLink>;
    } else {
        return <Link to={to}>{children}</Link>;
    }
};

const BeiAnLink: React.FC<{ id: string }> = ({ id }) => {
    return (
        <ExternalLink to={`http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${id}`}>
            {id}
        </ExternalLink>
    );
};

const footer = [
    {
        title: "产品",
        children: [
            { title: "互动白板", to: "/zh-CN/product/#whiteboard" },
            { title: "白板录制", to: "/zh-CN/product/#replay" },
            { title: "文档转网页", to: "/zh-CN/product/#dynamic" },
            { title: "文档转图片", to: "/zh-CN/product/#static" },
        ],
    },
    {
        title: "开发者",
        children: [
            { title: "demo 下载", to: "/" },
            { title: "开发者中心", to: "/" },
            { title: "开源项目", to: "/" },
            { title: "提交工单", to: "/" },
            { title: "社区", to: "/" },
        ],
    },
    {
        title: "公司",
        children: [
            { title: "关于我们", to: "/zh-CN/about" },
            { title: "加入我们", to: "/zh-CN/join" },
            { title: "联系我们", to: "/zh-CN/contact" },
            { title: "隐私和条款", to: "/zh-CN/privacy" },
        ],
    },
];

export const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <div className="columns">
                <div className="col">
                    <div className="logo">
                        <img src={netless_black} alt="logo" />
                    </div>
                    <Link className="btn" to={location.pathname.replace("/zh-CN/", "/en/")}>
                        English
                    </Link>
                </div>
                {footer.map((cell, i) => (
                    <div className="col" key={i}>
                        <div className="title">{cell.title}</div>
                        {cell.children.map(({ title, to }, i) => (
                            <div className="link" key={i}>
                                <SmartLink to={to}>{title}</SmartLink>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="beian">
                © 2020 Netless 沪 ICP 备 19010127 号 - 2 沪公网安备{" "}
                <BeiAnLink id="31011002004621" /> 号
            </div>
        </FooterWrapper>
    );
};

export default function Index() {
    return (
        <Layout>
            <Navigation />
            <Header />
            <Videos />
            <Features />
            <Intros />
            <Customers />
            <Register />
            <Footer />
        </Layout>
    );
}
