import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import {CurrencyState, CurrencyType} from '../../redux/currencyReducer';
// import {Dispatch} from 'redux';
import {
    ChangeActionAC as setAction,
    ChangeCurrencyFieldAC as setCurrencyAmount,
    ChangeCurrentCurrencyAC as changeCurrency,
    // CurrencyReducersTypes
} from '../../redux/actions';
import {connect, ConnectedProps, useDispatch, useSelector} from 'react-redux';
import {IGlobalState} from '../../redux/state';


const CurrencyEContainer: React.FC<TProps> = props => {
// const CurrencyEContainer: React.FC = props => {

    /*const {
        currencies,
        currentCurrency,
        isBuying,
        amountOfBYN,
        amountOfCurrency,
        setCurrencyAmount,
        setAction,
        changeCurrency,
    } = props;*/

    const dispatch = useDispatch()
    const currencies = useSelector((state: IGlobalState) => state.currency.currencies)
    const isBuying = useSelector((state: IGlobalState) => state.currency.isBuying)
    const currentCurrency = useSelector((state: IGlobalState) => state.currency.currentCurrency)
    const amountOfBYN = useSelector((state: IGlobalState) => state.currency.amountOfBYN)
    const amountOfCurrency = useSelector((state: IGlobalState) => state.currency.amountOfCurrency)

    // console.log(amountOfBYN)

    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });
    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    // setCurrencyAmount(value, value);
                    dispatch(setCurrencyAmount(value, value));
                } else {
                    // setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
                    dispatch(setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
                }
            } else {
                if (value === '') {
                    // setCurrencyAmount(value, value);
                    dispatch(setCurrencyAmount(value, value));
                } else {
                    // setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                    dispatch(setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        /*e.currentTarget.dataset.action === 'buy'
            ? setAction(true)
            : setAction(false);*/
        e.currentTarget.dataset.action === 'buy'
            ? dispatch(setAction(true))
            : dispatch(setAction(false));
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        // e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
        e.currentTarget.dataset.currency && dispatch(changeCurrency(e.currentTarget.dataset.currency));
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};

const mapStateToProps = ({currency}: { currency: CurrencyState }): CurrencyState => {
    return {
        currencies: currency.currencies,
        currentCurrency: currency.currentCurrency,
        isBuying: currency.isBuying,
        amountOfBYN: currency.amountOfBYN,
        amountOfCurrency: currency.amountOfCurrency,
    };
};

// export type mapDispatchToPropsEContainerType = ReturnType<typeof mapDispatchToProps>
/*const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>) => {
    return {
        setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
            dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
        },
        setAction(isBuying: boolean) {
            dispatch(ChangeActionAC(isBuying));
        },
        changeCurrency(currency: string) {
            dispatch(ChangeCurrentCurrencyAC(currency));
        },
    };
};*/

/*const mapDispatchToProps = () => {
    return {
        setCurrencyAmount,
        setAction,
        changeCurrency,
    };
};*/


const connector = connect(mapStateToProps, {
    setCurrencyAmount,
    setAction,
    changeCurrency,
});

type TProps = ConnectedProps<typeof connector>;

export default connector(CurrencyEContainer);

// export default CurrencyEContainer
