import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CameraAlt } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useInputValidation, useFileHandler } from "6pp";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const name = useInputValidation("");
  const username = useInputValidation("");
  const bio = useInputValidation("");
  const password = useInputValidation("");
  const avatar = useFileHandler("single");
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 4,
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Username"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                type="password"
                label="Password"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
              <Typography textAlign="center" m="1rem">
                OR
              </Typography>
              <Button
                onClick={() => setIsLogin(false)}
                fullWidth
                variant="text"
                color="primary"
              >
                Sign up instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Register</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <Stack
                position="relative"
                margin="auto"
                sx={{
                  width: "10rem",
                  height: "10rem",
                }}
              >
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "content",
                  }}
                  src={avatar.preview || undefined}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "white",
                    background: "rgba(0, 0, 0, 0.7)",
                    ":hover": {
                      background: "rgba(0, 0, 0, 0.5)",
                    },
                  }}
                  component="label"
                >
                  <CameraAlt />
                  <VisuallyHiddenInput
                    onChange={avatar.changeHandler}
                    type="file"
                  />
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Name"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Bio"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                label="Username"
                value={username.value}
                onChange={username.changeHandler}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                margin="normal"
                type="password"
                label="Password"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign up
              </Button>
              <Typography textAlign="center" m="1rem">
                OR
              </Typography>
              <Button
                onClick={() => setIsLogin(true)}
                fullWidth
                variant="text"
                color="primary"
              >
                Login instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
