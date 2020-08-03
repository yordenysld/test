import { createAction } from 'redux-actions';
import { AddProduct, DeleteProduct, UpdateProduct, Listproduct, productcount } from '../../models/product.model';

export const Add_Product = (product, pagin, size) => async (dispath) => {
    (await AddProduct(product));
}

export const Update_Product = (product, pagin, size) => async (dispath) => {
    (await UpdateProduct(product));
    dispath(update_list(await Listproduct(pagin, size)));
}

export const list_product = (pagin, size) => async (dispath) => {
    dispath(update_list(await Listproduct(pagin, size)));
}

export const delete_product = (key, pagin, size) => async (dispath) => {
    (await DeleteProduct(key));
    dispath(update_list(await Listproduct(pagin, size)));
}

export const count_paging = (size1) => async (dispath) => {
    var count_row = (await productcount());
    dispath(set_all_page(Math.trunc(count_row / size1) + (count_row % size1 != 0 ? 1 : 0)));
}

export const set_size_paging1 = (size1) => async (dispath) => {
    var count_row = (await productcount());
    dispath(set_all_page(Math.trunc(count_row / size1) + (count_row % size1 != 0 ? 1 : 0)));
    dispath(update_list(await Listproduct(1, size1)));
}

export const set_size_paging = createAction("set_size_paging");

export const update_paging = createAction("more_paging");

export const update_list = createAction("update_list");

export const update_product_ui = createAction("update_product_ui");

export const update_pagin_size = createAction("update_pagin_size");

export const user_online = createAction("user_online");

export const set_all_page = createAction("set_all_page");

