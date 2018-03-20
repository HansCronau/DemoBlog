import React from 'react'
import { Grid, Dropdown } from 'semantic-ui-react'

const SiteHeader = () => (
    <header>
        <a href='/' className='App-companyLogoLink'>
            <img src='/images/logo.png' alt='Logo' className='App-companyLogo' />
        </a>
        <nav>
            <Grid columns='equal' verticalAlign='bottom'>
                <Grid.Column>
                    <Dropdown floating text='Software' />
                </Grid.Column>
                <Grid.Column>
                    <Dropdown floating text='Organisatie' />
                </Grid.Column>
                <Grid.Column>
                    <Dropdown floating text='Downloads' />
                </Grid.Column>
                <Grid.Column>
                    Contact
                </Grid.Column>
                <Grid.Column>
                    <a href='/' className='Header-loginButton'>Login</a>
                </Grid.Column>
            </Grid>
        </nav>
    </header>
)

export default SiteHeader


