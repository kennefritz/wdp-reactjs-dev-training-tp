import React, { Component } from 'react';
import { Button } from 'antd';

class EMCButton extends Component {
    render() {
      const { label, type, size, icon, callBackFn,loading } = this.props;
      return (
        <div> 
          <Button 
             type={type}
             size={size}
             loading={loading}
             icon={icon}
             onClick={callBackFn}
          >{label}</Button>
        </div>
      );
    }
  }
export default EMCButton;