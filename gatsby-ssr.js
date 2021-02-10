import React from 'react'
import {ThemeProvider} from '@emotion/react'
import {theme} from './src/theme/theme'
import GlobalStateProvider from './src/store/GlobalStateProvider'

export const wrapRootElement = ({element}) => (
    <GlobalStateProvider>
        <ThemeProvider theme={theme}>
        {element}
        </ThemeProvider>
    </GlobalStateProvider>
)