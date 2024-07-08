import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import { ListItemText } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  { name: "Profile", path: "/profile" },
  { name: "Create Post", path: "/create" },
  { name: "Authors", path: "/authors" },
  { name: "Logout", path: "/logout" },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div onClick={handleDrawerToggle} className="p-3">
      <Typography component={Link} to={`/`} variant="h6" sx={{ my: 2 }}>
        Blog
      </Typography>
      <Divider />
      <div>
        {navItems.map((item) => (
          <div key={item.path} className="mt-5">
            <Link
              to={item.path}
              className={`block text-black ${
                location.pathname === item.path
                  ? "text-blue-500"
                  : "hover:text-blue-500"
              }`}
            >
              <ListItemText primary={item.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="container mx-auto">
      <CssBaseline />
      <AppBar component="nav" className="sm:px-20">
        <Toolbar>
          <Link to="/" className="grow">
            <Typography variant="h6" component="div">
              Blog
            </Typography>
          </Link>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <div className="hidden gap-5 sm:flex">
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.path}
                className={`rounded-md px-3 py-2 text-white ${
                  location.pathname === item.path
                    ? "bg-white text-blue-500"
                    : "hover:bg-white hover:text-blue-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          open={mobileOpen}
          anchor="right"
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
}

export default Header;
