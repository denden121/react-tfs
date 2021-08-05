import accounts from '../mocks/accountsMock.json';
import operations from '../mocks/operationsMock.json';
import {IAccountOperation} from "../interfaces/account";

const promiseResponse:(data) => Promise<IAccountOperation[]> = data =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(data);
		}, 500);
	});

export const getAccounts = () => promiseResponse(accounts);

export const getOperations:(accountId: string) => Promise<IAccountOperation[]> = accountId => {
	const accountOperations = operations[accountId] || [];

	return promiseResponse(accountOperations);
};
