const LayoutStyle = {
    app: {
        minHeight: '100vh',
        background: 'linear-gradient(25deg, #26253e 2%, #363859 44%, rgba(255, 255, 255, 0) 0%), radial-gradient(farthest-corner at -90% -90%, #3b3d62 50%, #212135 90%)',
    },
    linkContainer: {
        display: 'block',
        position: 'absolute',
        top: 10,
        flexWrap: 'wrap',
        transform: 'translateX(-50%)',
        left: '50%',
        width: 'auto',
        transition: '0.3s',
        '@media (min-width: 1000px)': {
            left: 50,
            transform: 'translateY(-50%)',
            top: '50%',
        }
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

export default LayoutStyle