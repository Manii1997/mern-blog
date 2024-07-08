import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const onChangeInputHandle = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <section className="container mx-auto mt-20 rounded-md p-2 md:w-[50%] md:bg-white md:p-5">
      <div>
        <h2 className="text-xl font-bold">Login</h2>
        <form className="mt-7 flex flex-col gap-5">
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={userData.email}
            onChange={onChangeInputHandle}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              value={userData.password}
              onChange={onChangeInputHandle}
              name="password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <p className="text-red-500">Error message</p>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="self-start"
            sx={{ textTransform: "none" }}
          >
            Login
          </Button>
        </form>
        <p className="mt-5">
          Don't have an account?{" "}
          <Link to={`/register`} className="font-semibold text-[#1976D2]">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
