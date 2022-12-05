import "./header.scss"
import CardList from "../ListItem/ListItem"
import Icon1 from "../../assets/images/icon1.svg"
import Icon2 from "../../assets/images/icon2.svg"
import Icon3 from "../../assets/images/icon3.svg"
import Icon4 from "../../assets/images/icon4.svg"
import Icon5 from "../../assets/images/icon5.svg"
import Icon6 from "../../assets/images/icon6.svg"
import Icon7 from "../../assets/images/icon7.svg"
import Icon8 from "../../assets/images/icon8.svg"
const Header = ({img}) => {
   return(
    <header className="header">
     <a className="header__logo" href="#">
      <img className="header__img" src={img} alt="Logo"/>
     </a>
     <ul className="header__list">
      <CardList logo={Icon1} text="Overview"/>
      <CardList logo={Icon2} text="Tickets"/>
      <CardList logo={Icon3} text="Ideas"/>
      <CardList logo={Icon4} text="Contacts"/>
      <CardList logo={Icon5} text="Agents"/>
      <CardList logo={Icon6} text="Articles"/>
     </ul>
     <ul className="header__scond">
      <CardList logo={Icon7} text="Settings"/>
      <CardList logo={Icon8} text="Subscription"/>
     </ul>
    </header>
   )
}

export default Header;