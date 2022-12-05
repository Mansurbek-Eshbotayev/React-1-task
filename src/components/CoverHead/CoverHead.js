import "./coverhead.scss"
import Jones from "../../assets/images/jones.png"
const CoverHead = ()=>{
  return(
    <div className="cover__inner">
      <h2 className="cover__title">Overview</h2>
      <div className="cover__wrap">
         <h3 className="wrap__title">Jones Ferdinand</h3>
         <img src={Jones} alt="Jones"/>
      </div>
    </div>
  )
}

export default CoverHead;