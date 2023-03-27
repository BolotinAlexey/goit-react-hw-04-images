import { useState } from 'react';
import PropTypes from 'prop-types';

import { Header } from './Searchbar.styled';
import { FaSearch, FaRegWindowClose } from 'react-icons/fa';

function Searchbar(props) {
  const [value, setValue] = useState('');

  const onReset = () => setValue('');

  const handlerSubmit = e => {
    e.preventDefault();
    setValue('');
    const word = e.target.elements[1].value.trim();
    if (word) props.onSubmit(word);
  };

  const onChange = e => setValue(e.target.value);

  return (
    <Header>
      <form onSubmit={handlerSubmit}>
        <button type="submit" disabled={props.isDisabled}>
          <FaSearch size={20} className="icon" />
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
          value={value}
        />

        <button onClick={onReset} type="reset">
          <FaRegWindowClose
            className="icon"
            size={20}
            color={value ? 'red' : 'transparent'}
          />
        </button>
      </form>
    </Header>
  );
}

Searchbar.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
