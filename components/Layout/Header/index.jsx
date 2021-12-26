import Head from 'next/head'

const Header = (props) => {
    return(
        <Head>
            <title>{props.title}</title>
            <meta name="description" content="Johnny Personal Website" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href="https://saiwas.github.io"></link>
            
            {/* Bootstrap css  */}
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous">
            </link>

            {/* Icon Font */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
    )
}

export default Header
