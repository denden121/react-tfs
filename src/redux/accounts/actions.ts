import { getAccounts } from "../../services/requestMock";
import {AccountsEnum} from "./accounts.enum";

export const loadAccountsAction = {
    type: AccountsEnum.LOAD_ACCOUNTS,
};

export const loadAccountsFailureAction = {
    type: AccountsEnum.LOAD_ACCOUNTS_FAILURE,
};

export const loadAccountsSuccess = (accounts ) => ({
    type: AccountsEnum.LOAD_ACCOUNTS_SUCCESS,
    payload: accounts,
});

export const changeAccountTitle = (newTitle) => ({
    type: AccountsEnum.CHANGE_ACCOUNT_TITLE,
    payload: newTitle,
});

export const addAccount = (account: Account) => ({
    type: AccountsEnum.ADD_ACCOUNT,
    payload: account,
});

export const removeExternalAccount = (deleteAcc) => ({
    type: AccountsEnum.REMOVE_EXTERNAL_ACCOUNT,
    payload: deleteAcc,
});

export const loadAccounts = () => async (dispatch) => {
    dispatch(loadAccountsAction);
    try {
        const accounts = await getAccounts();
        dispatch(loadAccountsSuccess(accounts));
    } catch (err) {
        dispatch(loadAccountsFailureAction);
    }
};

