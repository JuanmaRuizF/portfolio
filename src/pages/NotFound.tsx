import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/", { replace: true });
	}, [location.pathname, navigate]);

	return null;
};

export default NotFound;
