import { CHANGE_LANG } from './types';

const SetLocalStorageLang = lang => localStorage.setItem('lang', lang);

export const ChangeLangAction = lang => {
    SetLocalStorageLang(lang);

    return {
        type: CHANGE_LANG,
        payload: lang
    }
}