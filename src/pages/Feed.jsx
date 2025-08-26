
import PostSpace from '../components/PostSpace';
import FeedPost from '../components/FeedPost'
import SearchBox from '../components/SearchBox';
import WidgetCard from '../components/WidgetCard';
import "../static/css/Feed.css"
import '@fortawesome/fontawesome-free/css/all.min.css';




function Feed(){
return(
<>

<div className="content_space">
    <div className="feed_page_wrap">
        <div className="Post_space">
            <PostSpace/>
        </div>
        <div className="feed_roll_space">
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
        </div>
    </div>
    <div className='widget_space'>
        <SearchBox/>
        <WidgetCard/>
    </div>        
</div>
</>
)
}
export default Feed