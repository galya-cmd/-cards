import './header.css';
function Header (){
    return (
        <>
        <nav className="menu-main">
        <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/dictionary'>Dictionary</a></li>
        <li><a href='/wordlist'>Table</a></li>            
        </ul>
        </nav>
        
        </>
    )
}
export default Header;