import React from 'react';
import { Link } from 'react-router-dom';
import Board, { createTranslate } from 'react-trello';
import { reactTrelloLangPtBr } from '../react-trello-pt-br';

export default function PaginaTarefas() {
    const data = {
        lanes: [
            {
                id: 'ideias',
                title: 'Ideias',
                cards: []
            },
            {
                id: 'aFazer',
                title: 'A fazer',
                cards: [
                    {
                        id: '123',
                        title: 'Instalação do NodeJS',
                        description: 'Realizar o download e instalação da última versão do NodeJS em sua máquina.',
                    }
                ]
            },
            {
                id: 'fazendo',
                title: 'Fazendo',
                cards: []
            },
            {
                id: 'feito',
                title: 'Feito',
                cards: []
            }
        ]
    };

    return (
        <div className="container mt-4">
            <Link to="/sair" title="Clique para sair!" className="btn btn-outline-danger position-fixed top-0 end-0 me-4 mt-4" style={{ textDecoration: 'none' }}>
                🚪
            </Link>

            <h1 className="text-center mb-4">🛠️ Minhas Tarefas</h1>
            <Board
                style={{ backgroundColor: 'transparent' }}
                data={data}
                draggable
                laneDraggable={false}
                handleDragEnd={(cardId, sourceLaneId, targetLaneId) => { }}
                editable
                t={createTranslate(reactTrelloLangPtBr)}
            />
        </div>
    );
}