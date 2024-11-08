import { Typography } from "antd";
import "./index.css";


const { Title } = Typography;

const AuthWrapper = ({ title, children }) => {
  return (
    <div className="auth_wrapper">

      <div className="form_container">
        <Title level={3}>{title}</Title>
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;
