import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { logout } from "../../Redux/Actions/LoginAction";
import { Button } from "@mui/material";
import axios from "axios";

export default function Feed() {
  const [feeds, setfeeds] = useState({
    User_id: "",
    Notice: "",
  });
  const [feedsList, setfeedsList] = useState([]);

  useEffect(() => {
    fatchData();
  }, []);

  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleLogout = () => {
    Dispatch(logout());
    Navigate("/");
  };

  const fatchData = () => {
    axios
      .get("https://crimechake.herokuapp.com/notice")
      .then((res) => {
        setfeedsList([...res.data]);
      })
      .catch((err) => {
        alert("error");
      });
  };

  feedsList.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const handleSubmit = () => {
    axios
      .post("https://crimechake.herokuapp.com/notice", feeds)
      .then((res) => {
        fatchData();
      })
      .catch((err) => {
        alert(err.message);
      });
  };



  const { user } = useSelector((store) => store.LoginFatch);

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {user.User_id}
          </Typography>
          <Button
            onClick={handleLogout}
            sx={{ marginLeft: "1200px", backgroundColor: "red" }}
            variant="contained"
          >
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
      <Box mt={5} sx={{ display: "flex" }}>
        <Box>
          {" "}
          <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="what you think you can tell me............"
            onChange={(e) =>
              setfeeds({ ...feeds, Notice: e.target.value, User_id: user._id })
              
            }
            style={{ width: 500 }}
          />
          <Button
            variant="outlined"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </Box>
        <Box
          sx={{
            width: "60%",
            height: "600px",
            overflow: "auto",
            marginLeft: "40px",
            border: "2px solid red",
          }}
        >
          {feedsList.map((item) => {
            return (
              <>
                <Box
                  key={item._id}
                  sx={{ border: "2px solid red", margin: "10px" }}
                >
                  <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                  >
                    {item.User_id.User_id}
                  </Typography>
                  <Typography
                    component="h2"
                    variant="subtitle1"
                    color="inherit"
                    noWrap
                  >
                    Creation Data - {new Date(item.createdAt).toLocaleDateString()}
                  </Typography>
                  <Typography
                    component="h2"
                    variant="subtitle1"
                    color="inherit"
                    noWrap
                  >
                    Creation Time - {new Date(item.createdAt).toLocaleTimeString()}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    paragraph
                    color="inherit"
                    noWrap
                  >
                    {item.Notice}
                  </Typography>
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
