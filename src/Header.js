import React from "react"; 
import './Header.css'; 
import MenuIcon from "@material-ui/icons/Menu"; 
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search"; 
import ArrowDropDown from "@material-ui/icons/ArrowDropDown"
import AppIcon from "@material-ui/icons/Apps"
import NotificationIcon from "@material-ui/icons/Notifications"
import Avatar from "@material-ui/core/Avatar"

function Header(){ 
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img 
                    src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
                    alt="gmail image" 
                />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDown className="header__inputCaret" />
            </div>
            <div className="header__right">
                <IconButton>
                    <AppIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header; 

// Check out material ui core divider???

// Install Material Ui "npm add @material-ui/core" && "npm add @material-ui/icons"

// Issue with importing icons from Material ui core like this: "import { IconButton } from "@material-ui/core/";"
    // Had to do it this way: "import IconButton from "@material-ui/core/IconButton";"