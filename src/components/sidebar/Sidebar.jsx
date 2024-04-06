import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">Store</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"></DashboardIcon>
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <Link to="/users">
            <li>
              <PersonOutlineIcon className="icon"></PersonOutlineIcon>
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li>
              <CreditCardIcon className="icon"></CreditCardIcon>
              <span>Products</span>
            </li>
          </Link>
          <li>
            <StoreIcon className="icon"></StoreIcon>
            <span>Orders</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon"></AccountCircleIcon>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon"></ExitToAppIcon>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;