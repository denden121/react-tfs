import React from 'react';
import { mount } from 'enzyme';

import * as request from '../services/requestMock';
import operations from '../mocks/operationsMock.json';
import {TimelinePage} from "./TimelinePage";

const getRouteProps = accountId => ({
	match: {
		params: {
			accountId,
		},
	},
});

describe('Тест страницы TimelinePage', () => {
	beforeEach(() => {
		jest.spyOn(request, 'getOperations').mockReturnValue(
			Promise.resolve(operations[1]),
		);
		jest.resetAllMocks();
	});

	/*
	 * Проверяем загрузку данных на странице и передачу данных в Timeline
	 * для загрузки данных необходимо в компоненте реализовать метод fetchOperations, который будет
	 * вызывать соответствующее API
	 * */

	it('После монтирования компонента происходит загрузка данных', () => {
		mount(<TimelinePage {...getRouteProps(1)} />);

		expect(request.getOperations).toHaveBeenCalled();
	});

	it('При изменении accountId, происходит загрузка данных', () => {
		const component = mount(<TimelinePage {...getRouteProps(1)} />);
		component.setProps(getRouteProps(2));
		expect(request.getOperations).toHaveBeenCalledTimes(2);
	});
});
