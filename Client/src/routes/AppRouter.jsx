import React from 'react';
// import Header1 from '../components/common/header1/Header1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Home1 from '../components/home1/Home1';
import Footer from '../components/common/footer/Footer';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import DiscussionForum from '../components/project dashboard/DiscussionForum';
import Reference from '../components/project dashboard/Reference';
import Wsubmit from '../components/project dashboard/Wsubmit';
import Wsubmitlink1 from '../components/project dashboard/Wsubmitlink1';
import Wsubmitlink2 from '../components/project dashboard/Wsubmitlink2';
import Wsubmitlink3 from '../components/project dashboard/Wsubmitlink3';
import Wsubmitlink4 from '../components/project dashboard/Wsubmitlink4';
import Wsubmitlink5 from '../components/project dashboard/Wsubmitlink5';
import Wsubmitlink6 from '../components/project dashboard/Wsubmitlink6';
import Fsubmit from '../components/project dashboard/Fsubmit';
import Wsubmitform1 from '../components/project dashboard/Wsubmitform1';
import Vivavoce from '../components/project dashboard/Vivavoce';
import Header1 from '../components/common/header1/Header1';
import Main from '../components/main/Main';
import Main1 from '../components/main/Main1';
import OnlineCourses from '../components/allcourses/OnlineCourses';

const AppRouter = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Main1 child={<Home/>}/>} />
        <Route path="/signup" element={<Main1 child={<Signup />}/>} />
        <Route path="/login" element={<Main1 child={<Login />}/>}/>
        
        <Route path="/project" element={<Main child={<Home1 />}/>} />
        <Route path="/discussion" element={<Main child={<DiscussionForum />}/>} />
        <Route path="/reference" element={<Main child={<Reference />}/>} />
        <Route path="/wsubmit" element={<Main child={<Wsubmit />}/>} />
        <Route path="/wsubmitlink1" element={<Main child={<Wsubmitlink1 />}/>} />
        <Route path="/wsubmitlink2" element={<Main child={<Wsubmitlink2 />}/>}/>
        <Route path="/wsubmitlink3" element={<Main child={<Wsubmitlink3 />}/>} />
        <Route path="/wsubmitlink4" element={<Main child={<Wsubmitlink4 />}/>} />
        <Route path="/wsubmitlink5" element={<Main child={<Wsubmitlink5 />}/>} />
        <Route path="/wsubmitlink6" element={<Main child={<Wsubmitlink6 />}/>} />
        <Route path="/fsubmit" element={<Main child={<Fsubmit />}/>} />
        <Route path="/wsubmitform1" element={<Main child={<Wsubmitform1 />}/>} />
        <Route path="/vivavoce" element={<Main child={<Vivavoce />}/>} />
        <Route path="/courses" element={<Main child={<OnlineCourses />}/>} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
