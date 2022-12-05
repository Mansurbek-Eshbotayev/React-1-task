import "./listitem.scss"

const CardList = ({logo,text}) => {
  return (
    <li className="list__item">
      <img className="icon__list" src={logo} alt="img" />
      {text}
    </li>
  )
}

export default CardList;