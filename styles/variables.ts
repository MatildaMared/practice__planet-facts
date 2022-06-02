import { createGlobalStyle } from "styled-components";

export const Variables = createGlobalStyle`
    :root {
        --font-primary: "League Spartan", sans-serif;
        --font-secondary: "Antonio", sans-serif;

        --color-background: hsl(240, 67%, 8%);

        --color-gray: #38384F;
        --color-gray-light: #838391;

        --color-mercury: #419EBB;
        --color-venus: #EDA249;
        --color-earth: #6D2ED5;
        --color-mars: #D14C32;
        --color-jupiter: #D83A34;
        --color-saturn: #CD5120;
        --color-uranus: #1ec2a4;
        --color-neptune: #2D68F0;
    }
`;
