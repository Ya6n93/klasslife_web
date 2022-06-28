import React, { lazy } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Layout from '@/layout/Layout';
import AuthLayout from '@/layout/AuthLayout';
import RequireAuth from './RequireAuth';
import PublicRoutesWrapper from './PublicRoutesWrapper';

const Login = lazy(() => import('@/pages/Login'));
const Home = lazy(() => import('@/pages/Home'));
const CreateActivityTool = lazy(() => import('@/pages/CreateActivityTool'));
const Chat = lazy(() => import('@/pages/Chat'));
const Scheduler = lazy(() => import('@/pages/Scheduler'));
const Suivi = lazy(() => import('@/pages/Suivi'));
const Activity = lazy(() => import('@/pages/Activity'));
const CorrectActivityTool = lazy(() => import('@/pages/CorrectActivityTool'));
const StudentActivity = lazy(() => import('@/pages/StudentActivity'));
const StudentActivityTool = lazy(() => import('@/pages/StudentActivityTool'));
const Students = lazy(() => import('@/pages/Students'));
const StudentProfile = lazy(() => import('@/pages/StudentProfile'));

const publicRoutes = () => (
  <Route element={<PublicRoutesWrapper />}>
    <Route element={<AuthLayout />}>
      <Route path="/login" element={<Login />} />
    </Route>
  </Route>
);

const protectedRoutes = () => (
  <Route element={<RequireAuth />}>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="tool/create/:activityId" element={<CreateActivityTool />} />
      <Route
        path="tool/correct/:activityId"
        element={<CorrectActivityTool />}
      />
      <Route path="chat" element={<Chat />} />
      <Route path="scheduler" element={<Scheduler />} />
      <Route path="suivi" element={<Suivi />} />
      <Route path="activities" element={<Activity />} />
      <Route path="student-activities" element={<StudentActivity />} />
      <Route
        path="student-tool/:studentActivityId"
        element={<StudentActivityTool />}
      />
      <Route path="students" element={<Students />} />
      <Route path="student/:studentId" element={<StudentProfile />} />
    </Route>
  </Route>
);

const AllRoutes = () => (
  <Routes>
    {publicRoutes()}
    {protectedRoutes()}
  </Routes>
);

export default AllRoutes;
