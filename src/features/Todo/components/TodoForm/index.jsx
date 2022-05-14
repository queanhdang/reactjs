import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onTodoSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onTodoSubmit: null
}

function TodoForm(props) {
    const {onTodoSubmit} = props;
    const [value, setValue] = useState('');
    const valueSubmit = () => {
        var value = document.getElementsByClassName("new-todo-value")[0].value;
        if(!value) {
            alert('nhap du lieu vaoooo');
        } else if(!onTodoSubmit) {
            alert('khong co ham xu ly thi t luu = j')
        } else {
            onTodoSubmit(value);
        }
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if(!onTodoSubmit) return;
        else {
            onTodoSubmit({title: value});
            setValue('');
        }
    }
    return (
        <form onSubmit={formSubmit}>
            <input type="text" className="new-todo-value" value={value} onChange={(e) => { setValue(e.target.value)}}/>
        </form>
    );
}

export default TodoForm;