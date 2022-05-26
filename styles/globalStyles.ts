import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: var(--color-background);
        background-image: url("./assets/background-stars.svg");
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
    }
`;
