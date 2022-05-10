import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';
import './styles.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array
};

AlbumList.defaultProps = {
    albumList: []
}

function AlbumList({albumList}) {
    return (
        <div className="album">
            {albumList.map(item => (
                <AlbumItem key={item.id} item={item}/>
            ))}
        </div>
    );
}

export default AlbumList;