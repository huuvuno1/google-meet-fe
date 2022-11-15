import {
  FacebookFilled,
  ForwardOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Button, Divider, Typography } from 'antd';
import GoogleLoginButton from 'app/components/GoogleLoginButton';
import classNames from 'classnames/bind';
import configs from 'configs';
import FacebookLogin from 'react-facebook-login';
import { useTranslation } from 'react-i18next';
import LoginGithub from 'react-login-github';
import { Link } from 'react-router-dom';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);
const { Title } = Typography;

export function Login() {
  const { t } = useTranslation();
  const responseFacebook = (response: any) => {
    console.log(response);
  };

  return (
    <>
      <div className="flex flex-col items-center h-remaining justify-center">
        <Title level={1} className={cx('mt-0', 'title', 'pb-10')}>
          {t('loginPage.title')}
        </Title>
        <FacebookLogin
          appId={configs.FACEBOOK_APP_ID}
          fields="name,email,picture"
          onClick={() => console.log('clicked')}
          callback={responseFacebook}
          icon={<FacebookFilled className="mr-4" />}
          cssClass={cx('bg-blue-800', 'btn-auth')}
          textButton={t('loginPage.facebook')}
        />
        <GoogleOAuthProvider clientId={configs.GOOGLE_CLIENT_ID}>
          <GoogleLoginButton
            className={cx('btn-auth')}
            buttonText={t('loginPage.google')}
          />
        </GoogleOAuthProvider>
        <div className={cx('github-login', 'btn-auth')}>
          <GithubOutlined className="mr-4" />
          <LoginGithub
            clientId={configs.GITHUB_CLIENT_ID}
            onSuccess={(response: any) => console.log(response)}
            onFailure={(response: any) => console.log(response)}
            scope={'user'}
            buttonText={t('loginPage.github')}
          />
        </div>
        <Link to={'/'}>
          <Button
            size="large"
            className={cx('!rounded-lg', 'btn-back')}
            icon={<ForwardOutlined />}
          >
            {t('backToHome')}
          </Button>
        </Link>
        <Divider />
        <div className="mt-10">
          <Link to={'/about'}>{t('createMeeting.learnMore')}</Link>
          {` ${t('createMeeting.aboutWeb')}`}
        </div>
      </div>
    </>
  );
}
