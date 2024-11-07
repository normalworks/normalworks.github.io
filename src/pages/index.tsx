import React from "react";
import cover from "~/assets/cover.svg";
import "./styles/index.css";

// 定义团队主页组件
const IndexPage: React.FC = () => {
  return (
    <img src={cover} alt="cover" className="w-full max-h-[calc(100vh-100px)]" />
  );
};

export default IndexPage;
