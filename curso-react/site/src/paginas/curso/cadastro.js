import React, { Component } from 'react'
import { FormCurso } from './form'
import { ListCurso } from './list'
import axios from 'axios'

const URL = 'http://localhost:3200/api/cursos'

export class CadastroCurso extends Component {
    initialState = {
        _id : null,
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA'
    }

    state = { ...this.initialState, cursos: [] }

    constructor(props) {
        super(props)
        this.listar()
    }

    listar() {
        axios.get(URL).then(reponse => {
            this.setState({ cursos: reponse.data })
        })
    }

    codigoChange(e) {
        this.setState({ codigo: e.target.value })
    }

    descricaoChange(a) {
        this.setState({ descricao: a.target.value })
    }

    cargaChange(a) {
        this.setState({ cargaHoraria: a.target.value })
    }

    precoChange(a) {
        this.setState({ preco: a.target.value })
    }

    categoriaChange(a) {
        this.setState({ categoria: a.target.value })
    }

    adicionar(evento) {
        evento.preventDefault()

        const { _id, codigo, descricao, cargaHoraria, categoria, preco } = this.state

        const body = {
            codigo,
            descricao,
            cargaHoraria,
            categoria,
            preco
        }

        if (_id) {
            axios.put(`${URL}/${_id}`, body).then(_ =>{
                this.limpar(evento)
                this.listar()
                alert('Curso alterado')
            }).catch(error => {
                console.log(error)
                alert('Erro ao atualizar curso')
            })
        } else {            
            axios.post(URL, body).then(_ => {
                this.limpar(evento)
                this.listar()
                alert('Curso adicionado')
            }).catch(error => {
                console.log(error)
                alert('Erro ao adicionar curso')
            })
            console.log(evento)
        }

    }

    limpar(e) {
        e.preventDefault()
        this.setState(this.initialState)
    }

    removerCurso(curso) {
        if (window.confirm(`Deseja realmente deletar o curso? - ${curso.descricao}`)) {
            axios.delete(`${URL}/${curso._id}`).then(_ => {
                this.listar()
                alert('Curso deletado com sucesso!')
            }).catch(error => {
                console.log(error)
                alert('Erro ao deletar curso')
            })
        }
    }

    consultarCurso(curso) {

        this.setState({
            _id : curso._id,
            codigo: curso.codigo,
            descricao: curso.descricao,
            cargaHoraria: curso.cargaHoraria,
            preco: curso.preco,
            categoria: curso.categoria
        })
    }

    trataSucesso(){

    }

    trataErro(){
        
    }

    render() {
        return (
            <div className="border-right pl-3 pr-3">
                <div>
                    <div className="row border-bottom">
                        <div className="col-md-6">
                            <FormCurso
                                codigo={this.state.codigo}

                                descricao={this.state.descricao}

                                cargaHoraria={this.state.cargaHoraria}

                                preco={this.state.preco}

                                categoria={this.state.categoria}

                                codigoChange={this.codigoChange.bind(this)}

                                descricaoChange={this.descricaoChange.bind(this)}

                                cargaChange={this.cargaChange.bind(this)}

                                precoChange={this.precoChange.bind(this)}

                                categoriaChange={this.categoriaChange.bind(this)}

                                adicionar={this.adicionar.bind(this)}

                                isAtualizar={this.state._id ? true : false}

                                limpar={this.limpar.bind(this)}

                            />
                        </div>
                        <div className="col-md-6">
                            <ListCurso
                                cursos={this.state.cursos}
                                removerCurso={this.removerCurso.bind(this)}
                                consultarCurso={this.consultarCurso.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}