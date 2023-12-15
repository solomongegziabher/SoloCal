import React from 'react'
import Header from '../components/Header'
import { fetchTools } from '../api/mockApi'

function ToolsList({ tools }) {
  //...

  return (
    // ...
    {tools.map(tool => (
      <Tool key={tool.id} tool={tool} />
    ))}
  )
  const [tools, setTools] = useState([])

  useEffect(() => {
    fetchTools()
      .then(data => setTools(data))
  }, [])
}

// Tool.js
function Tool({ tool }) {
  // render tool 
}
export default ToolsList
