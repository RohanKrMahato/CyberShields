import styles from "./Card.css";
import rohan from "./1678802514689.png"

function Card() {
    return (
      <div className="Coreteamcardcss">
        <div className="ccontent">
        <div className="cbox"></div>
          <div className="cimgbox"><img className="cimg" src={rohan}></img></div>
          <div className="CName">Shubhranshu</div>
          <ul class="csocial-icons">
            <li><a href="#"><i class="fa fa-github"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    );
  }
  
export default Card;