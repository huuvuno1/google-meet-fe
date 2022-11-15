import { GoogleOutlined } from '@ant-design/icons';
import { useGoogleLogin } from '@react-oauth/google';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  buttonText?: string;
}

export default function GoogleLoginButton(props: Props) {
  const { className, style, buttonText } = props;
  const login = useGoogleLogin({
    onSuccess: response => {
      console.log(response);
    },
  });
  return (
    <button
      onClick={() => login()}
      className={`bg-red-600 text-white flex items-center ${className}`}
      style={style}
    >
      <GoogleOutlined className="mr-4" />
      <span>{buttonText || 'Login with Google'}</span>
    </button>
  );
}
