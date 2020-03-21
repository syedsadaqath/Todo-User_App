import React from 'react';
import { DatePicker } from 'antd';

const onchangedate = dateString => {
    console.log(dateString)
};

const kalender = () => {
    return <DatePicker onChange={onchangedate}/>;
};

export default kalender;