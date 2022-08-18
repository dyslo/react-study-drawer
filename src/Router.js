import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import App from './App';
import Test from './pages/Test';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Sidebar />}>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/test" element={<Test />}></Route>
                    <Route path="/test2" element={<Test />}></Route>
                    <Route path="/test3" element={<Test />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;