import React from 'react';
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import styles from './index.less';

const mapStateToProps = (state, ownProps) => {
    return {
        info:state.info
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onReduxClick: () => {
        dispatch({
          type: 'INFO_TODO',
          random: 'Info Page '+Math.random()
        })
      }
    }
  }

class Index extends React.Component{

    constructor(props){
        super(props);

        this.state={
            
        }
    }

    render(){
        const {match,info,onReduxClick} = this.props;
        
        return(
            <div>
                Info Page!
                <br />
                <div className={styles.Name}>
                    id is {match.params.id}.
                    <div className={styles.content}>
                        children Element. {info.get('random')||'空的'}
                        <button onClick={()=>onReduxClick()}>点击生成</button>
                    </div>
                    <Link to={'/'}>go index</Link>
                    <br />
                    <Link to={'/list'}>go list</Link>
                </div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);