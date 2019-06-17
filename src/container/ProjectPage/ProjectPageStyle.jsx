const ProjectPageStyle = {
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
    header: {
        maxWidth: '1200px',
        minWidth: '30px',
        margin: 'auto',
        padding: 20,
    },
    headerSingle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
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
        },
    },
    titleProject: {
        fontSize: 30,
        marginTop: 13,
        color: 'white',
        marginLeft: 10,
    },
    stackSelect: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 12
    },
    textContainer:{
        maxWidth: 1000,
        margin: 'auto',
        padding: 40,
    },
    title2: {
        color: 'white',
        fontSize: 50,
    },
    icon: {
        color: 'white',
        fontSize: 50,
        cursor: 'pointer',
    },
    subTitle2: {
        color: 'white',
        fontSize: 30,
        marginBottom: 20,
    },
    text: {
        fontSize: '1.1em',
        lineHeight: '1.35em',
        color: 'white',
        marginBottom: 40,
    }
}

export default ProjectPageStyle;