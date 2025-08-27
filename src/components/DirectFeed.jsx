import styles from '../static/css/home.module.css'

// const iimg = stark
// const lnk = "https://escape-atlas.onrender.com/listing/68793533e7780928b29e87b0"

function DirectFeed({iimg, name, lnk, cmnt}){
    return(
        <div className={styles['direct-feed']}>
            <div className={styles.domain}><img src={iimg} alt="p_image" /> {name}</div>
            <div className={styles['direct-head']}><a href={lnk} target="_blank" rel="noopener noreferrer">{cmnt}</a></div>
            <div><time>1 hour ago</time></div>
        </div>
    )
}
export default DirectFeed