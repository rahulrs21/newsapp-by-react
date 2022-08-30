import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageURL, newsURL, author, date, source} = this.props;
        return (
            <div className='my-3 mx-2'>
                <div className="card" style={{width: "18rem"}}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
                    {source}
                </span>
   
                    <img src={imageURL ? imageURL : "https://images.thequint.com/thequint%2F2022-04%2Fd9bb2668-5f43-486e-bebd-395d1f2f3f77%2Fgarena.jpg?rect=0%2C0%2C1440%2C756&w=1200&auto=format%2Ccompress&ogImage=true"} className="card-img-top" alt="No Image found" style={{width: "auto", height: "12rem"}} />
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'><small className='text-muted'>By {author} on {date}</small></p>
                    <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
  }
}

export default NewsItem