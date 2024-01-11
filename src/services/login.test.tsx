import { login } from "./login";

describe('login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;
    const mockEmail = 'email@email.com'

    it('Deve exibir um alerta de boas vindas caso o email seja válido', async () => {
        await login(mockEmail);
        expect(mockAlert).toHaveBeenCalledWith(`Seja bem-vindo(a) ao Dio Bank, ${mockEmail}!`);
    })

    it('Não deve exibir a mensagem sem o email', async () => {
        await login(mockEmail);
        expect(mockAlert).not.toHaveBeenCalledWith('Seja bem-vindo(a) ao Dio Bank!');
    })

    it('Deve exibir um erro caso o email esteja inválido', async () => {
        await login('email@invalido.com');
        expect(mockAlert).toHaveBeenCalledWith('Email inválido');
    })
})