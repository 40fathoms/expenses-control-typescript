import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #f8f2f5;
        --shape: #ffffff;

        --red: #e52e40;
        --blue: #5429cc;
        --green: #33cc95;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size: 16px;
    html{   
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.75; //14px
        } 
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        inset: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .react-modal-content{
        width: 100%;
        max-width: 500px;
        background: var(--background);
        padding: 3px;
        position: relative;
        border-radius: 5px;
    }

    .react-modal-close{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: none;
        background: transparent;

        &:hover{
            filter: brightness(0.9);
            cursor: pointer;
        }
    }
`;
