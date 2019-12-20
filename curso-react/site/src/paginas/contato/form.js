import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { dataOnChange, nomeOnChange, emailOnChange, telefoneOnChange, assuntoOnChange, limpar, adicionar } from '../../actions/contatoActions'


class ContatoForm extends Component {

    preAdicionar(evento){
        evento.preventDefault()
        const {data,nome, email,telefone, assunto, adicionar} = this.props

        adicionar(data,nome,email,telefone,assunto)
    }

    render() {
        return (
            <div>
                <h3 className="border-bottom">Formulário</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="data"
                            className="col-sm-3 col-form-label">Data:</label>
                        <div className="col-sm-9">
                            <input type="date"
                                className="form-control" id="data"
                                value={this.props.data} onChange={this.props.dataOnChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nome"
                            className="col-sm-3 col-form-label">Nome:</label>
                        <div className="col-sm-9">
                            <input type="text"
                                className="form-control" id="nome"
                                value={this.props.nome} onChange={this.props.nomeOnChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email"
                            className="col-sm-3 col-form-label">Email:</label>
                        <div className="col-sm-9">
                            <input type="email"
                                className="form-control" id="email"
                                value={this.props.email} onChange={this.props.emailOnChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="telefone"
                            className="col-sm-3 col-form-label">Telefone:</label>
                        <div className="col-sm-9">
                            <input type="tel"
                                className="form-control" id="telefone"
                                value={this.props.telefone} onChange={this.props.telefoneOnChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="assunto"
                            className="col-sm-3 col-form-label">Assunto:</label>
                        <div className="col-sm-9">
                            <textarea className="form-control"
                                id="assunto" rows="5"
                                value={this.props.assunto} onChange={this.props.assuntoOnChange} />
                        </div>
                    </div>
                    <div className="form-group row">

                        <button className="btn btn-primary ml-3 mb-3" onClick={this.preAdicionar.bind(this)} >
                            Adicionar
                        </button>

                        <button className="btn btn-primary ml-3 mb-3" onClick={this.props.limpar}>
                            Limpar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    data: store.contato.data,
    nome: store.contato.nome,
    email: store.contato.email,
    telefone: store.contato.telefone,
    assunto: store.contato.assunto
})

const mapActionsToProps = dispatch => bindActionCreators({
    dataOnChange,
    nomeOnChange,
    emailOnChange,
    telefoneOnChange,
    assuntoOnChange,
    limpar,
    adicionar
}, dispatch)

export default connect(mapStateToProps, mapActionsToProps)(ContatoForm)