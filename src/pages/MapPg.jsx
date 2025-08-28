import {Outlet, Links} from 'react-router-dom';
import styles from '../static/css/map.module.css';

function MapPg(){
    return(
        <>
        <div className={styles.PageWrap}>
            <div><h1>Jain Map</h1></div>
                        
            <div className={styles.map}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1982.0400668299592!2d77.44092177329469!3d12.640660157775718!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae5bbc37fa2487%3A0xeed08fc42932ae97!2sJain%20University!5e1!3m2!1sen!2sin!4v1756412268752!5m2!1sen!2sin" 
                    width="1000" 
                    height="650" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="JAIN University Location Map">
                </iframe>
            </div>
        </div>
        </>
    )
}

export default MapPg