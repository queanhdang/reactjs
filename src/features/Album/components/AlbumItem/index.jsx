import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

AlbumItem.propTypes = {
    item: PropTypes.object.isRequired
};

function AlbumItem({item}) {
    return (
        <div className="item">
            <div className="div">
                <img src={item.thumbnailUrl} alt="" />
            </div>
            <div className="name">{item.name}</div>
        </div>
    );
}

export default AlbumItem;