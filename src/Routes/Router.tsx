import Layout from 'components/Common/Layout';
import Activity from 'page/today/Activity';
import Member from 'page/auth/Member';
import Profile from 'page/Profile';
import Register from 'page/auth/Register';
import ResetEmailForm from 'page/auth/ResetEmailForm';
import ResetPassword from 'page/auth/ResetPassword';
import ResetPasswordForm from 'page/auth/ResetPasswordForm';
import Search from 'page/Search';
import SignIn from 'page/auth/SignIn';
import SignUp from 'page/auth/SignUp';
import Temperatures from 'page/today/Temperatures';
import Tpo from 'page/today/Tpo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Today from 'page/today/Today';
import Weekend from 'page/Weekend';
import Confirm from 'page/confirm/Confirm';
import CommentDetail from 'page/confirm/CommentDetail';
import ScrollToTop from 'components/Common/ScrollToTop';
import ConfirmWrite from 'page/confirm/ConfirmWrite';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import useAuthRefresh from 'hooks/useAuthRefresh';

function Router() {
  useAuthRefresh();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <SignUp />
            </AuthRoute>
          }
        />
        <Route
          path="/signin/member"
          element={
            <AuthRoute>
              <Member />
            </AuthRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <AuthRoute>
              <SignIn />
            </AuthRoute>
          }
        />
        <Route
          path="/reset"
          element={
            <AuthRoute>
              <ResetPassword />
            </AuthRoute>
          }
        />
        <Route
          path="/reset/password"
          element={
            <AuthRoute>
              <ResetPasswordForm />
            </AuthRoute>
          }
        />
        <Route
          path="/signin/register"
          element={
            <AuthRoute>
              <Register />
            </AuthRoute>
          }
        />
        <Route
          path="/signin/email"
          element={
            <AuthRoute>
              <ResetEmailForm />
            </AuthRoute>
          }
        />
        <Route path="/comment/:confirmId" element={<CommentDetail />} />
        <Route
          path="/confirm/write"
          element={
            <PrivateRoute>
              <ConfirmWrite />
            </PrivateRoute>
          }
        />

        <Route element={<Layout />}>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Today />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/tpo" element={<Tpo />} />
          <Route path="/temperatures" element={<Temperatures />} />

          <Route path="/weekend" element={<Weekend />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
