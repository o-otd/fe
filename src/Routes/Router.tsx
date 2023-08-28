import Activity from 'page/today/Activity';
import Member from 'page/auth/Member';
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
import ConfirmWrite from 'page/confirm/ConfirmWrite';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import useAuthRefresh from 'hooks/useAuthRefresh';
import { Layout, ScrollToTop } from 'components/Common';
import MyPage from 'page/myPage/MyPage';

function Router() {
  useAuthRefresh();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/signup" element={<AuthRoute component={SignUp} />} />
        <Route
          path="/signin/member"
          element={<AuthRoute component={Member} />}
        />
        <Route path="/signin" element={<AuthRoute component={SignIn} />} />
        <Route
          path="/reset"
          element={<AuthRoute component={ResetPassword} />}
        />
        <Route
          path="/reset/password"
          element={<AuthRoute component={ResetPasswordForm} />}
        />
        <Route
          path="/signin/register"
          element={<AuthRoute component={Register} />}
        />
        <Route
          path="/signin/email"
          element={<AuthRoute component={ResetEmailForm} />}
        />

        <Route path="/comment/:confirmId" element={<CommentDetail />} />

        <Route
          path="/confirm/write"
          element={<PrivateRoute component={ConfirmWrite} />}
        />

        <Route element={<Layout />}>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Today />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/tpo" element={<Tpo />} />
          <Route path="/temperatures" element={<Temperatures />} />
          <Route path="/weekend" element={<Weekend />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/mypage" element={<PrivateRoute component={MyPage} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
