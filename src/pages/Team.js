import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Card } from "../components/team/Card";
import { data } from "../components/team/mockData";

function Team() {
  // console.log(data);
  const [members, setMembers] = useState(null);
  useEffect(() => {
    // getGithubData()
    //   .then((data) => setMembers(data))
    //   .catch((err) => console.error(err));
    setMembers(data);
  }, []);

  // const renderArr = members;
  console.log(members);
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
