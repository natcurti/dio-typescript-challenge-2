interface IDioBank{
    login: boolean
}

export const diobank = {
    login: false
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank');
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(diobank))
}

export const changeLocalStorage = (dioBankParam: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBankParam))
}