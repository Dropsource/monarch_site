import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function ExplainerVideo() {
    return (
        <div className={clsx(styles.explainerVideo)}>
            <iframe
                src="https://www.youtube.com/embed/yblMOMfbZno"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>
    );
}

export default ExplainerVideo;
