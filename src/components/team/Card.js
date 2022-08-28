import { useEffect, useState } from "react";
import { getDataFromGithubEndpoint } from "services/github";

export const Card = ({ user }) => {
  const { avatar_url, login, html_url, starred_url } = user;
  const [expand, setExpand] = useState(false); // control of expanded area
  const [starred, setStarred] = useState(null);
  useEffect(() => {
    // get amount starred repo
    getDataFromGithubEndpoint(starred_url.replace("{/owner}{/repo}", "")).then((data) =>
      setStarred(data.length),
    );
  }, [starred_url]);

  // todo styling !
  return (
    <div className="team__card">
      <a className="team__link" href={html_url} target="_blank" rel="noreferrer">
        <img className="team__image" src={avatar_url} alt={login} />
        <div className="team__login">{login}</div>
      </a>
      <button className="team__button" type="button" onClick={() => setExpand(!expand)}>
        {!expand ? "Show more" : "Show less"}
      </button>
      <div className="team__more-info" style={{ display: expand ? "block" : "none" }}>{`Starred repo:  ${starred}`}</div>
    </div>
  );
};
