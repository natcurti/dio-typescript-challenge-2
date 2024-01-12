import { login } from "./login";

describe('login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;
    const mockEmail = 'email@email.com'

    it('Deve exibir um alerta de boas vindas caso o email seja válido', async () => {
        const response = await login(mockEmail);
        expect(response).toBeTruthy();
    })

    it('Deve exibir um erro caso o email esteja inválido', async () => {
        const response = await login('email@invalido.com');
        expect(response).toBeFalsy();
    })
})