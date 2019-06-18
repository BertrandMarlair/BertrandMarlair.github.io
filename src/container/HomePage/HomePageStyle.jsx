const HomePageStyle = {
    title: {
        color: 'white',
        fontSize: 45,
        '@media (max-width: 600px)': {
            fontSize: 35,
        },
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
        '@media (max-width: 500px)': {
            width: 100,
            height: 140,
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
        '@media (max-width: 500px)': {
            width: 120,
            height: 230,
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
    }
}

export default HomePageStyle;