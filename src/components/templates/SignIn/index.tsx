import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import RegisterButton from '@/components/atoms/RegisterButton';
import Spacer from '@/components/atoms/Spacer';
import TextField from '@/components/atoms/TextField';

type ContainerProps = {
  email?: string;
  password?: string;
  inputEmail?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  inputPassword?: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { className, email, password, inputEmail, inputPassword } = props;

  return (
    <div className={className}>
      <h2 className={'title'}>サインイン</h2>
      <TextField
        label="メールアドレス"
        type="email"
        value={email}
        onChange={inputEmail}
      />
      <TextField
        label="パスワード（半角英数字・6文字以上）"
        type="password"
        value={password}
        onChange={inputPassword}
      />
      <Spacer height={32} />
      <div className={'center'}>
        <RegisterButton
          label="サインイン"
          color="primary"
          onClick={() => console.log('sign in')}
        />
      </div>
      <Link href="/SignUp">
        <a>アカウント登録はこちら</a>
      </Link>
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

const Container: React.VFC<ContainerProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

  const containerProps = {
    email,
    password,
    inputEmail,
    inputPassword,
  };

  return <StyledComponent {...{ ...containerProps }} />;
};

export default Container;
