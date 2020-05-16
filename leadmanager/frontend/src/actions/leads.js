import axios from 'axios';

import { GET_LEADS, DELETE_LEADS } from './types';

//GET LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

//Delete lead
export const deleteLeads = () => dispatch => {
    axios
        .get(`/api/leads/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_LEADS,
                payload: id
            });
        }).catch(err => console.log(err));
};