import React from 'react'
import { connect } from 'react-redux'
import { add,addList } from '../../redux/actions/userAction'
import '../../style.css'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: null,
      selected: null,

    }
  }
  componentWillMount() {
    this.setState({ list: this.props.list })
  }
  enter() {
    this.props.add(this.state.username, this.state.password)
    // console.log(this.props.store)
  }
  register() {
    this.props.history.push('/register')
  }
  handleChange(key, val) {
    this.setState({ [key]: val.target.value })
  }
  addList() {
    this.props.addList(this.state.username)
  }
  selected(index) {
    this.setState({ 'checked': index })
  }
  checked(value) {
    if (typeof (value.checked) === undefined) {
      value.checked = true
    } else {
      value.checked = !value.checked
    }
    this.setState({})
    console.log(this.state)
  }
  render() {
    const count = this.props.count
    const list = this.state.list
    return (
      <div>
        <h2>登陆页{count}</h2>
        <input type='text' onChange={e => { this.handleChange('username', e) }} />
        <input type='password' onChange={e => { this.handleChange('password', e) }} />
        <button onClick={() => { this.enter() }} >登陆</button>
        <button onClick={() => { this.register() }}>注册</button>
        <button onClick={this.props.add}>add</button>
        <button onClick={() => this.addList()}>addList</button>
        <div>
          {this.props.list.map((value, index) =>
            <p key={index} className={`select ${this.state.checked === index ? 'checked' : ''}`} onClick={() => this.selected(index)} >{value.num}</p>
          )}
          <hr />
          {list.map((value, index) =>
            <p key={index} className={`select ${value.checked === true ? 'checked' : ''}`} onClick={() => this.checked(value)} >{value.num}</p>
          )}
          <hr />
          <p className={`select ${this.state.selected === 1 ? 'checked' : ''}`} onClick={() => this.setState({ selected: 1 })}>12</p>
          <p className={`select ${this.state.selected === 2 ? 'checked' : ''}`} onClick={() => this.setState({ selected: 2 })}>132</p>
          <p className={`select ${this.state.selected === 3 ? 'checked' : ''}`} onClick={() => this.setState({ selected: 3 })}>142</p>
          <hr />
        </div>
      </div>

    )

  }
}

Login = connect(state => state.userinfo, { add, addList })(Login)
export default Login