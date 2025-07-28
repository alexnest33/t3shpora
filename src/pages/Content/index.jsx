import { Outlet } from "react-router";

const Content = ({ borderRadiusLG, colorBgContainer }) => {
  return (
    <div
      style={{
        padding: 24,
        textAlign: "left",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
