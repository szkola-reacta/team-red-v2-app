import { useState, useEffect } from "react";
// import getTeamMembers from "services/github";
import { Card } from "components/team/Card";
import { data } from "../components/team/mockData";
import "components/team/style.scss";

function Team() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    // getTeamMembers().then((data) => setMembers(data));
    setMembers(data);
  }, []);
  // console.log(members);

  return (
    <>
      <h1>Our Team</h1>
      <p>Quality code from a quality team!</p>
      <div className="team__container">
        {members.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default Team;
