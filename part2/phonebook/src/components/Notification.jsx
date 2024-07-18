const Notification = ({ message, isError}) => {

  const style = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  }

  if (message === null) {
    return null
  }

  if (isError)
    style.color = 'red'

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification