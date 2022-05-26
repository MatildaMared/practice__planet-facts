import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: var(--color-background);
        background-image: url("./assets/background-stars.svg");
        background-attachment: fixed;
        background-size: cover;
    }
`;
