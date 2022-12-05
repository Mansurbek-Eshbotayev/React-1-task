import "./littlecard.scss"

const LittleCard = ({text,number})=>{
  return(
    <li className="little__item">
      <span className="little__name">{text}</span>
      <span className="little__number">{number}</span>
    </li>
  )
}

export default LittleCard;