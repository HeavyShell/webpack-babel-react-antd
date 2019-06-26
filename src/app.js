import React from 'react';
import { Provider } from 'react-redux'
import store from './reducers/index'
import Global from './global';

class App extends React.Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Provider store={store}>
                <Global />
            </Provider>
        )
    }
}

export default App;