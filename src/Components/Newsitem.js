import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
      let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18.5rem"}}>
        <img className="card-img-top" src={!imageUrl?"https://images.indianexpress.com/2022/02/NASA_Image_NEW1.jpg":imageUrl} alt="Card imge cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
