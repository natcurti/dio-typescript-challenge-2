import { login } from "./login";

describe('login', () => {
    const mockEmail = 'email@email.com'
    const mockPassowrd = '123456'

    it('Deve retornar true caso o email e a senha estejam válidos estejam válidos', async () => {
        const response = await login(mockEmail, mockPassowrd);
        expect(response).toBeTruthy();
    })

    it('Deve retornar false caso o email e a senha estejam inválidos', async () => {
        const response = await login('email@invalido.com', 'senhaInvalida');
        expect(response).toBeFalsy();
    })
})