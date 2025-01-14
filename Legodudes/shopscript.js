console.log(products)

// Gå igjennom alle produkter, generere HTML for hvert produkt, skruve dette til index.html

// Lager oss en variabel som kan holde på HTML-en for produktene

let productHTML = ""

products.map((product, index) => productHTML+= 

            `<article class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL" />
                <a href="#KATEGORISIDE">Ninjago</a>
                <h3>${product.title}</h3>
                <p>Kr. ${product.price},-</p>
                <button>Legg i handlekurv</button>
            </article>`)

// Finn #productlist, og fyll den med verdiene i variabelen productHTML
// Husk på å ta ting steg for steg, finn de minste problemene og løs de. 

document.getElementById("productlist").innerHTML = productHTML;