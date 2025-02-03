export default function header(){
    return(
        <header>
        <a href="index.html" id="logo">
          <img src="website_images/LD_logo.svg" alt="Legodudes" />
        </a>
        <button id="shoppingcart">
          <span id="cartcount">99</span>{" "}
          {/* Viser antall varer i handlekurven */}
          <img src="website_images/legocart.svg" alt="Handlevogn" />
        </button>

        {/* Navigasjonskomponenten */}
        <Nav />
      </header>
    );
}