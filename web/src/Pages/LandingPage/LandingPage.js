import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "Components/components/Grid/GridContainer";
import GridItem from "Components/components/Grid/GridItem";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import CustomTabs from "Components/components/CustomTabs/CustomTabs";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  return (
    <div>
      <div PaddingTop="100000">
        <div className={classes.container} PaddingTop="1000">
          <div id="nav-tabs">
            <h3>Navigation Tabs</h3>
            <GridContainer>
              <GridItem md={6}>
                <h1>coucou</h1>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <h3>
                  <small>Tabs with Icons on Card</small>
                </h3>
                <CustomTabs
                  headerColor="danger"
                  tabs={[
                    {
                      tabName: "Profile",
                      tabIcon: Face,
                      tabContent: (
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      )
                    },
                    {
                      tabName: "Messages",
                      tabIcon: Chat,
                      tabContent: (
                        <p className={classes.textCenter}>
                          I think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. I will be the leader of a company
                          that ends up being worth billions of dollars, because
                          I got the answers. I understand culture. I am the
                          nucleus. I think that’s a responsibility that I have,
                          to push possibilities, to show people, this is the
                          level that things could be at.
                        </p>
                      )
                    },
                    {
                      tabName: "Settings",
                      tabIcon: Build,
                      tabContent: (
                        <p className={classes.textCenter}>
                          think that’s a responsibility that I have, to push
                          possibilities, to show people, this is the level that
                          things could be at. So when you get something that has
                          the name Kanye West on it, it’s supposed to be pushing
                          the furthest possibilities. I will be the leader of a
                          company that ends up being worth billions of dollars,
                          because I got the answers. I understand culture. I am
                          the nucleus.
                        </p>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
