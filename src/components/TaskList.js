import React, { useContext, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";
import { Button, List, Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TaskItem from "./TaskItem";

import taskApi from "../api/tasksApi";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(7)
  },
  title: {
    margin: theme.spacing(20, 20, 0)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
}));

const TaskList = () => {
  const classes = useStyles();
  const { tasks } = useContext(TaskContext);

  return tasks.length ? (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Typography variant="h3" className={classes.title}>
            Tasks:
          </Typography>
          <div className={classes.demo}>
            <List>
              {tasks.map(task => {
                return <TaskItem task={task} key={task.id} />;
              })}
            </List>
            <Link
              to={"/create"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button
                type="submit"
                variant="contained"
                className={classes.submit}
              >
                Add Task
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  ) : (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Typography variant="h6" className={classes.title}>
            Tasks:
          </Typography>
          <Typography component="h1" variant="h5" style={{ padding: "10px" }}>
            No tasks to do! Yay!
          </Typography>
          <Link
            to={"/create"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
            >
              Add Task
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default TaskList;
