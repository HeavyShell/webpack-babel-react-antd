import React from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
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
      
    }

    goList=(path)=>{
        this.props.history.push(path) 
    }

    render(){
        const {list} = this.props;
        const {name} = this.state;

        return(
            <div>
                <div>Index Page!</div>
                <div>store属性：{list.get('random')||'空的'}<button onClick={()=>this.props.onReduxClick()}>点击生成</button></div>
                <div className={styles.Name}>
                    <div>state属性：my name is {name}.</div>
                    <div className={styles.content}>
                        children Element styles.
                    </div>
                    <div className={styles.link}>
                        <Link to={'/list'}>go list(link方式)</Link>
                        <br />
                        <a onClick={()=>this.goList('/list')}>go list(push方式)</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);