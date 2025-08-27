
import PostSpace from '../components/PostSpace';
import FeedPost from '../components/FeedPost'
import SearchBox from '../components/SearchBox';
import WidgetCard from '../components/WidgetCard';
import styles from "../static/css/Feed.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css';




// function Feed(){
// return(
// <>

// <div className="content_space">
//     <div className="feed_page_wrap">
//         <div className="Post_space">
//             <PostSpace/>
//         </div>
//         <div className="feed_roll_space">
//             <FeedPost/>
//             <FeedPost/>
//             <FeedPost/>
//             <FeedPost/>
//             <FeedPost/>
//             <FeedPost/>
//         </div>
//     </div>
//     <div className='widget_space'>
//         <SearchBox/>
//         <WidgetCard/>
//     </div>        
// </div>
// </>
// )
// }
// export default Feed

function Feed() {
  return (
    <div className={styles.content_space}>
      <div className={styles.feed_page_wrap}>
        <div className={styles.Post_space}>
          <PostSpace />
        </div>
        <div className={styles.feed_roll_space}>
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </div>
      </div>
      <div className={styles.widget_space}>
        <SearchBox />
        <WidgetCard />
      </div>
    </div>
  );
}

export default Feed;

