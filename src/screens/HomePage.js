import Button from "../components/Button";
import Navbar from "../components/navbar";
import DesCard from "../components/DesCard.js";
import Footer from "../components/Footer.js";
import "./homePage.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <section id="hero">
        <div id="info">
          <h1>
            Let us find your{" "}
            <span>
              <br />
              Forever Food.
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <span id="pSpan">
              <br />
              Nesciunt illo tenetur fuga ducimus numquam ea!
            </span>
          </p>

          <div id="buttons">
            <Button
              radius={"5px"}
              width={"47%"}
              bgColor={"#E11D48"}
              color={"#FFFFFF"}
              size={"1rem"}
              weight={"700"}
            >
              Search Now
            </Button>
            <Button
              radius={"5px"}
              width={"47%"}
              bgColor={"#FFFFFF"}
              color={"rgb(225,29,72)"}
              size={"1rem"}
              weight={"700"}
            >
              Know More
            </Button>
          </div>
        </div>
      </section>

      <section id="property_section">
        <div id="property_section_details_main">
          <div id="property_section_details">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              debitis.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              molestiae! Quidem est esse numquam odio deleniti, beatae, magni
              dolores provident quaerat totam eos, aperiam architecto eius quis
              quibusdam fugiat dicta.
            </p>
            <Button
              weight={"bolder"}
              width={"39%"}
              height={"15%"}
              bgColor={"#4F46E5"}
              color={"#FFFFFF"}
              radius={"5px"}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <div id="property_section_image">
          <img
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="propertyImage"
          />
        </div>
      </section>

      <section id="card_section">
        <DesCard
          image={
            "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
          }
          name={"Gladis Lennon"}
          post={"Head of SEO"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima
          dicta amet, molestiae aliquam incidunt suscipit recusandae labore
          ratione doloremque, architecto et illo minus quo tenetur ducimus,
          voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti
          blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad
          inventore laudantium est illum voluptatem quis.
        </DesCard>
        <DesCard
          image={
            "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
          }
          name={"Gladis Lennon"}
          post={"Head of SEO"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae
          incidunt perferendis soluta facilis voluptas dicta repudiandae quasi
          asperiores libero, exercitationem molestiae autem sapiente dolore
          nulla non consequatur. Eaque, dolores.
        </DesCard>
        <DesCard
          image={
            "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
          }
          name={"Gladis Lennon"}
          post={"Head of SEO"}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a
          voluptatum quidem nulla quisquam natus velit provident earum esse,
          odio numquam labore recusandae similique sunt.
        </DesCard>
        <DesCard
          image={
            "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
          }
          name={"Gladis Lennon"}
          post={"Head of SEO"}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel
          quo deserunt quos expedita minima incidunt sed tempora, a architecto
          consectetur reprehenderit, in repellat voluptatum.
        </DesCard>
        <DesCard
          image={
            "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
          }
          name={"Gladis Lennon"}
          post={"Head of SEO"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          doloribus eius aut unde, dolores accusantium!
        </DesCard>
        <DesCard
          image={
            "https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
          }
          name={"Gladis Lennon"}
          post={"Head of SEO"}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut
          necessitatibus, repudiandae qui dolor minima.
        </DesCard>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
