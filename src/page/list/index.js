import React from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import axios from 'axios'
import { Button, DatePicker } from 'antd'
import styles from './index.less';

const mapStateToProps = (state, ownProps) => {
  return {
    list:state.list
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onReduxClick: () => {
      dispatch({
        type: 'LIST_TODO',
        random: Math.random()
      })
    },
    setData: (list) => {
      dispatch({
        type: 'LIST_SET_DATA',
        payload:{
          list
        }
      })
    },
    onChangeLang: (value) => {
      dispatch({
        type: 'APP_CHANGE_LANG',
        payload:{
          value
        }
      })
    }
  }
}

class Index extends React.Component{

    constructor(props){
        super(props);

        this.state={
            name:'Tom'
        }
    }

    componentDidMount() {

      const {setData} = this.props;

      axios.get('http://127.0.0.1:30001/api/v1/list').then(({data:{data}})=>{
        setData(data['lists'])
      }).catch((e)=>{
        console.log(e)
      })
      
    }

    render(){
        const {list} = this.props;
        const {name} = this.state;
        
        const data=list.get('byId').toList();

        return(
            <div>
                List Page!
                <br />
                <div>
                    random is {list.get('random')||'空的'} 
                    <button onClick={()=>this.props.onReduxClick()}>点击生成</button>
                    <Button onClick={()=>this.props.onReduxClick()}>点击生成</Button>
                </div>
                <div className={styles.Name}>
                    my name is {name}.
                    <div className={styles.content}>
                        children Element.
                    </div>
                    <Link to={'/'}>go index</Link>
                    <br />
                    <Link to={'/info/'+Math.ceil(Math.random()*10)}>go info</Link>
                </div>
                <div>
                        {
                            data.map((item,index)=>{
                                return <div key={item.get('id')}>{index}.{item.get('name')}</div>
                            })
                        }
                </div>
                <div>
                  <Button onClick={()=>this.props.onChangeLang('zh_CN')}>中文</Button>
                  <Button onClick={()=>this.props.onChangeLang('en_US')}>英文</Button>
                  <Button onClick={()=>this.props.onChangeLang('zh_HK')}>繁体</Button>
                </div>
                <div>
                  <DatePicker />
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);