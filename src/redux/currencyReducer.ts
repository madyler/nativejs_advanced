import {ACTIONS_TYPE, CurrencyReducersTypes } from './actions';

export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 2.582,
            sellRate: 2.571,
        },
        {
            currencyName: 'EUR',
            buyRate: 2.955,
            sellRate: 2.938,
        },
        {
            currencyName: 'RUR',
            buyRate: 0.03395,
            sellRate: 0.03376,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
            return {
                ...state,
                ...action.payload,
                //зануляем поля при смене направления сделки или валюты
                amountOfCurrency: '',
                amountOfBYN: ''
            }
        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:
            return {...state, ...action.payload}
        default:
            return state;
    }
};
