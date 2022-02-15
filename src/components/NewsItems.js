import React, { Component } from 'react';

class NewsItems extends Component {
    render() {
        let {title,description,imgUrl,newsUrl,author,publishedAt} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target="_sameNews" className="btn btn-sm btn-primary">Read More</a>
                            <p className="card-text"><small className='text-muted'>Auther :: {author?author:'Unknown'}</small></p>
                            <p className="card-text text-muted"><small className='text-muted'>{publishedAt}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItems;