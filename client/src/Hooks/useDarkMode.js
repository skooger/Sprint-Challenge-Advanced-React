import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = (key, initialValue) => {

    const [someValue, setSomeValue] = useLocalStorage(key, initialValue);
    
    const body = document.querySelector('body');

    useEffect(() => {

        if(someValue){body.classList.add('dark-mode')}
        else {body.classList.remove('dark-mode')}

    },[someValue]);

    return [someValue,setSomeValue];



}