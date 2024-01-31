
export const GifItem = ({title,url}) => {
  return (
    <div className="card">
        <img src={url} alto={title}/>
        <p>{title}</p>
    </div>
  )
}
