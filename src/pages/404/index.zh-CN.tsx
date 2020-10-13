import { Link } from "gatsby";
import React from "react";
import { Wrapper } from ".";
import Layout from "../../components/layout";
import image from "../../images/404.svg";

export default function Index() {
    return (
        <Layout>
            <Wrapper>
                <img src={image} />
                <div className="right">
                    <h1>抱歉，你要访问的页面不存在</h1>
                    <p>可能是链接地址有误，页面已经被移除或隐藏</p>
                    <Link to="/zh-CN/">返回首页</Link>
                </div>
            </Wrapper>
        </Layout>
    );
}
