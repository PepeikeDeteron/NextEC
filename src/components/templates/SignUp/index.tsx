import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import RegisterButton from '@/components/atoms/RegisterButton';
import Spacer from '@/components/atoms/Spacer';
import TextField from '@/components/atoms/TextField';

type ContainerProps = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  inputUsername?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  inputEmail?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  inputPassword?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  inputConfirmPassword?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const {
    className,
    username,
    email,
    password,
    confirmPassword,
    inputUsername,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
  } = props;

  return (
    <div className={className}>
      <h1 className={'title'}>アカウント登録</h1>
      <TextField
        label="ユーザー名"
        type="text"
        value={username}
        onChange={inputUsername}
      />
      <TextField
        label="メールアドレス"
        type="email"
        value={email}
        onChange={inputEmail}
      />
      <TextField
        label="パスワード"
        type="password"
        value={password}
        onChange={inputPassword}
      />
      <TextField
        label="パスワード（確認）"
        type="password"
        value={confirmPassword}
        onChange={inputConfirmPassword}
      />
      <Spacer height={32} />
      <div className={'center'}>
        <RegisterButton
          label="アカウントを登録する"
          color="primary"
          onClick={onClickTest}
        />
      </div>
    </div>
  );
};

const StyledComponent = styled(Component)`
  max-width: 100vw;
  width: 560px;
  height: auto;
  margin: 0 auto;
  padding: 5rem;

  & .center {
    margin: 0 auto;
    text-align: center;
  }

  & .title {
    font-size: 2rem;
    color: #1565c0;
    margin: 2rem auto 0 auto;
    text-align: center;
  }
`;

// ボタンコンポーネントの再レンダリング防止用の即時関数
const onClickTest = () => console.log('clicked');

const Container: React.VFC<ContainerProps> = (props) => {
  const [username, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const inputUsername = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value);
    },
    [setUserName]
  );

  const inputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const inputConfirmPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.target.value);
    },
    [setConfirmPassword]
  );

  const containerProps = {
    username,
    email,
    password,
    confirmPassword,
    inputUsername,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
  };

  return <StyledComponent {...containerProps}>{props}</StyledComponent>;
};

export default Container;
