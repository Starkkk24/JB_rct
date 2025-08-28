// import '../static/css/feed.css'
import styles from '../static/css/Feed.module.css'
import hd from '../static/img/hd.png'
import zgb from '../static/img/zgb.png'




function FeedPost({art_img, p_link, p_img, p_name, username, cmnt, lnk, when}) {
  return (
    <div className={styles.feed_post}>
      <div className={styles.feed_post_up_wrap}>
        <div className={styles.Post_area_wrap_left}>
          <div><a href={lnk} target="_blank" rel="noopener noreferrer"><img className={styles['artticle-image']} src={art_img} alt="article" /></a></div>
        </div>
        <article>
          <div className={styles.article_1}>

          <a href={p_link} target='_blank' rel='noopener noreferer'>
            <div className={styles.uploader}>
              <div className={styles.post_profile_logo}>
                  <img src={p_img} alt="pp" />
              </div>
              <span>{p_name}</span>
              <p>@{username}</p>
            </div>
          </a>  
            <div className={styles['news-head']}>
                {/* <a href={lnk} target="_blank" rel="noopener noreferrer"> */}
                  {cmnt}
                {/* </a> */}
            </div>
          </div>
          <div>
            <time>{when} hours ago</time>
          </div>
        </article>
      </div>
      <div className={styles.post_interaction_bar}>
        <div className={styles.interaction_items}>
          <div className={styles['Post-items']}><a href="#"><i className="fa-solid fa-thumbs-up"></i></a></div>
          <div className={styles['Post-items']}><a href="#"><i className="fa-solid fa-comment"></i></a></div>
          <div className={styles['Post-items']}><a href="#"><i className="fa-solid fa-share"></i></a></div>
        </div>
      </div>
    </div>
  );
}

export default FeedPost;
