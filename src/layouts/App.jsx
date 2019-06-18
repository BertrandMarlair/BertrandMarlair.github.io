import React, { Suspense, useEffect, useState } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from 'utils/theme/theme'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from "store/store";
import routes from 'router/route'
import { withTranslation } from 'react-i18next';
import Header from 'component/Header/Header';
import LayoutStyle from './LayoutStyle';
import { withStyles } from '@material-ui/styles';
import posed, { PoseGroup } from 'react-pose';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoaderScreen from 'component/LoaderScreen/LoaderScreen'

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Provider store={configureStore()}>
        <Wrapper />
      </Provider>
    </Suspense>
  );
}

export default App;

const Loader = () => <div/>

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 0, beforeChildren: true },
  exit: { opacity: 0 }
});

const Container = props => {
  const menu = useSelector(state => state.menuConfig)

  const [ open, setOpen ] = useState(false)
  const [ loaderOpen, setLoaderOpen ] = useState(true)

  const dispatch = useDispatch()

  const toggleMenu = payload => dispatch({ type: 'TOOGLE_MENU', payload })

  useEffect(() => {
    setTimeout(()=>{
      setLoaderOpen(false)
    }, 1500)
  }, [])

  useEffect(() => {
    if (menu.open){
      setOpen(true)
    }else{
      setTimeout(()=> {
        setOpen(false)
      }, 300)
    }
  }, [menu.open])

  const { classes } = props
  const { t } = useTranslation();

  const handleCloseMenu = open => {
    const root = document.getElementById('app')
    root.classList.remove('open')
    if(root){
      toggleMenu(open)
    }
  }

  return(
    <div className={classes.app}>
      <MuiThemeProvider theme={theme}>
        <Router>
          {open && 
            <div className={classes.linkContainer} style={{ opacity: menu.open ? 1 : 0 }}>
              <NavLink onClick={() => handleCloseMenu(false)} className={classes.link} to={'/'}>{t('header.home')}</NavLink>
              <NavLink onClick={() => handleCloseMenu(false)} className={classes.link} to={'/project'}>{t('header.project')}</NavLink>
              <NavLink onClick={() => handleCloseMenu(false)} className={classes.link} to={'/about'}>{t('header.about')}</NavLink>
              <NavLink onClick={() => handleCloseMenu(false)} className={classes.link} to={'/contact'}>{t('header.contact')}</NavLink>
            </div>
          }
          {loaderOpen && <LoaderScreen/>}
          <div id="app">
            <Header/>
            <Route
              render={({ location }) => (
                <PoseGroup>
                  <RouteContainer key={location.pathname}>
                      <Switch location={location}>
                        {routes.map(({ component, name, path, exact }) => {
                          return <Route path={path} component={component} key={name} exact={exact} />
                        })}
                        <Redirect to={'/'} />
                      </Switch>
                  </RouteContainer>
                </PoseGroup>
            )}/>
          </div>
        </Router>
      </MuiThemeProvider>
    </div>
  )
};

const Wrapper = withTranslation()(withStyles(LayoutStyle)(Container))