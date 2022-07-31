import { Header } from 'components/Header/Header';
// import { HomePage } from 'pages/HomePage';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
