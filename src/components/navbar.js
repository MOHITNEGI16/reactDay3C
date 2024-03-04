import "./Navbar.css";
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
            <a href="https://geekfood.vercel.app/">Home</a>
          </li>
          <li>
            <a href="https://geekfood.vercel.app/">Quote</a>
          </li>
          <li>
            <a href="https://geekfood.vercel.app/">Resturants</a>
          </li>
          <li>
            <a href="https://geekfood.vercel.app/">Food</a>
          </li>
          <li>
            <a href="https://geekfood.vercel.app/">Contact</a>
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
