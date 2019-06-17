import React, { Fragment } from 'react';
import posed from 'react-pose';

const Frame = posed.div({
    init: {
        applyAtEnd: { display: 'none' },
        opacity: 0
    },
    zoom: {
        applyAtStart: { display: 'block' },
        opacity: 1
    }
});

const transition = {
    // duration: 800,
    // ease: [0.00, 0.00, 0.2, 0.99]
};

const Image = posed.img({
    init: {
        position: 'static',
        width: 'auto',
        height: 'auto',
        transition,
        flip: true
    },
    zoom: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition,
        flip: true
    }
});

class ZoomImg extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            isZoomed: false,
            imgSize: {
                width: null,
                height: null,
            }
        };
        this.app = document.querySelector('#app')
    }

    zoomIn() {
        const img = document.querySelector('.frame')
        if (img && img.nextElementSibling){
            let imgSize = {
                width: img.nextElementSibling.offsetWidth,
                height: img.nextElementSibling.offsetHeight,
            }
            this.setState({ imgSize })
        }
        setTimeout(() => {
            this.app.addEventListener('scroll', this.zoomOut);
        }, 100)
        this.setState({ isZoomed: true });
    }

    zoomOut = () => {
        this.app.removeEventListener('scroll', this.zoomOut);
        this.setState({ isZoomed: false });
    };

    toggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn());

    render() {
        const { isZoomed, imgSize } = this.state;
        const { imageWidth, ...props } = this.props;
        const pose = isZoomed ? 'zoom' : 'init';

        return (
            <Fragment>
                <div
                    style={isZoomed ? { width: imgSize.width, height: imgSize.height, margin: '40px auto' } : {width: '100%', margin: '40px auto'}}
                    onClick={this.toggleZoom}
                    className="zoomImg"
                >
                    <Frame pose={pose} className="frame" />
                    <Image pose={pose} {...props} />
                </div>
            </Fragment>
        );
    }
}

export default ZoomImg;
