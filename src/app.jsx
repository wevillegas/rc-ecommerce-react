import React from 'react'
import { Header } from "./shared/header/header"
// el theme provider me sirve para envolver toda la aplicacion, le enviamos una propiedad para poder establecer logica global que engloba a toda la aplicacion
import { ThemeProvider } from "styled-components"
import { baseTheme } from "./theme"

export const App = () => {
    return (
        <ThemeProvider theme={baseTheme}>
            <Header />
            <h1>Titulo</h1>
            <div>App</div>
        </ThemeProvider>
    )
}
