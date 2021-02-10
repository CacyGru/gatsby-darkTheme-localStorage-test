import React, {useContext} from "react"
import { css, useTheme} from '@emotion/react'
import Context from '../store/context'
import Layout from '../components/Layout'


const IndexPage = () => {
const [state, dispatch] = useContext(Context)
const theme = useTheme()

return (
  <Layout>
    <div /* css={css`
          h1, h2 {
            color: ${state.isDark ? theme.dark.font : theme.ligth.font}
          }
    `} */>
      <h1>Hi World</h1>
    <button onClick={() => dispatch({type: "TOOGLE_DARK_MODE"})}>Toggle Dark</button>
  
    </div>
  </Layout>
)
}

export default IndexPage