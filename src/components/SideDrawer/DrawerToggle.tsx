import React from "react";
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import "./DrawerToggle.css";

interface Props {
  click(): void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const DrawerToggle: React.FC<Props> = ({ click }) => {
  const classes = useStyles();

  return (
    <div className="drawerWrapper">
      <IconButton edge="start" className={classes.menuButton} onClick={click} color="inherit" aria-label="menu">
        <div className="toggle-button">
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
        </div>
      </IconButton>
    </div>
  )
};

export default DrawerToggle;
