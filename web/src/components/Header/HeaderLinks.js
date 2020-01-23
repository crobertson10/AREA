/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Pre-built ZAP"
          buttonProps={{
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Button color="transparent" target="_blank">
              Github to Slack
            </Button>,
            <Button color="transparent" target="_blank">
              Github to Gmail
            </Button>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Here you can custom your own ZAP!"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <CloudDownload className={classes.icons} /> Create your ZAP
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
