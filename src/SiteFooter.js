import React from 'react'
import { Grid } from 'semantic-ui-react'

const SiteFooter = () => (
    <footer>
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <b>EcoChain</b><br />
                    Software<br />
                    Voordelen voor marketing<br />
                    Voordelen voor productie<br />
                    Voordleen voor inkoop<br />
                </Grid.Column>
                <Grid.Column>
                    <b>EcoChain helpt u bij</b><br />
                    LCA<br />
                    Schaduwkosten<br />
                    Ketentransparantie<br />
                    Milieuprestatieberekening<br />
                    Gebouw (MPG)<br />
                </Grid.Column>
                <Grid.Column>
                    <b>Over EcoChain</b><br />
                    Demonstraties<br />
                    Nieuws<br />
                    Blog<br />
                    Vacatures<br />
                </Grid.Column>
                <Grid.Column>
                    <b>EcoChain Technologies BV</b><br />
                    Oostenburgermiddenstraat 202<br />
                    1018 LL Amsterdam, Nederland<br />
                    +31 (0)20 30 35 777<br />
                    info@ecochain.com<br />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <div className='Footer-copyright'>&copy; Ecochain | Privacy | Voorwaarden | Sitemap | Powered by Hans</div>
            </Grid.Row>
        </Grid>
        
    </footer>
)

export default SiteFooter
