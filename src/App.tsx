import "./styles.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./scenes/HomePage"));
const VideoGame = lazy(() => import("./scenes/VideoGame"));

export default function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/game" element={<VideoGame />} />
            </Routes>
        </Suspense>
    );
}
