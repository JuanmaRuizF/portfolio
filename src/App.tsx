import { MotionConfig } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
	<MotionConfig reducedMotion="user">
		<Toaster />
		<BrowserRouter
			future={{
				v7_startTransition: true,
				v7_relativeSplatPath: true,
			}}
		>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</MotionConfig>
);

export default App;
