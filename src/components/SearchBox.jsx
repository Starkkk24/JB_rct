
import styles from '../static/css/Feed.module.css'
// function SearchBox(){
//     return(
//     <div class="search-box">
//         <i class="fas fa-search"></i>
//         <input type="text" placeholder="Search"/>
//     </div>
//     )
// }


function SearchBox() {
  return (
    <div className={styles['search-box']}>
      <i className="fas fa-search"></i>
      <input type="text" placeholder="Search" />
    </div>
  );
}
export default SearchBox