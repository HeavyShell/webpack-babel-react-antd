import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom"

import Index from './page/index';
import List from './page/list/index';
import Info from './page/info/index';

class App extends React.Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={Index} />
                    <Route path={'/list'} component={List} />
                    <Route path={'/info/:id'} component={Info} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App