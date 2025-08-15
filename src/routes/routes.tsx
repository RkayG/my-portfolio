import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const AppRoutes = () => (
	<Router>
		<Routes>
			<Route path="/" element={<LandingPage />} />
			{/* Add more routes here as needed */}
		</Routes>
	</Router>
);

export default AppRoutes;

