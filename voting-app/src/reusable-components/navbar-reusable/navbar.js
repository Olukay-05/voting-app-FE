import "./navbar.css";

const Navbar = ({...props}) => {

    return ( 
        <div>
           {props.children}
        </div>
     );
}
 
export default Navbar;