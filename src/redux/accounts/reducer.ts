import {AccountsEnum} from "./accounts.enum";
import {Product} from "../../interfaces/account";

const initialState = [] as Product[];

const accounts = (state = initialState, action) => {
    switch (action.type) {
        case AccountsEnum.LOAD_ACCOUNTS:
            return null;
        case AccountsEnum.LOAD_ACCOUNTS_FAILURE:
            return null;
        case AccountsEnum.LOAD_ACCOUNTS_SUCCESS:
            return action.payload;
        case AccountsEnum.CHANGE_ACCOUNT_TITLE:
            return state.map((account) =>{
                if(account.id === action.payload.id){
                    return { ...account, customTitle: action.payload.customTitle }
                }
                return account
            });
        case AccountsEnum.ADD_ACCOUNT:
            return [...state, action.payload];
        case AccountsEnum.REMOVE_EXTERNAL_ACCOUNT:
            return state.filter((account) => {
                if (account.id === action.payload.id) {
                    return account.type !== 'external';
                }
                return true;
            });
        default:
            return state;
    }
};

export default accounts;
