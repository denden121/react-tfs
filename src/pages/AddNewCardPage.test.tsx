import React from 'react';
import { mount } from 'enzyme';
import {AddNewCardPage} from "./AddNewCardPage";
import {NewAccountForm} from "../components";

describe('Тест страницы AddNewCardPage', () => {
	it('Форма привязки карты есть на странице', () => {
		const component = mount(<AddNewCardPage />);

		expect(component.find(NewAccountForm).length).toBe(1);
	});
});
