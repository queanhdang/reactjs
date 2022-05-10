import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList'

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Sun is shining',
            thumbnailUrl: 'https://i.ytimg.com/vi/_OR0BwCXUJA/maxresdefault.jpg' 
        },
        {
            id: 2,
            name: 'Positions',
            thumbnailUrl: 'https://kenh14cdn.com/thumb_w/660/2020/10/30/ekcorkuuaae6dp-1604034132995383646091.jpg' 
        },
        {
            id: 3,
            name: 'Nửa thập kỉ',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/song/share/2021/11/28/a/5/a/9/1638086146791.jpg' 
        },
        {
            id: 4,
            name: 'Phía sau lưng anh có ai kìa',
            thumbnailUrl: 'https://i.ytimg.com/vi/1jx-BcAu5i4/maxresdefault.jpg' 
        },
        {
            id: 5,
            name: '34 + 35',
            thumbnailUrl: 'https://znews-photo.zingcdn.me/w660/Uploaded/aybjsww/2020_11_18/ariana_grande_34_35_music_video_outfits_1.jpeg' 
        }
    ]
    return (
        <div>
            <h2>Album</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;