import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { Input, Tooltip, Icon } from 'antd';

const Search = Input.Search;
const { TextArea } = Input;

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

EMCInput.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.bool,
  suffix: PropTypes.bool,
  prefixIconType: PropTypes.string,
  suffixDescription: PropTypes.string,
  suffixIconType: PropTypes.string,
  addOnBefore: PropTypes.bool,
  beforeText: PropTypes.string,
  addOnAfter: PropTypes.bool,
  afterText: PropTypes.string,
  onSearch: PropTypes.func,
  enterButtonText: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
}
export default EMCInput;