import Home from 'page/Home';
import Member from 'page/Member';
import Profile from 'page/Profile';
import ResetEmailForm from 'page/ResetEmailForm';
import Search from 'page/Search';
import SignIn from 'page/SignIn';
import SignUp from 'page/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signin/member" element={<Member />} />
        <Route path="/signin/email" element={<ResetEmailForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
