import './index.css'
import Header from '../Header'
import RegisterContext from '../../Context/RegisterContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const OptionItem = props => {
  const {ItemData} = props
  const {displayText, id} = ItemData
  return <option value={id}>{displayText}</option>
}

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        nameInput,
        activeTopic,
        onChangeName,
        onSelectTopic,
        onRegisterNow,
        onShowErrorMsg,
        showErrorMsg,
      } = value
      const onChangeNameInput = event => {
        onChangeName(event.target.value)
      }
      const onChangeSelectTopic = event => {
        const filteredTopic = topicsList.filter(
          eachItem => eachItem.id === event.target.value,
        )
        console.log(filteredTopic)
        onSelectTopic(filteredTopic[0].displayText)
      }

      const onSubmitRegisterNow = event => {
        event.preventDefault()
        if (nameInput === '' && activeTopic === '') {
          onShowErrorMsg()
        } else {
          onRegisterNow()
          const {history} = props
          history.replace('/')
        }
      }

      return (
        <>
          <Header />
          <div className="main-container">
            <div className="sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
                className="website-register-image"
              />
              <form
                className="Register-container"
                onSubmit={onSubmitRegisterNow}
              >
                <h1 className="Register-heading">Let us join</h1>
                <label htmlFor="Username" className="label-style">
                  NAME
                </label>
                <input
                  type="text"
                  id="Username"
                  className="input-style"
                  placeholder="Your name"
                  value={nameInput}
                  onChange={onChangeNameInput}
                />
                <label htmlFor="topic" className="para-style">
                  TOPICS
                </label>
                <select
                  className="select-style"
                  value={activeTopic}
                  onChange={onChangeSelectTopic}
                  id="topic"
                >
                  {topicsList.map(eachItem => (
                    <OptionItem ItemData={eachItem} key={eachItem.id} />
                  ))}
                </select>
                <button type="submit" className="Register-Now-button">
                  Register Now
                </button>
                {showErrorMsg && (
                  <p className="Error-msg">Please enter your name</p>
                )}
              </form>
            </div>
          </div>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
