import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

type NavBarProps = {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};
const NavBar: React.FC<NavBarProps> = ({ setCategory }) => {
  return (
    <>
      <Navbar
        bg="dark"
        sticky="top"
        collapseOnSelect
        expand="sm"
        data-bs-theme="dark"
      >
        <>
          <Navbar.Brand href="#home" className="ms-3">
            <span className="badge bg-light text-dark fs-4">Newsbar</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <Nav.Link onClick={() => setCategory("business")}>
                business
              </Nav.Link>
              <Nav.Link onClick={() => setCategory("health")}>health</Nav.Link>
              <Nav.Link onClick={() => setCategory("sports")}>sports</Nav.Link>
              <Nav.Link onClick={() => setCategory("entertainment")}>
                entertainment
              </Nav.Link>
              <Nav.Link onClick={() => setCategory("science")}>
                science
              </Nav.Link>
              <Nav.Link onClick={() => setCategory("technology")}>
                technology
              </Nav.Link>
              <Nav.Link onClick={() => setCategory("general")}>
                general
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
      </Navbar>
    </>
  );
};

export default NavBar;
