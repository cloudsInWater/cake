import { Form, Icon, Input, Button } from 'antd';
import './Login.less';

const FormItem = Form.Item;
const { inject, observer } = MobxReact;

@inject('runtime')
@observer
export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  renderLogin() {
    return (
      <Form className="login-form">
        <FormItem>
          <Input prefix={<Icon type="user" />} placeholder="Username" />
        </FormItem>
        <FormItem>
          <Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />
        </FormItem>
        <FormItem>
          <Button type="primary" className="login-form-button">Log in</Button>
        </FormItem>
      </Form>
    );
  }

  render() {
    return (
      <div className="page-login">
        <h2 className="login-title">🍰 Cake Boilerplate</h2>
        <p className="login-desc">egg.js + react technology stack = cake</p>
        {this.renderLogin()}
      </div>
    );
  }
}
