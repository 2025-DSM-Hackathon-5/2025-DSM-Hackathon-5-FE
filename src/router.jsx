import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login/Login";
import Signup from "./page/signup/Signup";
import AIProfile from "./page/AISetting/AIProfile";
import AISetting from "./page/aiSetting/AISetting";
import Chat from "./page/Chat/Chat";
import Tips from "./page/Tips/Tips";
import CreateTips from "./page/Tips/CreateTips";

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
        <Route path="/create-tips" element={<CreateTips />} />
      </Routes>
    </BrowserRouter>
  );
};
