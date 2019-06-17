const ContactPageStyle = {
    title: {
        color: 'white',
        fontSize: 60,
    },
    subTitle: {
        color: '#fff',
        fontSize: '1.2rem',
        lineHeigth: 25,
        marginTop: 50
    },
    titleSecond: {
        marginTop: 20,
        color: 'white',
        fontSize: 40,
    },
    container: {
        maxWidth: '1200px',
        minWidth: '30px',
        margin: 'auto',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (min-width: 1200px)': {
            flexDirection: 'row',
            marginTop: '15vh',
        },
    },
    content: {
        // marginLeft: '15vw',
        // marginTop: '30vh',
        width: '60%',
        '@media (max-width: 1200px)': {
            width: '100%',
        },
    },
    socialButtons: {
        display: 'flex',
    },
    sticky: {
        height: '100vh',
        width: '100%',
    },
    fioles: {
        width: '40%',
        // position: 'absolute',
        // top: 280,
        // right: 50,
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-around',
        '@media (max-width: 1200px)': {
            width: '100%',
        },
    },
    fiolle1: {
        width: 162,
        height: 210,
        animationDuration: '3s',
        animationName: 'float',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        animationDirection: 'alternate',
        animationPlayState: 'running',
        '@media (max-width: 1200px)': {
            width: 122,
            height: 170,
        },
    },
    fiolle2: {
        width: 170,
        height: 320,
        animationDuration: '5s',
        animationName: 'float',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        animationDirection: 'alternate',
        animationPlayState: 'running',
        '@media (max-width: 1200px)': {
            width: 150,
            height: 270,
        },
    },
    fiolle3: {
        width: 140,
        height: 180,
        animationDuration: '7s',
        animationName: 'float',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        animationDirection: 'alternate',
        animationPlayState: 'running',
        '@media (max-width: 1200px)': {
            width: 100,
            height: 140,
        },
    },
    icon: {
        width: 20,
        height: 20,
        margin: "0 10px",
    },
    button: {
        margin: "10px",
    }
}

export default ContactPageStyle;