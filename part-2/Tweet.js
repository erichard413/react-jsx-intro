const Tweet = ({username, name, date, message}) => {
    return (
        <div className="tweet">
            <h2 className="name">{name}</h2>
            <h3 className="username">@{username}</h3>
            <p className="message">{message}</p>
            <p className="date"><i>Posted on {date}</i></p>
        </div>
    )
} 