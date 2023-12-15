const Tool = ({tool}) => {
    return ( 
      <div className="tool">
        <h3>{tool.name}</h3> 
      </div>
    )
      <a href={`/tool/${tool.id}`}>
          <Tool {...tool} />
      </a>
  }
