import React, { Component } from 'react'

export class FormCurso extends Component {
    render() {
        return (
            <div className="border-right pl-3 pr-3">
                <h3 className="border-bottom">Formulário</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="codigo"
                            className="col-sm-4 col-form-label">
                            Código:
                        </label>
                        <div className="col-sm-8 col-8">
                            <input type="number"
                                className="form-control" id="codigo" value={this.props.codigo} onChange={this.props.codigoChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="descrição"
                            className="col-sm-4 col-form-label">
                            Descrição:
                        </label>
                        <div className="col-sm-8 col-8">
                            <input type="text"
                                className="form-control" id="descricao" value={this.props.descricao} onChange={this.props.descricaoChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cargaHoraria"
                            className="col-sm-4 col-form-label">
                            Carga Horária:</label>
                        <div className="col-sm-8 col-8">
                            <input type="number"
                                className="form-control" id="cargaHoraria" value={this.props.cargaHoraria} onChange={this.props.cargaChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="preco"
                            className="col-sm-4 col-form-label">
                            Preço:</label>
                        <div className="col-sm-8 col-8">
                            <input type="number"
                                className="form-control" id="preco" value={this.props.preco} onChange={this.props.precoChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="categoria"
                            className="col-sm-4 col-form-label">Categoria:</label>
                        <div className="col-sm-8 col-8">
                            <select className="form-control" id="categoria" value={this.props.categoria} onChange={this.props.categoriaChange} >
                                <option>INFORMATICA</option>
                                <option>ENGENHARIA</option>
                                <option>ADMINISTRACAO</option>
                                <option>REDES</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button
                            className="btn btn-primary ml-3 mb-3" onClick={this.props.adicionar}>
                            {this.props.isAtualizar ? 'Atualizar' : 'Adicionar'}
                        </button>
                        <button
                            className="btn btn-primary ml-3 mb-3" onClick={this.props.limpar}>
                            Limpar
                        </button>
                    </div>                    
                </form>
            </div>
        )
    }
}