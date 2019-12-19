const INITIAL_STATE = {
    data: '2019-12-18',
    nome: 'Luiz',
    email: 'luiz@luiz.com',
    telefone: 11223366,
    assunto: 'teste'
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ATUALIZA_DATA': return { ...state, data: action.value };
        
        case 'ATUALIZA_NOME' : return { ...state, nome: action.value };

        case 'ATUALIZA_TELEFONE' : return { ...state, telefone: action.value };

        case 'ATUALIZA_EMAIL' : return { ...state, email: action.value };

        case 'ATUALIZA_ASSUNTO' : return { ...state, assunto: action.value };

        default: return state;
    }
}