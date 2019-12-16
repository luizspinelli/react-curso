import React from 'react'
import {Switch, Route} from 'react-router-dom'

import {ContatoIndex} from '../paginas/contato'
import { CursoIndex } from '../paginas/curso';

export class Rotas extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/cursos" component={CursoIndex} />
                <Route path="/contato" component={ContatoIndex}/>
                <Route path="*" component={CursoIndex}/>
            </Switch>
        )
    }
}