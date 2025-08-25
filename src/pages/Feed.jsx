
// import logo from '../static/img/logo.png';
import PostSpace from '../components/PostSpace';
import FeedPost from '../components/FeedPost'
import "../static/css/feed.css"

function Feed(){
return(
<>

<div className="content_space">
    <div className="feed_page_wrap">
    <PostSpace/>
    <FeedPost/>
    <FeedPost/>

    </div>            
</div>

</>
)
}
export default Feed