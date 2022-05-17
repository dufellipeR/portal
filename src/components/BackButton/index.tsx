import { LeftOutlined, LogoutOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { Button } from "./styles";

interface IBackButtonProps {
  to?: string;
  isLogout?: boolean
}

const iconsStyle = {
  fontSize: '32px',
  color: '#134F9D',
}

export const BackButton: React.FC<IBackButtonProps> = ({ to, isLogout = false }) => {
  const navigate = useNavigate()

  const handleGoback = () => {
    if (to) {
      navigate(to)
    } else {
      navigate(-1)
    }
  }

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <>
      {isLogout ? (
        <Button type='button' onClick={handleLogout}>
          <LogoutOutlined style={iconsStyle} />
        </Button>
      ) : (
        <Button type='button' onClick={handleGoback}>
          <LeftOutlined style={iconsStyle} />
        </Button>
      )}
    </>
  )
}
