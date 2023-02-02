import Dropdown from 'react-bootstrap/Dropdown';
import style from '/styles/navbarbtn.module.css'

function NavbarBtns2(props:any) {
  return (
   <button className={style.navbarbtn}>
    hello
   </button>
  );
}

function NavbarBtns(props:any) {
  return (
    <Dropdown >
      <Dropdown.Toggle style={{ backgroundColor: "#f9fafd" , color:'black' , border:'0'}} id="dropdown-basic">
        {props.btnValue}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NavbarBtns;
export {NavbarBtns2}