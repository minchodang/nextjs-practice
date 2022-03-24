import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'semantic-ui-react';

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  function checkLogin() {
    axios.get('/api/isLogin').then((res) => {
      if (res.status === 200 && res.data.name) {
        //로그인
        setIsLogin(true);
      } else {
        //로그인 안 됨.
        router.push('/login');
      }
    });
  }

  function logout() {
    axios.get('/api/logout').then((res) => {
      if (res.status === 200) {
        router.push('/');
      }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <>
      admin
      {isLogin && <Button onClick={logout}>LogOut</Button>}
    </>
  );
}
