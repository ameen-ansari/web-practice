import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import MyNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarBtns from "./NavbarBtns";
import style from "styles/Navbar.module.css";
import Image from "next/image";
import logo from "/Images/logo.png";
import { NavbarBtns2 } from "./NavbarBtns";

function Navbar() {
  return (
    <MyNavbar style={{ backgroundColor: "#f9fafd" }} expand="lg">
      <Container fluid>
        <div className={`${style.NavbarInnerArea} container`}>
          <Image
            src={logo}
            alt="Logo"
            width={45}
            height={45}
            style={{ margin: "0px 1rem" }}
          />
          <div style={{ display: "flex", gap: "1rem" }}>
            <NavbarBtns btnValue="Hypeindustry" />
            <NavbarBtns btnValue="Hype Offers" />
            <NavbarBtns btnValue="Shipping" />
            <MyNavbar.Brand>Seller Request Form</MyNavbar.Brand>
          </div>
        </div>
      </Container>
    </MyNavbar>
  );
}

export default Navbar;
