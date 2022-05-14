import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string';
import PostFiltersForm from './components/PostFiltersForm';

PostFeatures.propTypes = {
    
};

function PostFeatures(props) {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1, 
        _limit: 10,
        _totalRows: 1
    })

    const [filter, setFilter] = useState({
        _limit: 10,
        _page: 1,
    })
    
    const handlePageChange = (newPage) => {
        setFilter({
            ...filter,
            _page: newPage
        })
    }

    const handleFilterChange = (newFilter) => {
        setFilter({
            ...filter,
            _page:1,
            title_like: newFilter.searchTerm
        })
    }
    
    useEffect(()=>{
        async function fetchPostList () {
            try {
                const paramString = queryString.stringify(filter);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await(fetch(requestUrl));
                const responseJSON = await response.json();
                const {data, pagination} = responseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPostList();
    }, [filter]);

    return (
        <div>
            <h1>React hooks - Postlist</h1>
            <PostFiltersForm onSubmit={handleFilterChange} />
            <PostList posts={postList} />
            <Pagination pagination={pagination} onPageChange={handlePageChange}></Pagination>
        </div>
    );
}

export default PostFeatures;