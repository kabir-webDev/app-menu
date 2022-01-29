import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    maxWidth: 500,
    maxHeight: 242,
    backgroundColor: "#82E0AA",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: "#1A5276",
    borderRadius: 20,
  },
  tagLine: {
    textAlign: "center",
    marginBottom: "1%",
  },
  steps: {
    marginTop: 10,
    marginBottom: 10,
    color: "#2E4053",
  },
}));

export default function DirectionModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClose = (name) => {
    setOpen(false);
    localStorage.setItem("name", JSON.stringify(name));
    console.log(name);
  };

  const body = (
    <div className="mod">
      <div className={classes.paper}>
        <div className={classes.steps}>
          <h3 className="text-xl" id="simple-modal-description">
            Select one type to see their allowed applications
          </h3>
        </div>
        <br />
        <div className={classes.tagLine}>
          <div className="flex flex-col gap-1">
            <Button variant="contained" onClick={() => handleClose("admin")}>
              Admin
            </Button>
            <Button
              variant="contained"
              onClick={() => handleClose("developer")}
            >
              Developer
            </Button>
            <Button variant="contained" onClick={() => handleClose("designer")}>
              Designer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
