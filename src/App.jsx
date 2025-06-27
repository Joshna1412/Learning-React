import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import PasswordItem from './components/PasswordItem'
import { v4 as uuidv4 } from 'uuid'

const passwordsList = []

class App extends Component {
  state = {
    passwordsList: passwordsList,
    website: '',
    username: '',
    password: '',
    searchInput: ''
  }
  handleWebsiteInput = event => {
    this.setState({ website: event.target.value })
  }
  handleUsernameInput = event => {
    this.setState({ username: event.target.value })
  }
  handlePasswordInput = event => {
    this.setState({ password: event.target.value })
  }
  handleSearchInput = event => {
    this.setState({ searchInput: event.target.value })
  }
  onSubmit = event => {
    event.preventDefault()
    const { website, username, password, passwordsList } = this.state

    const newList = {
      id: uuidv4(),
      website,
      username,
      password
    }
    this.setState({ passwordsList: [...passwordsList, newList] })
    this.setState({ website: "", username: '', password: '' })
  }

  deletePassword = idValue => {
    const { passwordsList } = this.state

    const updatedList = passwordsList.filter(each =>
      each.id != idValue
    )

    this.setState({ passwordsList: updatedList })

  }
  searchInputResults = () => {
    const { searchInput, passwordsList } = this.state

    const updatedList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase())
    )
    return updatedList
  }
  render() {
    const { website, username, password, searchInput } = this.state
    const filteredPasswordList = this.searchInputResults()
    return (
      <div className='container'>
        <Header />
        <div className='form-container'>
          <form className='user-input-container' onSubmit={this.onSubmit}>
            <h3 className='input-heading'>Add password</h3>
            <div className='inputs-container'>
              <div className='icon-input-container'>
                <div className='icon-container'>
                  <img className='website-icon' src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png" alt="website-logo" />
                </div>
                <div className='input-container'>
                  <input className='input-box' type="text" value={website} placeholder='Enter Website' onChange={this.handleWebsiteInput} required ></input>
                </div>
              </div>
              <div className='icon-input-container'>
                <div className='icon-container'>
                  <img className='website-icon' src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png" alt="user-logo" />
                </div>
                <div className='input-container'>
                  <input className='input-box' type="text" value={username} placeholder='Enter Username' onChange={this.handleUsernameInput} required ></input>
                </div>
              </div>
              <div className='icon-input-container'>
                <div className='icon-container'>
                  <img className='website-icon' src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png " alt="password-logo" />
                </div>
                <div className='input-container'>
                  <input className='input-box' type="password" value={password} placeholder='Enter Password' onChange={this.handlePasswordInput} required ></input>
                </div>
              </div>
            </div>
            <div className='button-container'>
              <button className='submit-button' type="submit">Add</button>
            </div>
          </form>
          <div className='password-manager-img-container'>
            <img className='password-manager-icon' src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png" alt="password-manager" />
          </div>
        </div>
        <div className='passwords-container'>
          <div className='passwords-container-header'>
            <div className='heading-passwords'>
              <h2 className='heading-password'>Your Passwords <span className='list-count'>{filteredPasswordList.length}</span></h2>
            </div>
            <div className='search-icon-input-container'>
              <div className='search-icon-container'>
                <img className='search-icon' src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png" alt="search-icon" />
              </div>
              <div className='input-container'>
                <input className='input-box' value={searchInput} type="search" placeholder='Search' onChange={this.handleSearchInput}></input>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid #ccc", margin: "20px 0" }}></div>
          {filteredPasswordList.length > 0 ? (<ul className='passwords-list-container'>
            {
              filteredPasswordList.map(each =>
                <PasswordItem key={each.id} passwordDetails={each} onDelete={this.deletePassword} />
              )
            }
          </ul>) :
            <div>
              <img className='no-passwords-image' src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png" alt="no-passwords" />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default App