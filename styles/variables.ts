import { createGlobalStyle } from "styled-components";

export const Variables = createGlobalStyle`
    :root {
        --font-primary: "League Spartan", sans-serif;
        --font-secondary: "Antonio", sans-serif;

        --color-background: hsl(240, 67%, 8%);

        --color-gray: #38384F;
        --color-gray-light: #838391;

        --color-mercury: #DEF4FC;
        --color-venus: #F7CC7F;
        --color-earth: #545BFE;
        --color-mars: #FF6A45;
        --color-jupiter: #ECAD7A;
        --color-saturn: #FCCB6B;
        --color-uranus: #65F0D5;
        --color-neptune: #497EFA;
    }
`;
