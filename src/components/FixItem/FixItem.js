import "./fixitem.scss"

const FixItem = ({text,count}) => {
   return(
    <li className="fix__item">
      <h6 className="fix__title">{text}</h6>
      <span className="fix__text">{count}</span>
    </li>
   )
}

export default FixItem;