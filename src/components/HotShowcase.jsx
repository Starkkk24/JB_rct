
import styles from '../static/css/home.module.css'


function HotShowcase({siimg, iimg, name, cmnt, by_name}){
    return(
        <div className={styles['hot-showcase']}>
            <article>
                <div><a href="#"></a></div>
                <div><img className={styles['artticle-image']} src={siimg} alt="Show_image" /></div>
                <div className={styles.domain}><img src={iimg} alt="" /> {name}</div>
                <div className={styles['news-head']}><a href="#">{cmnt}</a></div>
                <div className={styles['article-update-details']}>
                    <time>1 hour ago</time>
                    <hr />
                    <p>By {by_name}</p>
                </div>
            </article>
        </div>
    )
}

export default HotShowcase