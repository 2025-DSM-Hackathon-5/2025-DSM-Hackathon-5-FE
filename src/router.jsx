import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login/Login";
import Signup from "./page/signup/Signup";
import AIProfile from "./page/AISetting/AIProfile";
import AISetting from "./page/AISetting/AISetting";
import Chat from "./page/Chat/Chat";
import Tips from "./page/Tips/Tips";
import CreateTips from "./page/Tips/CreateTips";
import EditAISetting from "./page/AISetting/EditAISetting";
import Mypage from "./page/Mypage/Mypage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ai-profile" element={<AIProfile />} />
        <Route path="/ai-setting" element={<AISetting />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/add-tips" element={<CreateTips />} />
        <Route path="/edit-ai-setting" element={<EditAISetting />} />
        <Route path="/my" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
};
