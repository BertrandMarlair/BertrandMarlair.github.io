const HeaderStyle = {
    container: {
        height: 140,
    },
    header: {
        margin: '0 auto',
        height: '100%',
        padding: 20,
        display: 'flex',
        maxWidth: 980,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    linkContainer: {
        display: 'flex',
    },
    side: {
        display: 'flex',
    },
    iconMenu: {
        color: 'white',
        fontSize: 50,
        cursor: 'pointer',
    },
    logo: {
        height: '100%',
    },
    link: {
        width: 120,
        display: 'block',
        padding: 10,
        textAlign: 'center',
        color: 'white',
        cursor: 'pointer',
        '&:hover': {
            opacity: 1,
            color: '#eeeeee',
        },
        '&:after': {
            top: 10,
            width: 0,
            height: 4,
            content: '""',
            display: 'block',
            opacity: 0,
            position: 'relative',
            background: '#44abde',
            transition: 'opacity, width',
            transitionDuration: '.3s',
            borderRadius: 15,
        },
        '&:hover:after': {
            opacity: 1,
            width: '100%',
        }
    }
}

export default HeaderStyle;