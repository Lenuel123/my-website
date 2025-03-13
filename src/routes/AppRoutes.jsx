import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Main = lazy(() => import("../pages/Main"));
// const loading = () => <div>Loading...</div>;
const AppRoutes = () => {
    return (
        <Router>
            <Suspense>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </Suspense>
        </Router>
    );
};  

export default AppRoutes;
