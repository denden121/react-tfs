import React from 'react';
import { mount } from 'enzyme';
import {NewAccountForm} from "./NewAccountForm";

const createEvent = (name, value) => ({ target: { name, value } });

describe('NewAccountForm', () => {
	/**
	 * Форма NewAccountForm реализована не полностью.
	 *
	 * Осталось добавить поля для ввода VALID THRU
	 *  input для ввода порядкового номера месяца (name "month")
	 *  input для ввода двух последних цифр года (name "year")
	 *
	 * Форму нельзя отправить пока хотя бы одно из полей не заполнено.
	 *
	 * После отправки формы необходимо очищать инпуты.
	 */

	let component;
	let handleSubmit;
	let month;
	let cardNumber;
	let year;
	let form;

	beforeEach(() => {
		handleSubmit = jest.fn();

		component = mount(<NewAccountForm handleSubmit={handleSubmit} />);

		month = component.find('input[name="month"]');
		cardNumber = component.find('input[name="cardNumber"]');
		year = component.find('input[name="year"]');
		form = component.find('form');
	});

	it('Проверяем, что это поля month, year и cardNumber есть в форме', () => {
		expect(cardNumber.length).toBe(1);
		expect(month.length).toBe(1);
		expect(year.length).toBe(1);
	});

	it('В первоначальном state компонента есть параметр month и year', () => {
		expect(component.state().month).toBe('');
		expect(component.state().year).toBe('');
	});

	it('Проверяем, корректность ввода инпутов', () => {
		cardNumber.simulate(
			'change',
			createEvent('cardNumber', '1111222233334444')
		);

		expect(component.state().cardNumber).toBe('1111 2222 3333 4444');
	});

	it('Если все поля заполнены, то отравка формы должна работать', () => {
		cardNumber.simulate(
			'change',
			createEvent('cardNumber', '1111222233334444')
		);
		year.simulate('change', createEvent('year', '20'));
		month.simulate('change', createEvent('month', '12'));

		form.simulate('submit');

		expect(handleSubmit.mock.calls).toMatchObject([
			[{ id: expect.anything(), type: 'external', title: 'Привязанная карта *4444' }],
		]);
	});

	it('После отравки формы очищаются все поля', () => {
		cardNumber.simulate(
			'change',
			createEvent('cardNumber', '1111222233334444')
		);
		year.simulate('change', createEvent('year', '20'));
		month.simulate('change', createEvent('month', '12'));

		form.simulate('submit');

		expect(component.state().month).toBe('');
		expect(component.state().year).toBe('');
		expect(component.state().cardNumber).toBe('');
	});

	it('Если поля не заполнены, то форму не отправляем', () => {
		cardNumber.simulate('change', createEvent('cardNumber', ''));
		year.simulate('change', createEvent('year', ''));
		month.simulate('change', createEvent('month', ''));

		form.simulate('submit');

		expect(handleSubmit).not.toHaveBeenCalled();
	});
});
