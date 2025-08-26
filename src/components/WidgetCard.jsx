import '../static/css/feed.css'
import stark from '../static/img/stark.png'
import zgb from '../static/img/zgb.png'
import JGi from '../static/img/JGi.png'
import '@fortawesome/fontawesome-free/css/all.min.css';


function WidgetCard(){
    return(
<>
    <div className="widget-card">
        <h3 className="widget-title">Who to follow</h3>        
        <div className="follow-item">
            <div className="follow-left">
                <div className="follow-avatar">                    
                    <div className="post_profile_logo">
                        <a href="#"><img src={zgb} alt="pp"/></a>
                    </div>
                </div>
                <div className="follow-info">
                    <h4>Zigbee</h4>
                    <p>@zb</p>
                </div>
            </div>
            <button className="follow-btn">Follow</button>
        </div>
        
        <div className="follow-item">
            <div className="follow-left">
                <div className="follow-avatar">                    
                    <div className="post_profile_logo">
                        <a href="#"><img src={stark} alt="pp"/></a>
                    </div></div>
                <div className="follow-info">
                    <h4>
                      Stark{" "}
                      <i className="fas fa-check-circle" style={{ color: "#E2725B", fontSize: "12px"}}></i>
                    </h4>
                    <p>@starkkk24</p>
                </div>
            </div>
            <button className="follow-btn">Follow</button>
        </div>
        
        <div className="follow-item">
            <div className="follow-left">
                <div className="follow-avatar">                    
                    <div className="post_profile_logo">
                        <a href="#"><img src={JGi} alt="pp"/></a>
                    </div></div>
                <div className="follow-info">
                    <h4>Jain </h4>
                    <p>@jain_official</p>
                </div>
            </div>
            <button className="follow-btn">Follow</button>
        </div>
        
        <a href="#" className="show-more">Show more</a>
    </div>
</>     
    )
}
export default WidgetCard