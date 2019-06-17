import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core';
import ProjectPageStyle from './ProjectPageStyle'
import { useTransition, animated as a } from 'react-spring'
import useMedia from './useMedia'
import { data } from './data'
import Button from '../../component/CustomButtons/Button';
import { useTranslation } from 'react-i18next';

const ProjectPage = props => {

    const { classes } = props
    
    const columns = useMedia(['(min-width: 1000px)', '(min-width: 600px)'], [3, 2], 1)
    const [width, setWidth] = useState(null)
    const [items, set] = useState(data)
    const [stack, setStack] = useState('ShowAll')
    const { t } = useTranslation();

    useEffect(() => {
        setWindowWidth()
        window.addEventListener('resize', setWindowWidth)
        return () => window.removeEventListener('resize', setWindowWidth)
    }, [])

    const setWindowWidth = () => setWidth(document.getElementById('projectContainer').offsetWidth - 40)

    let heights = new Array(columns).fill(0)
    let gridItems = items.map((child, i) => {
        const column = heights.indexOf(Math.min(...heights))
        const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2]
        return { ...child, xy, width: width / columns, height: child.height / 2 }
    })

    const transitions = useTransition(gridItems, item => item.css, {
        from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
        enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
        update: ({ xy, width, height }) => ({ xy, width, height }),
        leave: { height: 0, opacity: 0 },
        config: { mass: 5, tension: 500, friction: 100 },
        trail: 25
    })

    const selectStack = selectStack => {
        setStack(selectStack)
        let newData = []
        if (selectStack === 'ShowAll'){
            newData = data
        }else{
            data.forEach(project => {
                if (project.stacks.indexOf(selectStack) >= 0){
                    newData.push(project)
                }
            });
        }
        set(newData)
    }

    const targetStack = target => {
        if (stack === target) return "primary"
        return "transparent"
    }

    const handleChangePage = id => {
        props.history.push(`/project/${id}`)
    }

    return(
        <div>
            <div className={classes.header}>
                <div className={classes.title}>{t('project.title')}</div>
                <div className={classes.text}>{t('project.description')}</div>
            </div>
            <div className={classes.stackSelect}>
                <Button 
                    round
                    className={classes.button} 
                    onClick={() => selectStack('ShowAll')}
                    color={targetStack('ShowAll')}
                >
                    {t('project.buttonShow')}
                </Button>
                <Button 
                    round
                    className={classes.button} 
                    onClick={() => selectStack('react')}
                    color={targetStack('react')}
                >
                    React
                </Button>
                <Button 
                    round
                    className={classes.button} 
                    onClick={() => selectStack('meteor')}
                    color={targetStack('meteor')}
                >
                    Meteor
                </Button>
                <Button 
                    round
                    className={classes.button} 
                    onClick={() => selectStack('mongo')}
                    color={targetStack('mongo')}
                >
                    MongoDB
                </Button>
                <Button 
                    round
                    className={classes.button} 
                    onClick={() => selectStack('redux')}
                    color={targetStack('redux')}
                >
                    Redux
                </Button>
                <Button 
                    round
                    className={classes.button} 
                    onClick={() => selectStack('firebase')}
                    color={targetStack('firebase')}
                >
                    Firebase
                </Button>
                <Button 
                    round
                    className={classes.button} 
                    onClick={() => selectStack('node')}
                    color={targetStack('node')}
                >
                    NodeJS
                </Button>
                <Button 
                    round
                    className={classes.button} 
                    onClick={() => selectStack('d3js')}
                    color={targetStack('d3js')}
                >
                    D3 JS
                </Button>
                <Button 
                    round
                    className={classes.button} 
                    onClick={() => selectStack('socketio')}
                    color={targetStack('socketio')}
                >
                    Socket.io
                </Button>
                <Button 
                    round
                    className={classes.button} 
                    onClick={() => selectStack('restapi')}
                    color={targetStack('restapi')}
                >
                    RestAPI
                </Button>
                <Button 
                    round
                    className={classes.button} 
                    onClick={() => selectStack('sql')}
                    color={targetStack('sql')}
                >
                    SQL
                </Button>
            </div>
            <div className={classes.container} id="projectContainer">
                <div className="list" style={{ height: Math.max(...heights) }}>
                    {transitions.map(({ item, props: { xy, ...rest }, key }) => (
                        <a.div 
                            key={key} 
                            style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}
                            onClick={() => handleChangePage(item.id)}
                        >
                            <div className={classes.titleProject}>{item.title}</div>
                            <div className="background" style={{ backgroundImage: item.css }} />
                        </a.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default withStyles(ProjectPageStyle)(ProjectPage)