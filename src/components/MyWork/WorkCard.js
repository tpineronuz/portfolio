import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  root: {
    width: "auto",
    padding: 0,
    backgroundColor: "#171717",
  },
  img: {
    width: "100%",
  },
  content: {
    margin: 0,
    padding: 0,
  },
  titleRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    margin: 0,
    padding: "0px 5px",
    maxHeight: "50px",
    alignItems: "center",
  },
  title: {
    maxWidth: "250px",
    overflow: "none",
    textSizeAdjust: "auto",
    color: "#cfd4cf",
  },
  description: {
    padding: "10px",
    color: "#cfd4cf",
  },
  expand: {
    color: "#cfd4cf",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    margin: 0,
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
});

export default function WorkCard(props) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.img}
          component="img"
          height="150"
          image={props.image}
        />
        <CardContent className={classes.content} onClick={handleExpandClick}>
          <div className={classes.titleRow}  >
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
              noWrap="true"
            >
              {props.name}
            </Typography>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </div>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography
              variant="body2"
              component="p"
              className={classes.description}
            >
              {props.description}
            </Typography>
          </Collapse>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
