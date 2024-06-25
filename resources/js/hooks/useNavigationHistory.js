import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const useNavigationHistory = () => {
    const location = useLocation();
    const historyRef = useRef([location.pathname]);

    useEffect(() => {
        const handleLocationChange = () => {
            historyRef.current.push(location.pathname);
        };

        window.addEventListener('popstate', handleLocationChange);
        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        };
    }, [location]);

    return historyRef.current;
};

export default useNavigationHistory;
