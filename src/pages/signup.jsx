import { Link } from 'react-router-dom';
import styles from '../static/css/signup.module.css';

function SignUp() {
    return (
        <div className={styles['page-wrap']}>
            <div className={styles['signup-card']}>
                <div className={styles.head}>
                    <h2>SignUp</h2>
                    <p>Be the part of<br />The ConnectSphere of Jain!</p>
                </div>
                <div className={styles['entry-fields']}>
                    <div className={styles['entry-field']} id="entry-field-2">
                        <label className={styles.login_name}>Nick name</label>
                        <div>
                            <input className={styles['input-field']} type="text" id="username" placeholder="name to show" required />
                        </div>
                    </div>
                    <div className={styles['entry-field']} id="entry-field-5">
                        <label className={styles.login_usn}>USN</label>
                        <div>
                            <input className={styles['input-field']} type="text" id="usn" placeholder="USN" maxLength="10" required />
                        </div>
                    </div>
                    <div className={styles['entry-field']} id="entry-field-5">
                        <label className={styles.login_email}>Email</label>
                        <div>
                            <input className={styles['input-field']} type="email" id="email" placeholder="@gmail.com" required />
                        </div>
                    </div>
                    <div className={styles['entry-field']} id="entry-field-4">
                        <label className={styles.login_password}>Password</label>
                        <div>
                            <input className={styles['input-field']} type="password" id="password" placeholder="password" required />
                        </div>
                    </div>
                    <div className={styles['submit-button']}>
                        <button type="submit" className={styles.signup}>SignUp</button>
                    </div>
                </div>
            </div>
            <div className={styles['card-shoe']}>
                <span><p>Already a JBian? <Link to="/l">Login!</Link></p></span>
            </div>
        </div>
    );
}

export default SignUp;
