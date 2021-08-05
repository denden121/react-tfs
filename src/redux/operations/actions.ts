import {OperationsEnum} from "./operations.enum";
import {getOperations} from "../../services/requestMock";


export const loadOperationsAction = {
    type: OperationsEnum.LOAD_OPERATIONS,
}

export const loadOperationsFailureAction = {
    type: OperationsEnum.LOAD_OPERATIONS_FAILURE,
}

export const loadOperationsSuccess = (operations)  => ({
    type: OperationsEnum.LOAD_OPERATIONS_SUCCESS,
    payload: operations
})

export const loadOperations = (id) => async (dispatch) => {
    dispatch(loadOperationsAction);
    try {
        const operations = await getOperations(id);
        dispatch(loadOperationsSuccess(operations));
    } catch (err) {
        dispatch(loadOperationsFailureAction);
    }
};
