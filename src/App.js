import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    newWord: '',
    wordList: [],
  }

  changeInput = event => {
    this.setState({newWord: event.target.value})
  }

  updateList = () => {
    const {newWord} = this.state
    this.setState(prevState => ({
      wordList: [...prevState.wordList, {id: uuidV4(), word: newWord}],
      newWord: '',
    }))
  }

  emptyView = () => (
    <div className="noNamesImageContainer">
      <img
        className="imageClass"
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    </div>
  )

  contentView = () => {
    const {wordList} = this.state
    return (
      <ul className="ulListContainer">
        {wordList.map(each => (
          <li key={each.id}>
            <p>
              {each.word} : {each.word.length}
            </p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {wordList, newWord} = this.state
    console.log(wordList)
    let decideContent = ''
    if (wordList.length === 0) {
      decideContent = this.emptyView
    } else {
      decideContent = this.contentView
    }

    return (
      <div className="mainContainer">
        <div className="contnentContainer">
          <div className="counterContainer">
            <h1>Count the Characters Like a boss...</h1>
            {decideContent()}
          </div>
          <div className="inputContainer">
            <h1>Character Counter</h1>
            <form className="inputElementContainer">
              <input
                value={newWord}
                onChange={this.changeInput}
                className="InputEl"
                placeholder="Enter the Characters Here"
                type="text"
              />
              <button onClick={this.updateList} type="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
