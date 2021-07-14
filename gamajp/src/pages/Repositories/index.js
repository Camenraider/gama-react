import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router';



export default function Repositories() {
    const [ repositories, setRepositories] = useState([]);

    useEffect(()=>{
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositories != null) {
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        } else {
            useHistory.push('/');
        }
    }, []);

    return (
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                    {   repositories.map(repository => {
                            return (
                                <S.ListItem>Repositório: { repository }</S.ListItem>
                            )
                        })  
                    }
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>        
        </S.Container>
    )
}