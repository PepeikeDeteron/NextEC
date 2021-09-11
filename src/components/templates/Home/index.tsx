import React from 'react';
import Link from 'next/link';

const Home: React.VFC = () => {
  return (
    <>
      <h2>Home</h2>
      <p>ID：</p>
      <p>ユーザ名：</p>

      <br />
      <Link href="/SignIn">
        <button>サインイン（仮）</button>
      </Link>
    </>
  );
};

export default Home;
