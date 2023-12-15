import FeedbackForm from './FeedbackForm'
const tools = [
    {name: 'Caliper'}, 
    {name: 'Micrometer'},
    // etc
  ]
  
  function ToolsList() {
    return (
      <div>
        {tools.map(tool => (
          <Tool key={tool.name} tool={tool} />  
        ))}
      </div>
      
    )
  }
