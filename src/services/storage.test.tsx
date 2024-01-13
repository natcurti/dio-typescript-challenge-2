import { getAllLocalStorage, createLocalStorage, diobank, changeLocalStorage } from "./storage"

describe('localStorage', () => { 
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    it('Deve retornar o objeto no localStorage', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
        getAllLocalStorage();
        expect(mockGetItem).toHaveBeenCalledWith('diobank');
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage();
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank));
    })

    it('Deve alterar o valor do objeto no localStorage', () => {
        changeLocalStorage(diobank);
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank));
    })

 })