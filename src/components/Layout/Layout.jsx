import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
// import { HomePage } from 'pages/HomePage';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Please Wait</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
