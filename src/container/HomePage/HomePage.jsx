import React from 'react'
import { withStyles } from '@material-ui/core';
import HomePageStyle from './HomePageStyle'
import posed from 'react-pose';
import Button from 'component/CustomButtons/Button'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ListContainer = posed.ul({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.li({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});

const HomePage = props => {

    const { classes } = props
    
    const { t } = useTranslation();

    return(
        <ListContainer>
            <div className={classes.container}>
                <div className={classes.content}>
                    <Item>
                        <div className={classes.title}>{t('homapage.title')}</div>
                        <div className={classes.title}>{t('homapage.subtitle')}</div>
                    </Item>
                    <Item>
                        <div className={classes.subTitle}>
                            <NavLink to={'/project'}>
                                <Button color="primary" big round>{t('homapage.button')}</Button>
                            </NavLink>
                        </div>
                    </Item>
                </div>
                <div className={classes.fioles}>
                    <Item>
                        <img src="/images/logo/1.png" className={classes.fiolle1} alt="fiole" />
                    </Item>
                    <Item>
                        <img src="/images/logo/2.png" className={classes.fiolle2} alt="fiole" />
                    </Item>
                    <Item>
                        <img src="/images/logo/3.png" className={classes.fiolle3} alt="fiole" />
                    </Item>
                </div>
            </div>
        </ListContainer>
    )
}

export default withStyles(HomePageStyle)(HomePage)