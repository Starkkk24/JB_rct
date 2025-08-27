import stark from '../static/img/stark.png'
import zgb from '../static/img/zgb.png'
import JGi from '../static/img/JGi.png'
import styles from '../static/css/Feed.module.css'


// function WidgetCard(){
//     return(
// <>
//     <div className="widget-card">
//         <h3 className="widget-title">Who to follow</h3>        
//         <div className="follow-item">
//             <div className="follow-left">
//                 <div className="follow-avatar">                    
//                     <div className="post_profile_logo">
//                         <a href="#"><img src={zgb} alt="pp"/></a>
//                     </div>
//                 </div>
//                 <div className="follow-info">
//                     <h4>Zigbee</h4>
//                     <p>@zb</p>
//                 </div>
//             </div>
//             <button className="follow-btn">Follow</button>
//         </div>
        
//         <div className="follow-item">
//             <div className="follow-left">
//                 <div className="follow-avatar">                    
//                     <div className="post_profile_logo">
//                         <a href="#"><img src={stark} alt="pp"/></a>
//                     </div></div>
//                 <div className="follow-info">
//                     <h4>
//                       Stark{" "}
//                       <i className="fas fa-check-circle" style={{ color: "#807A5C", fontSize: "12px"}}></i>
//                     </h4>
//                     <p>@starkkk24</p>
//                 </div>
//             </div>
//             <button className="follow-btn">Follow</button>
//         </div>
        
//         <div className="follow-item">
//             <div className="follow-left">
//                 <div className="follow-avatar">                    
//                     <div className="post_profile_logo">
//                         <a href="#"><img src={JGi} alt="pp"/></a>
//                     </div></div>
//                 <div className="follow-info">
//                     <h4>Jain </h4>
//                     <p>@jain_official</p>
//                 </div>
//             </div>
//             <button className="follow-btn">Follow</button>
//         </div>
        
//         <a href="#" className="show-more">Show more</a>
//     </div>
// </>     
//     )
// }

function WidgetCard() {
  return (
    <div className={styles['widget-card']}>
      <h3 className={styles['widget-title']}>Who to follow</h3>        

      <div className={styles['follow-item']}>
        <div className={styles['follow-left']}>
          <div className={styles['follow-avatar']}>                    
            <div className={styles.post_profile_logo}>
              <a href="#"><img src={zgb} alt="pp" /></a>
            </div>
          </div>
          <div className={styles['follow-info']}>
            <h4>Zigbee</h4>
            <p>@zb</p>
          </div>
        </div>
        <button className={styles['follow-btn']}>Follow</button>
      </div>
      
      <div className={styles['follow-item']}>
        <div className={styles['follow-left']}>
          <div className={styles['follow-avatar']}>                    
            <div className={styles.post_profile_logo}>
              <a href="#"><img src={stark} alt="pp" /></a>
            </div>
          </div>
          <div className={styles['follow-info']}>
            <h4>
              Stark{" "}
              <i className="fas fa-check-circle" style={{ color: "#807A5C", fontSize: "12px" }}></i>
            </h4>
            <p>@starkkk24</p>
          </div>
        </div>
        <button className={styles['follow-btn']}>Follow</button>
      </div>
      
      <div className={styles['follow-item']}>
        <div className={styles['follow-left']}>
          <div className={styles['follow-avatar']}>                    
            <div className={styles.post_profile_logo}>
              <a href="#"><img src={JGi} alt="pp" /></a>
            </div>
          </div>
          <div className={styles['follow-info']}>
            <h4>Jain</h4>
            <p>@jain_official</p>
          </div>
        </div>
        <button className={styles['follow-btn']}>Follow</button>
      </div>
      
      <a href="#" className={styles['show-more']}>Show more</a>
    </div>
  );
}
export default WidgetCard