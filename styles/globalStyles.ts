import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: var(--color-background);
        background-image: url("./assets/background-stars.svg");
        background-attachment: fixed;
        background-size: cover;
        color: #fff;
        font-family: var(--font-primary);

        ::-webkit-scrollbar {
        width: 10px;
        }

        ::-webkit-scrollbar-track {
        background: var(--color-background);
        }

        ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, .15);
        border-radius: 6px;
        }
    }
`;
