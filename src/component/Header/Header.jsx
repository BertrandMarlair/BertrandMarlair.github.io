import React from 'react';
import { withStyles } from '@material-ui/core';
import HeaderStyle from './HeaderStyle';
import { useTranslation } from 'react-i18next';
import Button from "../CustomButtons/Button";
import { NavLink } from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from 'react-redux';

const Header = props => {
    const { classes } = props
    const { i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    const menu = useSelector(state => state.menuConfig)

    const dispatch = useDispatch()

    const toggleMenu = payload => dispatch({ type: 'TOOGLE_MENU', payload })

    const handleOpenMenu = () => {
        const root = document.getElementById('app')
        if(root){
            if (menu.open){
                root.classList.remove('open')
            }else{
                root.classList.add('open')
            }
            toggleMenu(!menu.open)
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <NavLink className={classes.logo} to={'/'}>
                    <img src="/images/logo/logo.png" alt="company logo" />
                </NavLink>
                <div className={classes.side}>
                    <div className={classes.linkContainer}>
                        <Button simple color="dark" onClick={() => changeLanguage('fr')}>fr</Button>
                        <Button simple color="dark" onClick={() => changeLanguage('en')}>en</Button>
                    </div>
                    <div className={classes.openMenu} onClick={() => handleOpenMenu()}>
                        {!menu.open ? (
                            <MenuIcon className={classes.iconMenu} />
                        ) : (
                            <CloseIcon className={classes.iconMenu} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withStyles(HeaderStyle)(Header);