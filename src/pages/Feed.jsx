// import global from '../static/css/global.css'
import hd from '../static/img/hd.png'
import en from '../static/img/en.png'
import inx from '../static/img/inx.png'
import ns from '../static/img/ns.jpeg'
import JGi from '../static/img/JGi.png'
import news from '../static/img/news.jpg'
import tc from '../static/img/tc.jpg'
import zgb from '../static/img/zgb.png'
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
          <FeedPost art_img={hd} p_link={"https://www.instagram.com/zigbee_ju/"} p_img={zgb} p_name={"Zigbee Club"} username={"zb"} cmnt={'Zigbee Club has launched their Brand new Website...'} lnk={'https://linktr.ee/zigbee_ju'} when={2}/>
          <FeedPost art_img={inx} p_link={"https://www.instagram.com/techcouncil.scse/"} p_img={tc} p_name={"Tech Council"} username={"en"} cmnt={'Please give your names for the event! Inceptrix is on the edge!'} lnk={"https://inceptrix2025.xyz/"} when={3}/>
          <FeedPost art_img={ns} p_img={JGi} p_name={"Jain"} username={"jain"} cmnt={'New Session 2025-2026 is commencing on 28 Aug 2025! Please be prepare to face the college drama again!Please give your names for the event! Inceptrix is on the edge!'} when={720}/>
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

