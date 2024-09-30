import profileIcon from "../assets/icons/profile.svg";
import photoIcon from "../assets/icons/photo.svg";
import messageIcon from "../assets/icons/message.svg";
import favoritsIcon from "../assets/icons/favorite.svg";
import guestIcon from "../assets/icons/guests.svg";
import settingIcon from "../assets/icons/guests.svg";
import logOutIcon from "../assets/icons/logout.svg";

const icons = [profileIcon, photoIcon, messageIcon, favoritsIcon, guestIcon, settingIcon, logOutIcon]
const menuItem = document.querySelectorAll('.profile_menu-item');
menuItem.forEach((item, index) => {
  if(icons[index]) {
    item.style.backgroundImage = `url(${icons[index]})`
  }
})
