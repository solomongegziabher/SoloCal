const FeedbackForm = () => {
    // form JSX
        const [name, setName] = useState('')
    // other inputs

    return (
    <form>
        <input 
        value={name}
        onChange={e => setName(e.target.value)} 
        />
        // other inputs  
    </form>
    )
}