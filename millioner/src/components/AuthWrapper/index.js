import { Typography } from "antd";



const { Title } = Typography;

const AuthWrapper = ({ title, children }) => {
  return (
    <div>
      <div className="form_container">
        <Title level={3}>{title}</Title>
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;
