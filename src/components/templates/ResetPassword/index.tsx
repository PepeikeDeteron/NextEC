import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { sendPasswordResetEmail } from '@firebase/auth';
import { auth } from '@/lib/firebase';
import RegisterButton from '@/components/atoms/RegisterButton';
import Spacer from '@/components/atoms/Spacer';
import TextField from '@/components/atoms/TextField';

type ContainerProps = {
  email?: string;
  inputEmail?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onResetPassword?: () => void;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { className, email, inputEmail, onResetPassword } = props;

  return (
    <div className={className}>
      <h2 className={'title'}>パスワードリセット</h2>
      <TextField
        label="メールアドレス"
        type="email"
        value={email}
        onChange={inputEmail}
      />
      <Spacer height={32} />
      <div className={'center'}>
        <RegisterButton label="パスワードリセット" onClick={onResetPassword} />
      </div>
      <Spacer height={16} />
      <div className={'center'}>
        <Link href="/SignIn">
          <a>戻る</a>
        </Link>
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

const Container: React.VFC<ContainerProps> = () => {
  const [email, setEmail] = useState<string>('');

  const inputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const router = useRouter();

  const onResetPassword = async () => {
    try {
      // TODO: ちゃんとしたバリデーションを後で実装する
      if (email === '') {
        alert('必須項目が未入力です。');
        return false;
      } else {
        await sendPasswordResetEmail(auth, email);
        alert('パスワードリセット用のメールを送信しました。');

        router.push('/SignIn');
      }
    } catch (error) {
      alert('登録されていないメールアドレスです。もう一度お試しください。');

      return error;
    }
  };

  const containerProps = {
    email,
    inputEmail,
    onResetPassword,
  };

  return <StyledComponent {...{ ...containerProps }} />;
};

export default Container;
