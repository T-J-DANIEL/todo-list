const Alert = ({message,editing,deleted}) => {
    return(
        <div className={`alert ${editing?"editing":"delete"}`}>
            {message}
        </div>
    )
}

export default Alert