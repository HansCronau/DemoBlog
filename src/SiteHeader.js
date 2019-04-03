import React from 'react'
import { Link } from "react-router-dom"
import { Grid, Dropdown } from 'semantic-ui-react'

const SiteHeader = () => (
    <header>
        <Link to='/' className='App-companyLogoLink'>
            <img src='/images/logo.png' alt='Logo' className='App-companyLogo' />
        </Link>
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
                    <Link to='/' className='Header-loginButton'>Login</Link>
                </Grid.Column>
            </Grid>
        </nav>
    </header>
)

export default SiteHeader


