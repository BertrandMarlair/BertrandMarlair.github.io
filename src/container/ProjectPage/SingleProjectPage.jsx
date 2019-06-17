import React, { useEffect, useState, Fragment } from 'react'
import { withStyles } from '@material-ui/core';
import ProjectPageStyle from './ProjectPageStyle'
import { data } from './data'
import posed from 'react-pose';
import Spinner from 'component/Loader/Spinner'
import ZoomImg from 'component/ZoomImg/ZoomImg'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import { useTranslation } from 'react-i18next';

const ProjectPage = props => {

    const { classes } = props

    const ListContainer = posed.ul({
        enter: { staggerChildren: 20 },
        exit: { staggerChildren: 5, staggerDirection: -1 }
    });

    const Item = posed.li({
        enter: { y: 0, opacity: 1 },
        exit: { y: 500, opacity: 0 }
    });

    const [ article, setArticle ] = useState(null)

    const { t } = useTranslation();

    useEffect(() => {
        if (props.match && props.match.params && props.match.params.id){
            const id = props.match.params.id
            const index = data.findIndex( el => el.id === id)
            setArticle(data[index])
        }
    }, [props.match])

    const getLink = type => {
        const actualIndex = data.findIndex(el => el.id === article.id);
        let newId = null
        if(type){
            if (actualIndex - 1 < 0){
                newId = data[data.length - 1].id
            }else{
                newId = data[actualIndex - 1].id
            }
        }else{
            if (actualIndex + 1 > data.length - 1){
                newId = data[0].id
            }else{
                newId = data[actualIndex + 1].id
            }
        }
        props.history.push(newId)
    }
    
    return(
        <ListContainer>
            {article ? 
                <div className={classes.textContainer}>
                    <Item>
                        <div className={classes.headerSingle}>
                                <KeyboardArrowLeft onClick={() => getLink(false)} className={classes.icon}/>
                            <div className={classes.title2}>{article.title}</div>
                            <KeyboardArrowRight onClick={() => getLink(true)} className={classes.icon}/>
                        </div>
                    </Item>
                    <Item>
                        {article.intro &&
                            <div className={classes.text}>
                                {t(article.intro)}
                            </div>
                        }
                    </Item>
                    <Item>
                        <div>
                            <ZoomImg src={article.background} />
                        </div>
                    </Item>
                    <Item>
                        {article.about &&
                            <Fragment>
                                <div className={classes.subTitle2}>{t('project.about')}</div>
                                <div className={classes.text}>
                                    {t(article.about)}
                                </div>
                            </Fragment>
                        }
                    </Item>
                    <Item>
                        {article.technical &&
                            <Fragment>
                                <div className={classes.subTitle2}>{t('project.technical')}</div>
                                <div className={classes.text}>
                                    <div>{t(article.technicalDescription)}</div>
                                    <p dangerouslySetInnerHTML={{ __html: article.technical }} />
                                </div>
                            </Fragment>
                        }
                    </Item>
                    <Item>
                        {article.resource &&
                            <Fragment>
                                <div className={classes.subTitle2}>{t('project.resources')}</div>
                                <div className={classes.text}>
                                    {article.resource}
                                </div>
                            </Fragment>
                        }
                    </Item>
                </div>
            : (
                <Spinner />
            )}
        </ListContainer>
    )
}

export default withStyles(ProjectPageStyle)(ProjectPage)