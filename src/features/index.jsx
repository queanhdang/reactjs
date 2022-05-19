import React from 'react';
import PropTypes from 'prop-types';
import TodoFeatures  from './features/Todo';
import AlbumFeature from './features/Album';
import ColorFeature from './features/Color';
import PostFeatures from './features/Post';
import ClockFeatures from './features/Clock';

Feature.propTypes = {
    
};

function Feature(props) {
    return (
        <div>
            <TodoFeatures />
            <PostFeatures />

            <h2> Clock Clock </h2>
            <ClockFeatures />

            <h2>Magic Box</h2>
            <ColorFeature />
        </div>
    );
}

export default Feature;