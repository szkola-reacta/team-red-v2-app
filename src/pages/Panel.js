import { useLoginContext } from "components/login/LoginProvider";
import { Link } from "react-router-dom";

export const Panel = () => {
  const { logged } = useLoginContext();
  return (
    <div className="panel">
      <span className="panel__welcome">
        Welcome&nbsp;
        <span className="panel__name">{logged}</span>
      </span>
      <div className="panel__links">
        <Link to="/edit-profile" className="panel__link">
          Edit profile
        </Link>
      </div>
    </div>
  );
};
