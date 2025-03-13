import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Main = lazy(() => import("../pages/Main"));

const AppRoutes = () => {
    return (
        <Router basename="/my-website">
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
