import React from 'react'

export class Cabecalho extends React.Component {
    render() {
        const {titulo, subtitulo} = this.props

        return (
            <header className="pb-2 mt-4 mb-2 border-bottom">
                <h2><strong>{titulo}</strong> -
                <small style={{marginLeft: 10}}>{subtitulo}</small></h2>
            </header>
        )
    }
}