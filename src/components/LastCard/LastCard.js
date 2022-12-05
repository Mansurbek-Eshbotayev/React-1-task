import "./lastcard.scss"
import FixItem from "../../components/FixItem/FixItem"


const LastCard = ({titl,texting,link,chldreen})=>{
  return(
    <div className="last__item">
       <div className="last__top">
         <div className="last__info">
           <h5 className="last__intero">{titl}</h5>
           <p className="last__text">{texting}</p>
         </div>
         <a className="last__link" href="http://localhost:3000/">{link}</a>
       </div>
       <ul className="panding__list">
        <FixItem text="Waiting on Feature Request" count="4238" />
        <FixItem text="Awaiting Customer Response" count="1005" />
        <FixItem text="Awaiting Developer Fix" count="914" />
        <FixItem text="Pending" count="281" />
        {chldreen}
       </ul>
    </div>
  )
}

export default LastCard;