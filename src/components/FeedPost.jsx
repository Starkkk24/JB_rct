import '../static/css/feed.css'
import hd from '../static/img/hd.png'
import zgb from '../static/img/zgb.png'



function FeedPost(){
    return(
    <>
                <div class="feed_post">
                <div class="feed_post_up_wrap">
                    <div class="Post_area_wrap_left">
                        <div><img class="artticle-image" src={hd}></img></div>
                    </div>
                            <article>
                                <div class="article_1">
                                    <div class="uploader">
                                        <div class="post_profile_logo">
                                            <a href="#"><img src={zgb} alt="pp"/></a>
                                        </div>
                                        <a href="#" id="uploader_profile_link"><span>Zigbee Club</span></a>
                                            <p>@zb</p>                                            
                                    </div>
                                    <div class="news-head"><a href="#">Zigbee Club has launched their Brand new Website...</a></div>
                                </div>
                                <div>
                                    <time>1 hour ago</time>
                                </div>
                            </article>
                </div>
                <div class="post_interaction_bar">
                    <div class="interaction_items">
                        <div class="Post-items"><a href="#"><i class="fa-solid fa-thumbs-up"></i></a></div>
                        <div class="Post-items"><a href="#"><i class="fa-solid fa-comment"></i></a></div>
                            <div class="Post-items"><a href="#"><i class="fa-solid fa-share"></i></a></div>   
                    </div>
                </div>                
            </div>  
    </>
    )
}
export default FeedPost