import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  fetchSignInMethodsForEmail,
  sendEmailVerification,
} from '@firebase/auth';
import { collection, doc, setDoc } from '@firebase/firestore';
import { auth, db, firebaseTimestamp } from '@/lib/firebase';
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
  onSignUp?: () => void;
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
    onSignUp,
  } = props;

  return (
    <div className={className}>
      <h2 className={'title'}>アカウント登録</h2>
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
        label="パスワード（半角英数字・6文字以上）"
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
        <RegisterButton label="アカウントを登録する" onClick={onSignUp} />
      </div>
      <Spacer height={16} />
      <div className={'center'}>
        <Link href="/SignIn">
          <a>アカウントをお持ちの方はこちら</a>
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

  const router = useRouter();

  const onSignUp = async () => {
    // TODO: ちゃんとしたバリデーションを後で実装する
    if (
      username === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      alert('必須項目が未入力です。');
      return false;
    }

    if (password !== confirmPassword) {
      alert('パスワードが一致しません。');
      return false;
    }

    try {
      const providers = await fetchSignInMethodsForEmail(auth, email);

      if (
        providers.findIndex(
          (pw) => pw === EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD
        ) !== -1
      ) {
        alert(
          'メールアドレスが既に登録されています。サインインを続行してください。'
        );

        router.push('/SignIn');
        return false;
      } else {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = result.user;

        if (user) {
          const uid = user.uid;
          const timestamp = firebaseTimestamp;
          const userRef = collection(db, 'user');

          setDoc(doc(userRef, uid), {
            created_at: timestamp,
            email: email,
            role: 'customer',
            uid: uid,
            updated_at: timestamp,
            username: username,
          });

          await sendEmailVerification(user);
          alert(
            'アドレス確認用のメールを送信しました。URL をクリックして本登録を完了させてください。'
          );

          router.push('/');
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        alert('アカウント登録に失敗しました。もう一度お試しください。');
        console.error(error.message);
      }
    }
  };

  const containerProps = {
    username,
    email,
    password,
    confirmPassword,
    inputUsername,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
    onSignUp,
  };

  return <StyledComponent {...{ ...containerProps }} />;
};

export default Container;
