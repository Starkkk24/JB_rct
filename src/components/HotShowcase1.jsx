import styles from '../static/css/home.module.css'


function HotShowcase1({siimg, iimg, name, cmnt, cmnt1, link, by_name}){
    return(
        <div className={styles['hot-showcase1']}>
            <article>
                <div><a href="#"></a></div>
                <div><img className={styles['artticle-image1']} src={siimg} alt="Show_image" /></div>
                <div className={styles.domain}><img src={iimg} alt="" /> {name}</div>
                <div className={styles['news-head1']}>{cmnt}<br/>{cmnt1}<a href={link}> click here</a></div>
                <div className={styles['article-update-details']}>
                    <time>1 hour ago</time>
                    <hr />
                    <p>By {by_name}</p>
                </div>
            </article>
        </div>
    )
}

export default HotShowcase1