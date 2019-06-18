import React from 'react'
import { withStyles } from '@material-ui/core';
import AboutPageStyle from './AboutPageStyle'
import posed from 'react-pose';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import ArrowIcon from '@material-ui/icons/ArrowDownward';
import { useTranslation } from 'react-i18next';

const ListContainer = posed.ul({
    enter: { staggerChildren: 20 },
    exit: { staggerChildren: 5, staggerDirection: -1 }
});

const Item = posed.li({
    enter: { y: 0, opacity: 1 },
    exit: { y: 500, opacity: 0 }
});

const AboutPage = props => {
    const { classes } = props

    const { t } = useTranslation();

    return(
        <ListContainer>
            <div className={classes.header}>
                <div className={classes.title}>{t('about.title')}</div>
                <div className={classes.text}>
                    {t('about.description1')}<br/>
                    {t('about.description2')}<br/>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.content}>
                    <Item>
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2017 - 2019"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{t('about.timeline.0.title')}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{t('about.timeline.0.city')}</h4>
                                <div className={classes.paragraph}>
                                    {t('about.timeline.0.description')}
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2017 - 2019"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{t('about.timeline.1.title')}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{t('about.timeline.1.city')}</h4>
                                <div className={classes.paragraph}>
                                    {t('about.timeline.1.description')}
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2015 - 2017"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title"> {t('about.timeline.2.title')}</h3>
                                <div className={classes.paragraph}>
                                    {t('about.timeline.2.description')}
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2016 - 2017"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title"> {t('about.timeline.3.title')}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{t('about.timeline.3.city')}</h4>
                                <div className={classes.paragraph}>
                                    {t('about.timeline.3.description')}
                                    <ul>
                                        <li className={classes.li}>{t('about.timeline.3.sub1')}</li>
                                        <li className={classes.li}>{t('about.timeline.3.sub2')}</li>
                                        <li className={classes.li}>{t('about.timeline.3.sub3')}</li>
                                    </ul>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2015 - 2016"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{t('about.timeline.4.title')}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{t('about.timeline.4.city')}</h4>
                                <div className={classes.paragraph}>
                                    {t('about.timeline.4.description')}
                                    <ul>
                                        <li className={classes.li}>{t('about.timeline.4.sub1')}</li>
                                    </ul>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2012 - 2015"
                                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">{t('about.timeline.5.title')}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{t('about.timeline.5.city')}</h4>
                                <div className={classes.paragraph}>
                                    {t('about.timeline.5.description')}
                                    <ul>
                                        <li className={classes.li}>{t('about.timeline.5.sub1')}</li>
                                    </ul>
                                </div>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                icon={<StarIcon />}
                            />
                        </VerticalTimeline>
                    </Item>
                </div>
                <div className={classes.animation}>
                    <Item>
                        <div className={classes.subTitle2}>{t('about.favorite')}</div>
                    </Item>
                    <div className={classes.stackContainer}>
                        <Item>
                            <div className={classes.imagesStack}>
                                <img className={classes.images} src="/images/logo/react.png" alt="react"/>
                            </div>
                        </Item>
                        <Item>
                            <div className={classes.icon}>
                                <ArrowIcon className={classes.arrow} />
                            </div>
                        </Item>
                        <Item>
                            <div className={classes.imagesStack}>
                                <img className={classes.images} src="/images/logo/meteor.png" alt="meteor"/>
                            </div>
                        </Item>
                        <Item>
                            <div className={classes.icon}>
                                <ArrowIcon className={classes.arrow} />
                            </div>
                        </Item>
                        <Item>
                            <div className={classes.imagesStack}>
                                <img className={classes.images} src="/images/logo/mongodb.png" alt="mongo"/>
                            </div>
                        </Item>
                        <Item>
                            <div className={classes.icon}>
                                <ArrowIcon className={classes.arrow} />
                            </div>
                        </Item>
                        <Item>
                            <div className={classes.imagesStack}>
                                <img className={classes.images} src="/images/logo/apollo.svg" alt="apollo"/>
                            </div>
                        </Item>
                        <Item>
                            <div className={classes.icon}>
                                <ArrowIcon className={classes.arrow} />
                            </div>
                        </Item>
                        <Item>
                            <div className={classes.imagesStack}>
                                <img className={classes.images} src="/images/logo/graphql.png" alt="graphql"/>
                            </div>
                        </Item>
                    </div>
                </div>
            </div>
        </ListContainer>
    )
}

export default withStyles(AboutPageStyle)(AboutPage)