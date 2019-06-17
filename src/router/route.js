import HomePage from 'container/HomePage/HomePage';
import AboutPage from 'container/AboutPage/AboutPage';
import ContactPage from 'container/ContactPage/ContactPage';
import ProjectPage from 'container/ProjectPage/ProjectPage';
import SingleProjectPage from 'container/ProjectPage/SingleProjectPage';

const indexRoutes = [
    { path: '/', name: 'HomePage', component: HomePage, exact: true },
    { path: '/about', name: 'AboutPage', component: AboutPage, exact: true },
    { path: '/contact', name: 'ContactPage', component: ContactPage, exact: true },
    { path: '/project', name: 'ProjectPage', component: ProjectPage, exact: true },
    { path: '/project/:id', name: 'SingleProjectPage', component: SingleProjectPage, exact: true },
]

export default indexRoutes