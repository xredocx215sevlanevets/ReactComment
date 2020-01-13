import React, { Component } from 'react'

// padrao js sem ";"

class NewComment extends Component {

  state = {
    newComment: ''
  }

  // pegar valor dentro do textArea
  handleChange = event => {
    // esse event contem o componente - target dess compoment, comp la da tela que estou manipulando
    // guardando valor numa var
    this.setState({
      newComment: event.target.value
    })
  }

  // mandar valor para o app; para o componente pai
  sendComment = () => {
    this.props.sendComment(this.state.newComment)
    this.setState({
      newComment: ''
    })
  }

  render() {
    return (
      <div>
        { /*on Chnage to get value from a componemt */}
        <textarea value={this.state.newComment} onChange={this.handleChange}></textarea>
        <button onClick={this.sendComment}>Enviar</button>
        { /*this.state.newComment */}
        {/*JSON.stringify(this.state)*/}
      </div>
    )
  }
}

export default NewComment