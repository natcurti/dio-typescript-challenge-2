import { getAllLocalStorage, createLocalStorage, diobank, clearLocalStorage } from "./storage"

describe('localStorage', () => { 
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    const mockClear = jest.spyOn(Storage.prototype, 'clear')
    it('Deve retornar o objeto no localStorage', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
        getAllLocalStorage();
        expect(mockGetItem).toHaveBeenCalledWith('diobank');
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage(diobank);
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank));
    })

    // it('Deve alterar o valor do objeto no localStorage', () => {
    //     changeLocalStorage(diobank);
    //     expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank));
    // })

    it('Deve limpar localStorage', () => {
        clearLocalStorage();
        expect(mockClear).toBeCalled();
    })

 })