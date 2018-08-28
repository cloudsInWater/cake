import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';
import './Home.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { inject, observer } = MobxReact;

const menu = (
  <Menu>
    <Menu.Item key="logout">
      <Icon type="logout" /> Logout
    </Menu.Item>
  </Menu>
);

@inject('runtime')
@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };
  }

  handleCollapse = collapsed => {
    this.setState({ collapsed });
  }

  renderSide() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.handleCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="user" /><span>User</span></span>}
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="team" /><span>Team</span></span>}
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }

  renderHeader() {
    return (
      <Header style={{ background: '#fff' }}>
        <Dropdown overlay={menu} placement="bottomRight">
          <div className="account">
            <span>🍰</span>
            <span className="account-text">Administrator</span>
          </div>
        </Dropdown>
      </Header>
    );
  }

  renderContent() {
    return (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          Bill is a cat...
        </div>
      </Content>
    );
  }

  renderFooter() {
    return (
      <Footer style={{ textAlign: 'center' }}>
        🍰 egg.js + react technology stack = cake
      </Footer>
    );
  }

  render() {
    return (
      <div className="page-home">
        <Layout style={{ minHeight: '100vh' }}>
          {this.renderSide()}
          <Layout>
            {this.renderHeader()}
            {this.renderContent()}
            {this.renderFooter()}
          </Layout>
        </Layout>
      </div>
    );
  }
}
