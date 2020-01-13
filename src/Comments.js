import React from 'react'
// toda x que precisa usar o jsx precisa importar o react para depois poder converter para react .create elements
// sem component ainda precissamos do react pq ess jsx vai vai ser convertido para react create element/createcomponent
// pk na transplicao vamos utilizar o babel mas o codigo resultant precisa conhecer o react porisso que se usamos jsx temos que importar o react
import Comment from './Comment'

//function statelss component = pure function
// destruction assignment porque é neste caso a unica coiza do props que vamos utlizar
const Comments = ({ comments }) => {
  const keys = Object.keys(comments);
  return (
    <div>
      {keys.map(key => <Comment key={key} c={comments[key]} />)}
    </div >
  )
}

export default Comments