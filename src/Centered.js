import React from 'react'
import { Grid } from 'semantic-ui-react'

const Centered = ({children}) =>
    <Grid columns='equal'>
        <Grid.Column />
        <Grid.Column>
            {children}
        </Grid.Column>
        <Grid.Column />
    </Grid>

export default Centered
