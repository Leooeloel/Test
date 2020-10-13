import { Link } from "gatsby";
import React, { useEffect, useRef } from "react";
import { start } from "repl";
import {
    BigFlex,
    Flex,
    HistoryWrapper,
    JoinWrapper,
    SectionDesc,
    SectionTitle,
    Stats,
    TitleWrapper,
} from ".";
import Layout from "../../components/layout";
import { Footer, Navigation } from "../index.zh-CN";

const Header: React.FC = () => {
    return (
        <>
            <TitleWrapper>
                <h1>Netless 是一家以技术和产品驱动的科技公司</h1>
                <p>
                    目前致力于为在线教育企业提供在线课堂的技术解决方案。主打产品是在线互动白板，这是一个三端（Web、iOS、Android）皆通的技术方案
                </p>
            </TitleWrapper>
            <Flex>
                <div className="sample">
                    <img src="https://via.placeholder.com/720x320" />
                </div>
                <div className="desc-wrapper">
                    <div className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nisi,
                        explicabo assumenda earum recusandae omnis, eveniet. Assumenda voluptatum
                        error veritatis, eius exercitationem officia asperiores odio cumque iste
                        vero quae minus?
                    </div>
                </div>
            </Flex>
            <Stats>
                <div className="col">
                    <div className="number">6,288</div>
                    <div className="text">教育机构</div>
                </div>
                <div className="col">
                    <div className="number">3,456,921</div>
                    <div className="text">并发峰值</div>
                </div>
                <div className="col">
                    <div className="number">321,890</div>
                    <div className="text">服务时长</div>
                </div>
            </Stats>
        </>
    );
};

const Goal: React.FC = () => {
    return (
        <>
            <SectionTitle>公司的使命</SectionTitle>
            <SectionDesc>争取早日实现共产主义</SectionDesc>
            <SectionTitle>公司的愿景</SectionTitle>
            <SectionDesc>协助更多公司和团队实现业务目标</SectionDesc>
        </>
    );
};

const WidePicture: React.FC = () => {
    return (
        <Flex>
            <div className="sample">
                <img src="https://via.placeholder.com/1440x320" />
            </div>
        </Flex>
    );
};

const History: React.FC = () => {
    const historyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (historyRef.current == null) return;
        const slider = historyRef.current;

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            slider.classList.add("active");
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const onMouseLeaveAndUp = (_e: MouseEvent) => {
            isDown = false;
            slider.classList.remove("active");
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX;
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener("mousedown", onMouseDown);
        slider.addEventListener("mouseleave", onMouseLeaveAndUp);
        slider.addEventListener("mouseup", onMouseLeaveAndUp);
        slider.addEventListener("mousemove", onMouseMove);

        return () => {
            slider.removeEventListener("mousedown", onMouseDown);
            slider.removeEventListener("mouseleave", onMouseLeaveAndUp);
            slider.removeEventListener("mouseup", onMouseLeaveAndUp);
            slider.removeEventListener("mousemove", onMouseMove);
        };
    }, [historyRef]);

    return (
        <>
            <SectionTitle>发展历程</SectionTitle>
            <HistoryWrapper>
                <div className="wrapper" ref={historyRef}>
                    <div className="cell">
                        <div className="date">2018.4.5</div>
                        <div className="text">获得启明创投、经纬中国千万美元 B 轮投资</div>
                    </div>
                    <div className="cell">
                        <div className="date">2018.4.5</div>
                        <div className="text">获得启明创投、经纬中国千万美元 B 轮投资</div>
                    </div>
                    <div className="cell">
                        <div className="date">2018.4.5</div>
                        <div className="text">获得启明创投、经纬中国千万美元 B 轮投资</div>
                    </div>
                    <div className="cell">
                        <div className="date">2018.4.5</div>
                        <div className="text">获得启明创投、经纬中国千万美元 B 轮投资</div>
                    </div>
                    <div className="cell">
                        <div className="date">2018.4.5</div>
                        <div className="text">获得启明创投、经纬中国千万美元 B 轮投资</div>
                    </div>
                </div>
                <div className="mask" />
            </HistoryWrapper>
        </>
    );
};

const Team: React.FC = () => {
    return (
        <>
            <SectionTitle>我们团队</SectionTitle>
            <BigFlex>
                <div className="sample">
                    <img src="https://via.placeholder.com/1440x640" />
                </div>
            </BigFlex>
            <JoinWrapper>
                <div className="cell">
                    <h3>加入我们</h3>
                    <p>如果你才思敏捷、富有激情、认真严谨、具有理想主义者的气质，请联系我们</p>
                    <Link className="btn" to="/zh-CN/join">
                        查看岗位
                    </Link>
                </div>
                <div className="cell">
                    <h3>联系我们</h3>
                    <p>你的反馈对我们来说很重要，我们非常希望听到你的建议或想法</p>
                    <Link className="btn" to="/zh-CN/contact">
                        联系我们
                    </Link>
                </div>
            </JoinWrapper>
        </>
    );
};

export default function Index() {
    return (
        <Layout>
            <Navigation invert />
            <Header />
            <Goal />
            <WidePicture />
            <History />
            <Team />
            <Footer />
        </Layout>
    );
}
