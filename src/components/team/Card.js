import {
  Card as MUICard,
  styled,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Box,
  Collapse,
  CardActionArea,
  Link,
} from "@mui/material";
import { ExpandMore as ExpandIcon, Star as StarIcon } from "@mui/icons-material";
import { useEffect, useState } from "react";

const CustomCard = styled(MUICard)({
  width: 150,
  borderRadius: 20,
});

const ExpandMore = styled(({ expand, ...other }) => {
  return <IconButton {...other} children={<ExpandIcon />} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Card = ({ user }) => {
  const { avatar_url, login, html_url } = user;
  const [expand, setExpand] = useState(false);
  const [starred] = useState(null);
  useEffect(() => {
    // get amount starred repo (I have't acces)
    // getStarred(starred_url.replace("{/owner}{/repo}", ""))
    //  .then((data) => setStarred(data.length));
  }, []);

  return (
    <CustomCard>
      <CardActionArea>
        <Link href={html_url} underline="none" color="inherit" target="_blank">
          <CardMedia
            component="img"
            image={avatar_url}
            sx={{
              borderRadius: "50%",
            }}
          />
          <CardContent children={login} />
        </Link>
      </CardActionArea>
      <CardActions children={<ExpandMore expand={expand} onClick={() => setExpand(!expand)} />} />
      <Collapse
        in={expand}
        unmountOnExit
        children={
          <CardContent
            children={
              <Box>
                <StarIcon color="primary" />
                {starred}
              </Box>
            }
          />
        }
      />
    </CustomCard>
  );
};
