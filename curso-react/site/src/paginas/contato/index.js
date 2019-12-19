import React from 'react'
import { Cabecalho } from '../../componentes/cabecalho';
import ContatoForm from './form';
import { connect } from 'react-redux';

class ContatoIndex extends React.Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo={`Quer entrar em contato conosco - ${this.props.nome}`}/>
                <ContatoForm></ContatoForm>
            </div>
        )
    }
}

const mapStateToProps = store => ({
    nome : store.contato.nome
})

const Connected = connect(mapStateToProps,null)(ContatoIndex)

export {Connected as ContatoIndex}