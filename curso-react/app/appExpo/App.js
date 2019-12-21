import React from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/home';
import Contatos from './screens/contato';
import Cursos from './screens/cursos';

const Stack = createStackNavigator({
  Home : {
    navigationOptions : {
      title: 'Home'
    },
    screen: Home
  },
  Contatos : {
    navigationOptions : {
      title: 'Contatos'
    },
    screen: Contatos
  },
  Cursos : {
    navigationOptions : {
      title: 'Cursos'
    },
    screen: Cursos
  }
})

export default createAppContainer(Stack);