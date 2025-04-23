import { Outlet } from 'react-router-dom';
import HeaderAuth from '../components/HeaderAuth';


const AuthLayout = () => {
  return (
    <>
      <HeaderAuth/>
      <main>
        <Outlet />  
      </main>
    </>
  )
}

export default AuthLayout