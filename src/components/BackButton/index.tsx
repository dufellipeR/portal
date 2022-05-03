import { LeftOutlined, LogoutOutlined } from "@ant-design/icons"
import { useNavigate, useHistory  } from "react-router-dom"
import { Button } from "./styles";

interface IBackButtonProps {
    to?: string;
    isLogout?: boolean
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
    return (
        <>
            {isLogout ? (
                <Button type='button' onClick={() => { navigate('/') }}>
                    <LogoutOutlined style={{ fontSize: '32px', color: '#126877' }} />
                </Button>
            ) : (
                <Button type='button' onClick={handleGoback}>
                    <LeftOutlined style={{ fontSize: '32px', color: '#126877' }} />
                </Button>
            )}

        </>
    )
}