import React from 'react'
import {connect} from 'react-redux'
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      other: ''
    }
  }
  login() {
    this.props.history.push('/login')
  }
  handleChange(key, val) {
    this.setState({ [key]: val.target.value })
   
  }
  handleClick() {
    console.log(this.props)
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <h2>注册页{this.props.count}and{this.props.match.params.id}</h2>
        用户名：<input onChange={v => this.handleChange('username', v)} />
        密码：<input />
        备注：<input />
        <button onClick={() => { this.login() }}>登陆</button>
        <button onClick={() => { this.handleClick()}}>注册</button>
      </div>

    )

  }
}
Register =connect(state=>state.userinfo)(Register)
export default Register