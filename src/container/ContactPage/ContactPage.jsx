import React from 'react'
import { withStyles } from '@material-ui/core';
import ContactPageStyle from './ContactPageStyle'
import posed from 'react-pose';
import Button from '../../component/CustomButtons/Button';
import { useTranslation } from 'react-i18next';

const ListContainer = posed.ul({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Item = posed.li({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});

const ContactPage = props => {

    const { classes } = props

    const { t } = useTranslation();

    const link = url => {
        window.open(url)
    }
    
    return(
        <ListContainer>
            <div className={classes.container}>
                <div className={classes.content}>
                    <Item>
                        <div className={classes.title}>{t('contact.title')}</div>
                    </Item>
                    <Item>
                        <div className={classes.subTitle} dangerouslySetInnerHTML={{ __html: t('contact.description')}}/>
                    </Item>
                    <div>
                        <Item>
                            <div className={classes.titleSecond}>{t('contact.subTitle')}</div>
                        </Item>
                        <div className={classes.socialButtons}>
                            <Item>
                                <div className={classes.button}>
                                    <Button icon color="github" onClick={() => link('https://github.com/bertrandmarlair')}>
                                        <img className={classes.icon} src="/images/logo/github.svg" alt="github"/>
                                        GitHub
                                    </Button>
                                </div>
                            </Item>
                            <Item>
                                <div className={classes.button}>
                                    <Button icon color="linkedin" onClick={() => link('https://www.linkedin.com/in/bertrand-marlair/')}>
                                        <img className={classes.icon} src="/images/logo/linkedin.svg" alt="linkedin"/>
                                        LinkeDin
                                    </Button>
                                </div>
                            </Item>
                            <Item>
                                <div className={classes.button}>
                                    <Button icon color="facebook" onClick={() => link('https://www.facebook.com/marlair.bertrand')}>
                                        <img className={classes.icon} src="/images/logo/facebook.svg" alt="facebook"/>
                                        FaceBook
                                    </Button>
                                </div>
                            </Item>
                        </div>
                    </div>
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

export default withStyles(ContactPageStyle)(ContactPage)