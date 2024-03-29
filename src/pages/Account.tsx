import { SimpleGrid, Spinner, Center, Flex } from "@chakra-ui/react";
import AccountInfo from "../components/AccountInfo";
import { api } from '../api';
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";

interface IUserData{
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 
'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const Account = () => {

    const [userData, setUserData] = useState<null | IUserData>();

    useEffect(() => {
      const getData = async () => {
        const data: any | IUserData = await api;
        setUserData(data);
      }

      getData();
    }, [])  

    const actualData = new Date();
    const numberOfMonth = actualData.getMonth();
    const actualMonth = months[numberOfMonth];

    // const params = useParams();
    // console.log(params);

    const {id} = useParams();

    const navigate = useNavigate();

    if(userData && id !== userData.id){
        navigate('/');
    }

    const { isLoggedIn, storage } = useContext(AppContext);
    (!isLoggedIn && !storage) && navigate('/');

    return(
        <Flex justifyContent='center' marginTop='5rem'>
            {
                (userData === null || userData === undefined) ?
                    
                (<Center><Spinner size='xl' color='#FFF'/></Center>) :

                (
                <SimpleGrid columns={2} spacing='5rem' width='100%'>
                    <AccountInfo 
                        mainContent={`Bem vindo(a) ${userData.name}`}
                        content={`Hoje é dia: ${actualData.getDate()} de ${actualMonth} de ${actualData.getFullYear()}`}
                        subContent={`Você está logada no email ${userData.email}`}
                    />
                    <AccountInfo 
                        mainContent="Saldo"
                        content={`R$ ${userData.balance}`}
                        subContent={`Ver detalhes do saldo`}
                    />
                </SimpleGrid>
                )
            }    
        </Flex>
    )
}

export default Account;