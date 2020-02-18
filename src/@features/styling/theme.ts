import { DefaultTheme, css } from 'styled-components'

const myTheme: DefaultTheme = {
    borderRadius: '5px',

    colors: {
        main: '#6666FF',
        black: 'black'
    },

    contentCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `
}

export { myTheme }