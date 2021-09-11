import React from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { signOut as authSignOut } from '@firebase/auth';
import { auth } from '@/lib/firebase';
import { signOut } from '@/modules/user/userSlice';
import RegisterButton from '@/components/atoms/RegisterButton';
import Spacer from '@/components/atoms/Spacer';

type ContainerProps = {
  onSignOut?: () => void;
};

type Props = {
  className?: string;
} & ContainerProps;

const Component: React.VFC<Props> = (props) => {
  const { onSignOut } = props;
  return (
    <>
      <Spacer height={32} />
      <div className={'center'}>
        <RegisterButton
          label="サインアウト"
          color="primary"
          onClick={onSignOut}
        />
      </div>
    </>
  );
};

const StyledComponent = styled(Component)`
  & .center {
    margin: 0 auto;
    text-align: center;
  }
`;

const Container: React.VFC<ContainerProps> = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onSignOut = async () => {
    authSignOut(auth);
    dispatch(signOut());

    router.push('/SignIn');
  };

  const containerProps = {
    onSignOut,
  };

  return <StyledComponent {...{ ...containerProps }} />;
};

export default Container;
