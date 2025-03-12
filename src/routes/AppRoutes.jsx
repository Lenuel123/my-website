import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const loading = () => <div>Loading...</div>;
const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={loading()}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </Suspense>
        </Router>
    );
};  

export default AppRoutes;
