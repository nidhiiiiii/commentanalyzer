import { useNavigate } from "react-router-dom";
import React , {useEffect} from 'react';

const IntroPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="welcome">
      <p>hello welcome to  headless whatsapp</p>
    </div>
  );
};
export default IntroPage;