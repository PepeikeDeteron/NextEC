import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { collection, doc, getDoc } from '@firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { userProps } from '@/models/types';
import { signIn } from '@/modules/user/userSlice';
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
  onSignIn?: () => void;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { className, email, password, inputEmail, inputPassword, onSignIn } =
    props;

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
        <RegisterButton label="サインイン" color="primary" onClick={onSignIn} />
      </div>
      <Spacer height={16} />
      <div className={'center'}>
        <Link href="/SignUp">
          <a>アカウント登録はこちら</a>
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

  const dispatch = useDispatch();
  const router = useRouter();

  const onSignIn = async () => {
    // TODO: ちゃんとしたバリデーションを後で実装する
    if (email === '' || password === '') {
      alert('必須項目が未入力です。');
      return false;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;

      if (!user.emailVerified) {
        alert(
          'メールアドレスの認証が完了していません。送信されたメールの URL をクリックして本登録を完了させてください。'
        );
        return false;
      }

      if (user) {
        const uid = user.uid;
        const userRef = collection(db, 'user');
        const userSnap = await getDoc(doc(userRef, uid));
        const userData = userSnap.data() as userProps;

        dispatch(
          signIn({
            isSignedIn: true,
            role: userData.role,
            uid: uid,
            username: userData.username,
          })
        );

        router.push('/');
      }
    } catch (error) {
      alert(
        'ログインに失敗しました。メールアドレスやパスワードが合っているか確認してください。'
      );
      return error;
    }
  };

  const containerProps = {
    email,
    password,
    inputEmail,
    inputPassword,
    onSignIn,
  };

  return <StyledComponent {...{ ...containerProps }} />;
};

export default Container;
