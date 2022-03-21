import styled from "styled-components"
import {css} from "styled-components"

// con prop (cambiar estilos desde el componente a traves de propiedades) (se puede desestructurar o enviar completa (prop)). Tambien puedo tomar como prop el Theme de ThemeProvider declarado een app
export const StyledHeader = styled.header(({theme, type}) => {
    
    // asigno el type (que esta desestructurado) como la prop que me viene del header, en ese caso el valor que vino fue primary. Aegun la variable de objeto de abajo, primary es igual al color dodgerblue(traido de theme), por lo tango el background será de ese color
    const headerColor = {
        primary: `${theme.colors.primary}`,
        secondary: theme.colors.secondary
    }

    // el bg será del color dodgerblue xq vino primary desde el header como propiedad. Dependiendo de lo que ponga en el componente cambiará el color
    return css`
    background-color: ${headerColor[type]};
    h1 {
        color: black;
        &:hover{
            background-color: green;
        }
    }
`})



// sin props 

// export const StyledHeader = styled.header`
//     background-color: red;
//     h1 {
//         color: white;
//         &:hover{
//             background-color: green;
//         }
//     }
// `;