import React from "react";
import { Helmet } from "react-helmet";
import "../global.scss";
import logo from "../images/logo.png";
import logo_16 from "../images/logo_16.png";
import logo_32 from "../images/logo_32.png";

const Layout: React.FC<{ title?: string }> = ({ title, children }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="baidu-site-verification" content="s7JldPxDeL" />
                <meta
                    name="keywords"
                    content="netless, 实时, 协作, 在线教育, 会议, 设计, 白板云服务 | Real-time, collaboration, online education, conference, design, whiteboard cloud service"
                />
                <meta
                    name="description"
                    content="White 全新的知识链接体验, 画草图、幻灯片演说、授课、语音、视频、编写文档、远程协作、头脑风暴、审查设计、举行会议…… 尽在 White。 | White's new knowledge link experience, Draw, Sketch, Speak, Teach, PPT, Documents, Collaborate, Brainstorm, Review design, Meeting... All of these White integrated, with any device, all here in one place."
                />
                <meta name="author" content="Netless" />
                <meta name="robots" content="index,follow" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"
                />
                <meta content="yes" name="apple-mobile-web-app-capable" />
                <meta content="yes" name="apple-touch-fullscreen" />
                <meta content="telephone=no,email=no" name="format-detection" />
                <title>{title ?? "Netless"}</title>
                <link rel="icon" type="image/png" sizes="16x16" href={logo_16} />
                <link rel="icon" type="image/png" sizes="32x32" href={logo_32} />
                <link rel="icon" type="image/png" sizes="320x320" href={logo} />
            </Helmet>
            {children}
        </>
    );
};

export default Layout;
