import { slugifyer } from "./helpers";

export const product = {
    name: "product",
    title: "produkt",
    type: "document",
    fields: [
        {
            name: "producttitle",
            title: "produktnavn",
            type: "string"
        },
        {
            name: "slug",
            title: "Pen URL",
            type: "slug",
            // Når vi bruker options, får vi opp den "generate" i Sanity siden.
            options: {
                source: "producttitle",
                slugify: input => slugifyer[input]
            }
        },
        {
            name: "productimage",
            title: "produktbilde",
            type: "image"
        },
        {
            name: "price",
            title: "pris",
            type: "number",
        },
        {
            name: "category",
            title: "kategori",
            type: "reference", // her brukes refrance istenefor "string", om man bruker refrance må man ha den "   to: [{type: ""}]" for å vise hva du skal ha 
            to: [{type: "category"}]
        }
    ]
}