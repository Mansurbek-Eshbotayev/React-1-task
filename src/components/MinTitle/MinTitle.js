import "./mintitle.scss"
import Picsum from "../../assets/images/our.jpg"
const MinTitle = ()=>{
  return(
<div className="container">
  <div className="min__wrap">
    <div className="min__info">
      <h4 className="info__title">Today’s trends</h4>
      <p className="min__text">as of 25 May 2019, 09:41 PM</p>
    </div>
    <div>
      <span className="mini__text">Today</span>
      <span className="mini__text">Yesterday</span>
    </div>
  </div>
 <div className="wrap__img">
 <img className="picsum__photo" src={Picsum} alt='photo'/>
 </div>
</div>
    )
  }

  export default MinTitle;