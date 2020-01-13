import React, { Component } from 'react'

import Comments from './Comments';
import NewComment from './NewComment'

import { database } from './firebase'

// Boas Praticas
// padrao js sem ";"
//iniciar sem com fucntion statelss component para trocar se precisar depois gerenciar o estado interno
// var sempre com const para depois ver se troca para let


class App extends Component {

  // duas coizas que faz um componente renderizar: toda x que um 
  // estado interno muda ou toda que x que suas props mudam
  // rerender  

  state = {
    comments: {},
    isLoading: false
  }

  // Salvando Comentario
  sendComment = comment => {
    // id novo para ess comentario
    const id = database.ref().child('comments').push().key
    //console.log(id);

    //setar posicao do id com esse valor novo
    const comments = {}

    //criar objecto que tem o caminho total que eu quero + o conteudo que eu quero dentro dele
    comments['comments/' + id] = { comment }
    database.ref().update(comments)

    // depois da db nao precisa setar o estado interno que ele ja troca para mi automaticamento
    // comment, vem do componente filho
    // this.setState({
    //   comments: [...this.state.comments, comment + ' ' + id],
    // })
  }

  // metodos de lifeCycle
  // sair do DOM virtual e acabou de ir para o DOM real
  componentDidMount() {
    this.setState({ isLoading: true })
    this.comments = database.ref('comments')

    // track change on the db
    // toda que trocar o ess funcao e chamado e damos o setstate
    this.comments.on('value', snapshot => {
      //console.log(snapshot.val())
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      })
    })
  }

  render() {
    return (
      <div>
        { /*newComent */}
        <NewComment sendComment={this.sendComment} />
        <Comments comments={this.state.comments} />
        {
          /* conditional redering */
          this.state.isLoading && <p>Carregando...</p>
        }
      </div >
    )
  }
}

export default App
