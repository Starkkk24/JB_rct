import styles from '../static/css/home.module.css'
import hd from '../static/img/hd.png'
import zgb from '../static/img/zgb.png'
import stark from '../static/img/stark.png'
import en from '../static/img/en.png'
import news from '../static/img/news.jpg'
import P from '../static/img/P.png' 
import SP from '../static/img/SP.png' 
import SA from '../static/img/SA.png' 
import SR from '../static/img/SR.png' 
import cc from '../static/img/cc.png' 
import JGi from '../static/img/JGi.png' 
import DirectFeed from '../components/DirectFeed'
import HotShowcase from '../components/HotShowcase'
import CurrentTime from '../components/CurrentTime'
import {Link } from 'react-router-dom';




const event = "NOW ⏳"
const today = new Date();
const options = { weekday: 'long', day: 'numeric', month: 'long' }; 
const formattedDate = today.toLocaleDateString('en-US', options);


function Home() {

    return (
        <div className={styles['page-wrap']}>
            <section className={styles['section-1']}>
                <div className={styles['head-space']}>
                    <div className={styles['left-space']}>
                        <h1>Today's Update !</h1>
                        <div className={styles.date}><p>{formattedDate}</p></div>
                        <div className={styles.timeText}><p><CurrentTime/></p></div>
                    </div>
                    <div className={styles.day}>
                        <span>{event}</span>
                    </div>
                </div>

                <div className={styles['section-1-wrap']} id="latest">
                    <div className={styles['hot-feed-space']} id="wrap1">
                        <h2>Jain Top Updates !</h2>
                        <hr />
                        <div className={styles['hot-feed-content']}>
                            <HotShowcase siimg={hd} iimg={zgb} name={"Zigbee Club"} cmnt={"Zigbee Club has launched their Brand new Website.."} by_name={"Thahari Lakshamiii"} />
                            <div className={styles['hot-directs']}>
                                <DirectFeed iimg={stark} name="Stark" lnk={"https://escape-atlas.onrender.com/listing/68793533e7780928b29e87b0"} cmnt="Please check my comment about this place on WanderLust!..." />
                                <DirectFeed iimg={en} name="Enigma Club" lnk={"/"} cmnt="Please give your names for the event! Inceptrix is on the edge!" />
                                <DirectFeed iimg={JGi} name="Jain" lnk={"/"} cmnt="New Session 2025-2026 is commencing on 28 Aug 2025! Please be prepare to face the college drama again!" />
                                <DirectFeed iimg={JGi} name="Jain" lnk={"/"} cmnt="Tomorrow (25-7-2025 ) is the last date to apply for revaluation 1-8 semesters" />
                            </div>
                        </div>
                        <hr />

                        <div className={styles['hot-feed-content']}>
                            <HotShowcase siimg={news} iimg={P} name={"Publisher"} cmnt={"Top Updates HEADLINE will be shown here !..."} by_name={"Author"} />
                            <div className={styles['hot-directs']}>
                                <DirectFeed iimg={P} name={"Publisher"} lnk={"/"} cmnt={"Top Updates HEADLINE will be shown here !..."} />
                                <DirectFeed iimg={P} name={"Publisher"} lnk={"/"} cmnt={"Top Updates HEADLINE will be shown here !..."} />
                                <DirectFeed iimg={P} name={"Publisher"} lnk={"/"} cmnt={"Top Updates HEADLINE will be shown here !..."} />
                                <DirectFeed iimg={P} name={"Publisher"} lnk={"/"} cmnt={"Top Updates HEADLINE will be shown here !..."} />
                            </div>
                        </div>
                        <hr />
                    </div>

                    <div className={styles['other-feed-space']}>
                        <div className={styles['other-section-wrap']}>
                            <h2>Club Updates !</h2>
                            <hr />
                            <div className={styles['clubs-feed-space']}>
                                 <DirectFeed 
                                   iimg={zgb} 
                                   name="Zigbee Club" 
                                   lnk="#" 
                                   cmnt="Zigbee Club has launched their Brand new Website..." 
                                 />
                                 <hr />
                                 <DirectFeed 
                                   iimg={en} 
                                   name="Enigma Club" 
                                   lnk="/" 
                                   cmnt="Please give your names for the event! Inceptrix is on the edge!" 
                                 />
                                 <hr />
                                 <DirectFeed 
                                   iimg={cc} 
                                   name="Cognito Club" 
                                   lnk="#" 
                                   cmnt="Checkout the new Challenge on UI/UX !" 
                                 />
                                 <hr/>

                                 <Link to='/'>Go to Clubs Page</Link>
                            </div>
                        </div>

                        <div className={styles['other-section-wrap']} id="wrap2">
                            <h2>Student Space !</h2>
                            <hr />

                            <div className={styles['clubs-feed-space']}>
                                <DirectFeed iimg={stark} name="Stark" lnk={"https://escape-atlas.onrender.com/listing/68793533e7780928b29e87b0"} cmnt="Please check my comment about this place on WanderLust!..." />
                                <hr />

                                <DirectFeed 
                                  iimg={SR} 
                                  name="Saswath R" 
                                  lnk="#" 
                                  cmnt="I'm selling my old Karakoram room! Interested people pls DM!" 
                                />
                                <hr />

                                <DirectFeed 
                                  iimg={SA} 
                                  name="Stuti Agrawal" 
                                  lnk="#" 
                                  cmnt="I've just uploaded an Article on this site! Please check it out!" 
                                />
                                <hr />

                                <DirectFeed 
                                  iimg={SP} 
                                  name="Shivom Paul" 
                                  lnk="https://escape-atlas.onrender.com/listing" 
                                  cmnt="Please book your trip now on WanderLust!" 
                                />
                                <hr/>
                                 <Link to='/f'>Students Page</Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
