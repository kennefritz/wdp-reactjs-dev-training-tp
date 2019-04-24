import React, { Component } from 'react';
import { Input, Tooltip, Icon } from 'antd';

class EMCInput extends Component {
    render() {
        const { 
            placeholder,
            prefix,
            suffix,
            prefixIconType,
            suffixDescription,
            suffixIconType
        } = this.props;
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
            />
        )
    }
}
export default EMCInput;