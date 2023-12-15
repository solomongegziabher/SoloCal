import React from 'react'
import Header from '../components/Header'

function LoginPage() {
  return (
    <div>
      <h1>Login</h1> 
    </div>
  )
}
  const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      // submit logic
    }

    return (
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
    )

export default LoginPage
