import { Menu,Layout,theme } from "antd";
import Sider from "antd/es/layout/Sider";
import content from "../../utils/content";
import Header from "../Header";
import Content from "../Content";
import Footer from "../Footer";
import { NavLink, } from "react-router";




const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};


const AllPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const listSidebar = content.map((item, index) => ({
    key: String(index + 1),
    label: (
      <NavLink to={item.path} key={item.path}>
        {item.title}
      </NavLink>
    ),
  }));



  return (
    <>

    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical">
          <Menu
            theme="dark"
            mode="vertical"
            defaultSelectedKeys={["04"]}
            items={listSidebar}
          />
        </div>
      </Sider>
      <Layout>
      <Header style={{  background: colorBgContainer }} />
      <Content
        style={{ margin: "24px 16px 0", overflow: "initial" }}
        colorBgContainer={colorBgContainer}
        borderRadiusLG={borderRadiusLG}
      />
      
          
      <Footer style={{ padding: 24, textAlign: "center" }} />
      </Layout>
      </Layout>

    </>
  );
};

export default AllPage;
