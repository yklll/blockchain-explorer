/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import { createAction } from 'redux-actions'
import * as actionTypes from '../action-types'
import { get } from '../../../services/request.js';

export const transactionList = (channel) => dispatch => {
    get('/api/txList/'+channel+'/0/0/')
        .then(resp => {
            dispatch(createAction(actionTypes.TRANSACTION_LIST)(resp))
        }).catch((error) => {
            console.error(error);
        })
}
