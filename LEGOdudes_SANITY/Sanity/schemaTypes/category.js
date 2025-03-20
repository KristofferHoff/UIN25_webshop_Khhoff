export const category = {
    type: "document", 
    name: "category",
    title: "Kategori",
    fields: [
        {
            name: "categoryname",
            title: "Kategorinavn",
            type: "string"
        },
        {
            name: "categoryslug",
            title: "Pen URL",
            type: "slug",
            //slug har nå lov til å hente "caregoryname" fra options.
            options: {
                source: "categoryname",
                // slugify tar ut ÆØÅ osv. meningen for å få en pen URL
                //replace for å rett og slett bytte ut "&"" tegn så man ikke får den med i "Marine & Pirates"
                // "//g" betyr at man gårm... Den leter gjennom alle typer gjennomrom og tabber som ligger i teksten. 
                // 
                slugify: input => input.toLowerCase().replace("&","and").replace(/\s+/g, "-" ).replace(/[^a-z0-9- ]/g, "")
                //.replace(/[^a-z0-9- ]/g, "") gjør at det kun er lov å skrive bokstaver mellom a-z og tall 0-9. Hvis det er noe annet. Fjernes det
            }



        }   

    ]
}