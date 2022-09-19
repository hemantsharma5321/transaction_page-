import dp from "../images/dp.png";
import home from "../images/home.png"
import bank from "../images/bank.png"
import deposit from "../images/deposit.png"
import gift from "../images/gift.png"
import settings from "../images/settings.png"
const SideNav=()=>{
    return(
        <div className="side-nav">
            <div className="dp">
                <img src={dp} alt="profile-pic"/>
                <h5>Hemant Sharma</h5>
            </div>

            <div className="menu-list">
                <ul>
                    <li className="menu-item"><img src={home}/> Home</li>
                    <li className="menu-item"><img src={deposit} className="icons"/> Deposits</li>
                    <li className="menu-item"><img src={gift} className="icons"/> Offers</li>
                    <li className="menu-item"><img src={bank} className="icons"/> Payments</li>
                    <li className="menu-item"><img src={settings} className="icons"/> Settings</li>
                </ul>

            </div>
            <input type="radio"></input>
        </div>
    )
}
export default SideNav;