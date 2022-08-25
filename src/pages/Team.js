import { useState, useEffect } from "react";
import { Box } from "@mui/material";
// import { data } from "../components/team/mockData";
import getTeamMembers from "services/github";
import { Card } from "components/team/Card";

function Team() {
  const [members, setMembers] = useState(null);
  useEffect(() => {
    getTeamMembers().then((data) => setMembers(data));
    // setMembers(data);
  }, []);
  // console.log(members);

  return (
    <>
      <h1>Our Team</h1>
      <p>Quality code from a quality team!</p>
      {members && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            mt: 5,
          }}
        >
          {members.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </Box>
      )}
    </>
  );
}

export default Team;
