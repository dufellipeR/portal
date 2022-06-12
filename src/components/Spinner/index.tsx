import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

interface ISpinnerProps {
  size?: number
}

const Spinner: React.FC<ISpinnerProps> = ( { size=38}) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size }} spin />;
  return (
    <Spin indicator={antIcon} />
  )
}

export default Spinner;
