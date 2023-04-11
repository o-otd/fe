import Layout from 'components/Common/Layout';
import Home from 'page/Home';
import Member from 'page/Member';
import Profile from 'page/Profile';
import Register from 'page/Register';
import ResetEmailForm from 'page/ResetEmailForm';
import ResetPassword from 'page/ResetPassword';
import ResetPasswordForm from 'page/ResetPasswordForm';
import Search from 'page/Search';
import SignIn from 'page/SignIn';
import SignUp from 'page/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin/member" element={<Member />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/reset/password" element={<ResetPasswordForm />} />
        <Route path="/signin/register" element={<Register />} />

        <Route element={<Layout />}>
          <Route path="/signin/email" element={<ResetEmailForm />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
