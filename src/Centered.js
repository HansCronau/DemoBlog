import React from 'react'
import { Grid } from 'semantic-ui-react'

const Centered = ({children}) =>
  <Grid centered columns={3}>
    <Grid.Column>
      {children}
    </Grid.Column>
  </Grid>

export default Centered
