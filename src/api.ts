const conta = {
    email: 'nati@dio.me',
    password: '123456',
    name: "Natalia Curti",
    balance: 2000,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta);
    }, 3000)
})