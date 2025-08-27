
import stark from '../static/img/stark.png';

// function PostSpace(){
//     return(
// <>
//         <div className="Post_space">
//             <div className="Post_area_wrap">
//                 <div className="Post_area_wrap_left">
//                     <div className="post_profile_logo">
//                         <a href="#"><img src={stark} alt="pp"/></a>
//                     </div>
//                 </div>
//                 <div className="Post_area_wrap_right">
//                     <textarea placeholder="Share in the community!"></textarea>
//                     <div className="Post-bar">
//                         <div className="Post-bar-wrap">
//                             <div className="Post-bar-wrap_left">
//                                 <div className="Post-items"><a href="#"><i className="fa-solid fa-image"></i></a></div>
//                                 <div className="Post-items"><a href="#"><i className="fa-solid fa-square-poll-horizontal"></i></a></div>
//                                 <div className="Post-items"><a href="#"><i className="fa-solid fa-paperclip"></i></a></div>   
//                             </div>
//                             <div className="Post-bar-wrap_right">
//                                 <button>Post</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
// </>

//     )
// }
// export default PostSpace

// import stark from '../static/img/stark.png';
import styles from '../static/css/Feed.module.css'; // Import CSS Module

function PostSpace() {
  return (
    <div className={styles.Post_space}>
      <div className={styles.Post_area_wrap}>
        <div className={styles.Post_area_wrap_left}>
          <div className={styles.post_profile_logo}>
            <a href="#"><img src={stark} alt="pp" /></a>
          </div>
        </div>
        <div className={styles.Post_area_wrap_right}>
          <textarea placeholder="Share in the community!" />
          <div className={styles['Post-bar']}>
            <div className={styles['Post-bar-wrap']}>
              <div className={styles['Post-bar-wrap_left']}>
                <div className={styles['Post-items']}><a href="#"><i className="fa-solid fa-image"></i></a></div>
                <div className={styles['Post-items']}><a href="#"><i className="fa-solid fa-square-poll-horizontal"></i></a></div>
                <div className={styles['Post-items']}><a href="#"><i className="fa-solid fa-paperclip"></i></a></div>
              </div>
              <div className={styles['Post-bar-wrap_right']}>
                <button>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSpace;
