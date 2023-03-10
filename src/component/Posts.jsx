import React from "react";
import {
  CheckBox,
  Favorite,
  FavoriteBorder,
  FavoriteOutlined,
  MoreVert,
  Send,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { deepPurple, red } from "@mui/material/colors";
export const Posts = () => {
  return (
    <div>
        <Card sx={{ mb: 1, mt: 6 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: deepPurple["A100"] }} aria-label="recipe">
                Na
              </Avatar>
            }
            title="Bùi Ngọc Na"
            subheader="25 tháng 3 năm 2022"
          />
          <CardMedia
            component="img"
            height="20%"
            image={require("../img/pexels-thanh-luu-15096077.jpg")}
            alt="This is the picture"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: red[500] }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Send />
            </IconButton>
          </CardActions>
        </Card>;
    </div>
  );
};
