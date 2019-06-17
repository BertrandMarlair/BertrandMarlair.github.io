import { createMuiTheme } from '@material-ui/core/styles'
import {defaultFont} from 'style/constant'

export const theme = createMuiTheme({
    palette:{
        type: 'dark',
        common:{
            black:'#000',
            white:'#fff'
        },
        background:{
            paper:'#fff',
            default:'#fafafa'
        },
        primary:{
            light:'rgba(54, 198, 212, 0.44)',
            main:'rgb(68, 134, 187)',
            dark:'rgba(18, 156, 169, 1)',
            contrastText:'#fff'
        },
        secondary:{
            light:'rgba(75, 96, 110, 1)',
            main:'rgba(19, 35, 46, 1)',
            dark:'rgba(5, 12, 18, 1)',
            contrastText:'#fff'
        },
        error:{
            light:'#e57373',
            main:'#f44336',
            dark:'#d32f2f',
            contrastText:'#fff'
        },
        typography: {
            useNextVariants: true,
            fontFamily: defaultFont.fontFamilyArray.join(','),
        },
    },
    typography: {
        useNextVariants: true,
    },
})
