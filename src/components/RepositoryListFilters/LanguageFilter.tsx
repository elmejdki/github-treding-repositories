import React from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../actions/filters';
import { Select, Option } from './styles';

const LanguageFilter = () => {
  const dispatch = useDispatch();
  const handleOnChange = (e: { currentTarget: { value: string; }; }) => {
    dispatch(setLanguage(e.currentTarget.value));
  }

  return (
    <Select onChange={handleOnChange}>
      <Option value=''>Filter with a language</Option>
      <Option value="js">JavaScript</Option>
      <Option value="python">Python</Option>
      <Option value="go">Go</Option>
      <Option value="ruby">Ruby</Option>
      <Option value="java">Java</Option>
    </Select>
  );
}

export default LanguageFilter;
