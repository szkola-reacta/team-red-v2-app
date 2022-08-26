import { useEffect, useState } from "react";
import { getDataFromGithubEndpoint } from "services/github";

export const Card = ({ user }) => {
  const { avatar_url, login, html_url, starred_url } = user;
  const [expand, setExpand] = useState(false); // controll of expanded area
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
      <a href={html_url} target="_blank" rel="noreferrer">
        <img src={avatar_url} alt={login} />
        <div>{login}</div>
      </a>
      <button type="button" onClick={() => setExpand(!expand)}>
        {!expand ? "Show more" : "Show less"}
      </button>
      <div style={{ display: expand ? "block" : "none" }}>{`Starred repo:  ${starred}`}</div>
    </div>
  );
};
