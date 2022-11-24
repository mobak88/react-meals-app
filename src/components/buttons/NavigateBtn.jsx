import { useNavigate } from "react-router-dom";

const NavigateBtn = ({ navigateSteps, children }) => {
  const navigate = useNavigate();

  return <button onClick={() => navigate(navigateSteps)}>{children}</button>;
};

export default NavigateBtn;
