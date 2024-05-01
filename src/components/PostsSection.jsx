import React from 'react';

const PostsSection = () => {
    return (
        <div className="container">
            <h2>Posts Section</h2>
            <div className="row">
                <div className="col-md-8">
                    <h3>Latest Posts</h3>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Post 1</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Post 2</h5>
                            <p className="card-text">Sed vitae nisi dignissim, sagittis est vel, dignissim elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h3>Categories</h3>
                    <ul>
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PostsSection;