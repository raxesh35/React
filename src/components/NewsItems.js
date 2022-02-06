import React, { Component } from 'react';

class NewsItems extends Component {
    render() {
        let {title,description,imgUrl,newsDetail} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsDetail} target="_sameNews" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItems;