import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/Auth";

const Lounge = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const logout = useCallback(
    (e) => {
      e.preventDefault();
      setUser(null);
      navigate("/");
    },
    [setUser]
  );

  const randomIntFromInterval = useCallback((min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }, []);

  useEffect(() => {
    const num = randomIntFromInterval(1, 6);
    if (num > 5) {
      throw new Error("SOME RANDOM ERROR");
    }
  }, [randomIntFromInterval]);

  return (
    <div>
      <h1>Lounge page</h1>
      <p>
        Hello <strong>{user?.username}</strong>!
      </p>
      <p>Looks like you have access to this private route!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Lounge;
