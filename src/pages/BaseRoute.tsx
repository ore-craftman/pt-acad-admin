import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BaseRoute = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
    return;
  }, []);

  return <></>;
};

export default BaseRoute;
