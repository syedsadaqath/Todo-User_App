import { v4 as uuid4 } from 'uuid';
const uniqueID = uuid4();

export const FORM_INITIAL_STATE = {
    key: uniqueID,
    title: 'Dummy value to test todo list (Default Todo Task)',
    dataIndex: 0
};

export const COMPLETED_INITIAL_STATE = {
    key: uniqueID,
    dataIndex: 0,
    completed: 'false'
};