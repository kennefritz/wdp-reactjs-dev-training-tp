import React, { Component } from 'react';
import { Input, Tooltip, Icon, Select } from 'antd';

const Option = Select.Option;
const Search = Input.Search;
const { TextArea } = Input;
const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 90 }}>
    <Option value="Http://">Http://</Option>
    <Option value="Https://">Https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" style={{ width: 80 }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);


class EMCInput extends Component {
  render() {
    const {
      placeholder,
      prefix,
      suffix,
      prefixIconType,
      suffixDescription,
      suffixIconType,
      addOnBefore,
      beforeText,
      addOnAfter,
      afterText, 
      onSearch,
      enterButtonText,
      size,
      type
    } = this.props;
    if (type === "searchable") { 
      return (
        <Search
          placeholder={placeholder}
          enterButton={enterButtonText ? enterButtonText : ''}
          size={size}
          onSearch={value => onSearch(value)}
          //style={{ width: 200 }}
        />
      )
    }
    if (type === "textarea") {
      return (
        <TextArea placeholder="Autosize height based on content lines" autosize />
      )
    }
    return (
      <Input
        placeholder={placeholder}
        prefix={prefix ? <Icon type={prefixIconType} style={{ color: 'rgba(0,0,0,.25)' }} /> : ''}
        suffix={
          suffix ?
            <Tooltip title={suffixDescription}>
              <Icon type={suffixIconType} style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip> : ''
        }
        addonBefore={addOnBefore ? beforeText : ''}
        addonAfter={addOnAfter ? afterText : ''}
      />
    )
  }
}
export default EMCInput;