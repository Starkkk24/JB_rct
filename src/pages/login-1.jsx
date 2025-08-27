import { Outlet, Link } from 'react-router-dom';
import styles from '../static/css/login-1.module.css';
import logo from '../static/img/logo.png';


function LogIn1() {
  return (
    <div className={styles['page-wrap']}>
        <div className={styles.left_wrap}>
            <img src={logo} />
        </div>
        <div className={styles.right_wrap}>
          <div className={styles['login-card']}>
        <div className={styles.head}>
          <h2><span>Log</span>In</h2>
          <p>
            Welcome to{" "}
            <Link to="/">The JB</Link>
            <br />
            The ConnectSphere of Jain!{" "}
          </p>
        </div>

        <div className={styles['entry-fields']}>
          <div className={styles['entry-field']} id="entry-field-1">
            <label className={styles.login_name}>Username</label>
            <div>
              <input
                className={styles['input-field']}
                type="text"
                id="username"
                placeholder="@username"
                required
              />
            </div>
          </div>

          <div className={styles['entry-field']} id="entry-field-2">
            <label className={styles.login_password}>Password</label>
            <div>
              <input
                className={styles['input-field']}
                type="password"
                id="password"
                placeholder="password"
                required
              />
            </div>
          </div>

          <div className={styles['submit-button']}>
            <button type="submit" className={styles.login}>Login</button>
          </div>

          <div className={styles['baaki-maal']}>
            <Link to="/">Forgot password?</Link>
          </div>
        </div>
          </div>

          <div className={styles['card-shoe']}>
        <span>
          <p>New to The JB? <Link to="/su1">Signup!</Link></p>
        </span>
          </div>

        </div>

    </div>
  );
}

export default LogIn1;
