import { DefaultTheme, css } from 'styled-components'

const myTheme: DefaultTheme = {
    borderRadius: '5px',

    colors: {
        main: 'cyan',
        secondary: 'magenta',
    },

    contentCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `
}

export { myTheme }