import { Navbar as Menu, Container} from "react-bootstrap";

function Navbar() {
  return (
    <>
      <Menu bg="dark" variant="dark">
        <Container>
          <Menu.Brand href="#home">Dynamic <b>Form</b></Menu.Brand>
          <Menu.Toggle />
          <Menu.Collapse className="justify-content-end">
            <Menu.Text>
              Signed in as: <a href="https://portafolio-web-db.onrender.com/" target="_blank" rel="noreferrer">Daniel Boscán</a>
            </Menu.Text>
          </Menu.Collapse>
        </Container>
      </Menu>
    </>
  );
}

export default Navbar;
