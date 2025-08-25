import '../static/css/nav.css';
import logo from '../static/img/logo.png';
import stark from '../static/img/stark.png';
import { Outlet, Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="page_wrap">
            <div className="section_wrap">
                <header role="banner">
                    <div className="wrap">
                        <div className="nav_up">
                            <nav className="bar">
                                <div className="nav_logo">
                                    <Link to="/"><img src={logo} alt="logo" /></Link>
                                </div>                    
                                <div className="nav_links">
                                    <ul>
                                        <li><Link to="/feed">Students</Link></li>
                                        <li><a href="#clubs">Clubs</a></li>
                                        <li><a href="#latest">Latest</a></li>
                                        <li><a href="#acad">University</a></li>
                                        <li><a href="#dep">Departments</a></li>
                                        <li><a href="#map">Map</a></li>
                                    </ul>
                                </div>                    
                            </nav>
                            <div className="nav_down">
                                <Link className="Profile-link" to="/profile">
                                    <div className="profile_btn_wrap">
                                        <div className="profile_btn_left">
                                            <div className="post_profile_logo">
                                                <img src={stark} alt="pp" />
                                            </div>                            
                                        </div>
                                        <div className="profile_btn_right">
                                            <span>Stark</span>
                                            <p>@starkkk24</p>
                                        </div>
                                    </div>
                                </Link>                        
                            </div>
                        </div>
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
