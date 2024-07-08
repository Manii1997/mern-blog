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

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
        <h2 className="text-xl font-bold">Register</h2>
        <form className="mt-7 flex flex-col gap-5">
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={userData.name}
            onChange={onChangeInputHandle}
            className=""
          />
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
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password2">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              type={showPassword2 ? "text" : "password"}
              value={userData.password2}
              onChange={onChangeInputHandle}
              name="password2"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
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
            Register
          </Button>
        </form>
        <p className="mt-5">
          Already have an account?{" "}
          <Link to={`/login`} className="font-semibold text-[#1976D2]">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
