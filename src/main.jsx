import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import KnowingMotion from "./components/OneKnowingMotion";
import InitialAnimation from "./components/TwoInitialAnimation.jsx";
import HoverAnimation from "./components/ThreeHoverAnimation.jsx";
import Variants from "./components/FourVariants.jsx";
import KeyFrames from "./components/FiveKeyFrames.jsx";
import AnimatePresence from "./components/SixAnimatePresence.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/knowing-motion" element={<KnowingMotion />} />
				<Route path="/initial-animation" element={<InitialAnimation />} />
				<Route path="/hover-animation" element={<HoverAnimation />} />
				<Route path="/variants" element={<Variants />} />
				<Route path="/keyframes" element={<KeyFrames />} />
				<Route path="/animate-presence" element={<AnimatePresence />} />
				<Route path="*" element={<div>404 Not Found</div>} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
