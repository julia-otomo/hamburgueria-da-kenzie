import { createGlobalStyle } from "styled-components";

export const GlobalSTyles = createGlobalStyle`
    :root{
       --color-primary: #27AE60;
       --color-primary-50: #93D7AF;
       --color-secondary: #EB5757;
       --grey-100: #333333;
       --grey-50: #828282;
       --grey-20: #E0E0E0;
       --grey-0: #F5F5F5;
       --font-weight-bold: 700;
       --font-weight-semi-bold: 600;
       --font-weight-regular: 400;
       --title-1: 1.625rem;
       --title-2: 1.375rem;
       --title-3: 1.125rem;
       --title-4: 0.875rem;
       --headline: 1rem;
       --body-font-size: 0.875rem;
       --caption: 0.75rem;
       --line-height-default: 150%;
       --border-radius-default: 5px;
       --border-radius-default-2: 8px;
    }

    .App {
        font-family: 'Inter', sans-serif;
        width: 100vw;
    }
`;
