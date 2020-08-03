import { handleActions } from 'redux-actions';
import {
    user_online,
    update_pagin_size,
    update_list,
    update_product_ui,
    update_paging,
    set_size_paging,
    count_paging,
    set_all_page
} from '../Actions';

const state = { products: [], key: "", pagin: 1, size: 10, all_page: 1, user_online: {} }

export default handleActions({
    [update_list]: (state, action) => {
        return {
            ...state,
            products: action.payload.result,
            key: state.key,
            pagin: state.pagin,
            size: state.size,
            user_online: state.user_online,
            all_page: state.all_page
        }
    },
    [update_product_ui]: (state, action) => {
        return {
            ...state,
            products: state.products,
            key: action.payload.key,
            pagin: state.pagin,
            size: state.size,
            user_online: state.user_online,
            all_page: state.all_page
        }
    },
    [update_paging]: (state, action) => {
        return {
            ...state,
            products: state.products,
            key: state.key,
            pagin: action.payload,
            size: state.size,
            user_online: state.user_online,
            all_page: state.all_page
        };
    },
    [set_all_page]: (state, action) => {
        return {
            ...state,
            products: state.products,
            key: state.key,
            pagin: state.pagin,
            size: state.size,
            all_page: action.payload,
            user_online: state.user_online,
        };
    },
    [set_size_paging]: (state, action) => {
        return {
            ...state,
            products: state.products,
            key: state.key,
            pagin: state.pagin,
            size: action.payload,
            user_online: state.user_online,
            all_page: state.all_page,
        };
    },
    [user_online]: (state, action) => {
        return {
            ...state,
            products: state.products,
            key: state.key,
            pagin: action.payload.pagin,
            size: action.payload.size,
            user_online: state.user_online,
            all_page: state.all_page,
        }
    }
}, state);
