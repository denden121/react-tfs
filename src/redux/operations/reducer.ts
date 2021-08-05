import {IAccountOperation} from "../../interfaces/account";
import {OperationsEnum} from "./operations.enum";

const initialState = [] as IAccountOperation[];

const operations = (state = initialState, action) => {
    switch (action.type) {
        case OperationsEnum.LOAD_OPERATIONS:
            return null;
        case OperationsEnum.LOAD_OPERATIONS_FAILURE:
            return null;
        case OperationsEnum.LOAD_OPERATIONS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};

export default operations
