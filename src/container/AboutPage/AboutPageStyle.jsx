const AboutPageStyle = {
    title: {
        color: 'white',
        fontSize: 60,
        '@media (max-width: 600px)': {
            fontSize: 35,
        },
    },
    titleSecond: {
        color: 'white',
        fontSize: 50,
        textAlign: "center",
    },
    subTitle: {
        color: '#fff',
        fontSize: '1.2rem',
        lineHeigth: 25,
        marginTop: 50
    },
    container: {
        maxWidth: '1200px',
        minWidth: '30px',
        margin: 'auto',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        '@media (min-width: 1200px)': {
            flexDirection: 'row',
        },
    },
    content: {
        width: '60%',
        '@media (max-width: 1200px)': {
            width: '100%',
        },
    },
    sticky: {
        height: '100vh',
        width: '100%',
    },
    animation: {
        width: '40%',
        '@media (max-width: 1200px)': {
            width: '100%',
        },
    },
    imagesStack: {
        margin: 'auto',
    },
    images: {
        width: '100px',
        margin:'auto',
        display: 'block',
    },
    arrow: {
        fontSize: 70,
        color: "white",
        '@media (max-width: 1200px)': {
            transform: 'rotate(-90deg)'
        },
    },
    icon: {
        margin: "70px 10px",
        textAlign: 'center',
    },
    margin: {
        margin: 4,
    },
    textField: {
        flexBasis: 200,
    },
    header: {
        maxWidth: '1200px',
        minWidth: '30px',
        margin: 'auto',
        padding: 20,
    },
    text: {
        fontSize: '1.1em',
        lineHeight: '1.35em',
        color: 'white',
        marginBottom: 40,
    },
    subTitle2: {
        color: 'white',
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center',
    },
    paragraph: {
        marginTop: 10,
    },
    stackContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '@media (min-width: 1200px)': {
            flexDirection: 'column',
        },
    },
    li: {
        listStyleType: 'unset',
        textAlign: 'unset',
        margin: '3px 20px',
    }
}

export default AboutPageStyle;