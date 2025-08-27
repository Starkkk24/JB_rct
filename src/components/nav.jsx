import styles from '../static/css/nav.module.css';
import logo from '../static/img/logo.png';
import stark from '../static/img/stark.png';
import { Outlet, Link } from 'react-router-dom';

const p_name = "Stark"
const p_username = "starkkk24"



function NavUp() {
  return (
    <nav className={styles.nav_up}>
      <div className={styles.nav_logo}>
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
      <div className={styles.nav_links}>
        <ul>
          <Link to="/f"><li>Student's Space</li></Link>
          <li><a href="#clubs">Clubs</a></li>
          <li><a href="#acad">University</a></li>
          {/* <li><a href="#dep">Departments</a></li> */}
          <li><a href="#map">Map</a></li>
        </ul>
      </div>
    </nav>
  );
}

function NavDown() {
  return (
    <div className={styles.nav_down}>
      <Link className={styles['Profile-link']} to="/l1">
        <div className={styles.profile_btn_wrap}>
          <div className={styles.profile_btn_left}>
            <div className={styles.post_profile_logo}>
              <img src={stark} alt="pp" />
            </div>
          </div>
          <div className={styles.profile_btn_right}>
            <span>{p_name}</span>
            <p>@{p_username}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function Nav() {
  return (
    <div className={styles.navwrap}>
        <div className={styles.section_wrap}>
          <header role="banner">
            <div className={styles.bar}>
              <NavUp />
              <NavDown />
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
    </div>
  );
}

export default Nav;
