import React, { Component } from 'react'
import { FormCurso } from './form'
import { ListCurso } from './list'
import axios from 'axios'

const URL = 'http://localhost:3200/api/cursos'

export class CadastroCurso extends Component {
        initialState = {
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA'
    }
    
    state = {...this.initialState, cursos : [] }

    constructor(props) {
        super(props)
        this.listar()
    }

    listar (){
        axios.get(URL).then( reponse => {
            this.setState({cursos: reponse.data})
        })
    }

    codigoChange(e){
        this.setState({codigo : e.target.value})
    }

    descricaoChange(a){
        this.setState({descricao : a.target.value})
    }

    cargaChange(a){
        this.setState({cargaHoraria : a.target.value})
    }

    precoChange(a){
        this.setState({preco : a.target.value})
    }

    categoriaChange(a){
        this.setState({categoria : a.target.value})
    }

    render() {
        return (
            <div className="border-right pl-3 pr-3">
                <div>
                    <div className="row border-bottom">
                        <div className="col-md-6">
                            <FormCurso 
                                codigo={this.state.codigo}
                                codigoChange={this.codigoChange.bind(this)}
                                descricao={this.state.descricao}
                                descricaoChange={this.descricaoChange.bind(this)}
                                cargaHoraria={this.state.cargaHoraria}
                                cargaChange={this.cargaChange.bind(this)}
                                preco={this.state.preco}
                                precoChange={this.precoChange.bind(this)}
                                categoria={this.state.categoria}
                                categoriaChange={this.categoriaChange.bind(this)}
                                 />
                        </div>
                        <div className="col-md-6">
                            <ListCurso cursos={this.state.cursos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}