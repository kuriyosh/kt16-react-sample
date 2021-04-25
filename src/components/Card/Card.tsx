import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";

import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

type Props = {
  name: string;
  job: "engineer" | "docter";
  family: Array<string>;
  fat?: boolean;
};

const SimpleCard: React.FC<Props> = ({ name, job, family, fat }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader title={`Name: ${name}`} />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Job: {job}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Family
        </Typography>
        {family.map((fam) => {
          return (
            <Typography className={classes.pos} color="textSecondary">
              {fam}
            </Typography>
          );
        })}

        {fat ? (
          <Alert variant="filled" severity="warning">
            OH!!! FAT!!!
          </Alert>
        ) : (
          <></>
        )}

        <IconButton
          onClick={() => {
            setIsFavorite(!isFavorite);
          }}
        >
          {isFavorite ? (
            <FavoriteIcon color="primary" />
          ) : (
            <FavoriteOutlinedIcon />
          )}
        </IconButton>
      </CardContent>
    </Card>
  );
};

SimpleCard.defaultProps = {
  fat: false,
};

export default SimpleCard;
