
const data_cards1  = {
    id : "card1",
    Title_typo : "Github",
    titledesc:"github.com / erlanggaht",
    desc : "take a look at my repository on github. gass brother",
    textbutton : "see repositories",
    link : "https://github.com/erlanggaht",
    cardsBg : "cardsImages1"
}

const data_cards2  = {
    id : "card2",
    Title_typo : "Links",
    titledesc:"erlanggaht.vercel.app",
    desc : "My bio link can be seen at erlanggaht vercel",
    textbutton : "see bio",
    link : "http://erlanggaht.vercel.app",
    cardsBg : "cardsImages2"

}

const data_cards3  = {
    id : "card3",
    Title_typo : "Projects",
    titledesc:"see all projects",
    desc : "projects that I've made.",
    textbutton : "see projects",
    link : "https://erlanggaht.vercel.app/projects",
    cardsBg : "cardsImages3"

}

const data_cards4  = {
    id : "card4",
    Title_typo : "Settings",
    titledesc:"set this webview ",
    desc : "set the dark and light mode of this web to make it look more attractive.",
    textbutton : "lightmode",
    link : "https://github.com/erlanggaht",
    cardsBg : "cardsImages4 cardsBg4"

}


const data_cards5  = {
    id : "card5",
    Title_typo : "Skills",
    titledesc:"my ability",
    desc : "skills that I have mastered ",
    textbutton : "overview skills",
    link : "",
    cardsBg : "cardsImages5"

}

const data_cards6  = {
    id : "card6",
    Title_typo : "Linkedin",
    titledesc:"my linkedin",
    desc : "I always look for job vacancies on linkedin ",
    textbutton : "look at my linkedin",
    link : "https://www.linkedin.com/in/erlangga-hidayatullah-60b53b262/",
    cardsBg : "cardsImages6"

}


export default function Cards_props() : object {

   

    return {
        data_cards1,
        data_cards2,
        data_cards3,
        data_cards4,
        data_cards5,
        data_cards6

    }
    
}
