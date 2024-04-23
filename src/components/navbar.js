import "./Navbar.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Button from "./Button";
function Navbar() {
  return (
    <>
      <nav>
        <div id="image">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Project_logo"
            width="50px"
            height="50px"
          />
          <h3>GeekFoods</h3>
        </div>

        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/quotes">Quote</Link>
          </li>
          <li>
            <Link to = "/resturants">Resturants</Link>
          </li>
          <li>
            <Link to = "/food">Food</Link>
          </li>
          <li>
            <Link to = "/contact">Contact</Link>
          </li>
        </ul>

 
        <Button
          bgColor={"rgb(37,99,235)"}
          color={"#FFFFFF"}
          radius={"10px"}
          width={"9vw"}
          height={"7vh"}
          weight={"600"}
          size={"0.8rem"}
        >
          Get Started
        </Button>
      </nav>
    </>
  );
}

export default Navbar;
