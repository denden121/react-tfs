import React from 'react';
import MaskedInput from 'react-maskedinput';
import cn from 'classnames';

import styles from './NewAccountForm.module.css';
import {Button} from "..";

interface NewAccountFormState {
    cardNumber?:string,
    year?: string,
    month?: string
}

type NewAccountFormProps =  {
    handleSubmit:(newAccount: {id: string , type: string, title: string}) => void;
}

export class NewAccountForm extends React.Component<NewAccountFormProps, NewAccountFormState> {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            year: '',
            month: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.cardNumber || !this.state.year || !this.state.month){
            return
        }
        this.props.handleSubmit({
            id: `${Date.now()}`,
            title: `Привязанная карта *${this.state.cardNumber.slice(this.state.cardNumber.length - 4)}`,
            type: 'external'
        });
        this.setState({
            cardNumber: '',
            year: '',
            month: ''
        })
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <h2>Привязка банковской карты</h2>
            <div className={styles.cardForm}>
                <MaskedInput
                    required
                    mask="1111 1111 1111 1111"
                    name="cardNumber"
                    value={this.state.cardNumber}
                    onChange={this.handleInputChange}
                    placeholder="Номер карты"
                    className={styles.input}
                />
                <div className={styles.validThruFieldset}>
                    <div className={styles.label}>VALID THRU </div>
                    <div className={styles.validThruFieldset}>
                        <MaskedInput
                            required
                            onChange={this.handleInputChange}
                            value={this.state.month}
                            mask="11"
                            type="text"
                            name="month"
                            placeholder="MM"
                            pattern="^(0?[1-9]|1[012])$"
                            className={cn(styles.input, styles.inputDate)}
                        />
                        /
                        <MaskedInput
                            required
                            onChange={this.handleInputChange}
                            value={this.state.year}
                            mask="11"
                            type="text"
                            name="year"
                            placeholder="YY"
                            className={cn(styles.input, styles.inputDate)}
                        />
                    </div>
                </div>

                <Button type='submit' >Привязать</Button>
            </div>
        </form>
    );
}
}
