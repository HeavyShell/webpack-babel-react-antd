import React from 'react';
import { connect } from 'react-redux'
import Router from './router'
import { LocaleProvider } from 'antd';

//antd国际化翻译文件包
import zh_CN_ant from 'antd/es/locale-provider/zh_CN';
import en_US_ant from 'antd/es/locale-provider/en_US';
import zh_HK_ant from 'antd/es/locale-provider/zh_TW';

//antd国际化翻译使用
const lOCALE_ANTD={
    zh_CN:zh_CN_ant,
    en_US:en_US_ant,
    zh_HK:zh_HK_ant,
};

const mapStateToProps = (state, ownProps) => {
  return {
    app:state.app
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

class App extends React.Component{
    
    constructor(props){
        super(props)
    }

    render(){
        const {app} = this.props;
        return(
            <LocaleProvider locale={lOCALE_ANTD[app.get('i18n')]} >
                <Router />
            </LocaleProvider>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);