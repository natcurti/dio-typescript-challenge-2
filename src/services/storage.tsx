interface IDioBank{
    login: boolean
    user: string
    userPassword: string
}

export const diobank = {
    login: false,
    user: '',
    userPassword: ''
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank');
}

export const createLocalStorage = (dioBankParam: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBankParam))
}

// export const changeLocalStorage = (dioBankParam: IDioBank): void => {
//     localStorage.setItem('diobank', JSON.stringify(dioBankParam))
// }

export const clearLocalStorage = (): void => {
    localStorage.clear();
}