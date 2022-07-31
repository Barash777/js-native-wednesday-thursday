import React from 'react'
import './lesson_4';
import {handlePromise} from './lesson_4';

const Lesson4 = () => {

    const createPromiseHandler = () => {
        // @ts-ignore
        handlePromise.promise = new Promise((res, rej) => {
            // @ts-ignore
            handlePromise.resolve = res
            // @ts-ignore
            handlePromise.reject = rej
        })

        // console.log(promise)
        // console.log(handlePromise)
    }

    const resolvePromiseHandler = () => {
        // @ts-ignore
        handlePromise.resolve('SUCCESS')
        // @ts-ignore
        handlePromise.promise
            .then((data: string) => handlePromise.onSuccess(data))
            .catch((error: string) => console.log(error))
    }

    const rejectPromiseHandler = () => {
        // @ts-ignore
        handlePromise.reject('ERROR')
        // @ts-ignore
        handlePromise.promise.catch(data => handlePromise.onError(data))
    }

    return (
        <div>
            <button id="btn-create-promise" onClick={createPromiseHandler}>Create Promise</button>
            <button id="btn-resolve-promise" onClick={resolvePromiseHandler}>Resolve Promise</button>
            <button id="btn-reject-promise" onClick={rejectPromiseHandler}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;