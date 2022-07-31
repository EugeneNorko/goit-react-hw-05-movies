import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormWrapp = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;
const Form = styled.form`
  border: 1px solid black;
`;
const Button = styled.button`
  height: 46px;
  color: #f37a7a;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  width: 200px;
  height: 40px;
  outline: none;
  font-size: 18px;
`;
export const FormSearch = ({ value, onSubmit }) => {
  const [searchValue, setSearchValue] = useState(value);

  // const onSumbit = e => {
  //   e.preventDefault();
  //   // console.log(e.currentTarget.searchValue.value);
  //   onSetState(e.currentTarget.searchValue.value);
  // };
  return (
    <FormWrapp>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="searchValue"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          autoComplete="off"
        />
        <Button type="submit">
          <b>Search</b>
        </Button>
      </Form>
    </FormWrapp>
  );
};

FormSearch.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
