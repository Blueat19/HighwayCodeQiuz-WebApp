import React from 'react';

const PhotosSection = () => {
    return (
        <div className="container">
            <h2>Photos Section</h2>
            <div className="row">
                <div className="col-md-3">
                    <h3>Album 1</h3>
                    <img src="path/to/photo1.jpg" alt="Photo 1" />
                </div>
                <div className="col-md-3">
                    <h3>Album 2</h3>
                    <img src="path/to/photo2.jpg" alt="Photo 2" />
                </div>
                <div className="col-md-3">
                    <h3>Album 3</h3>
                    <img src="path/to/photo3.jpg" alt="Photo 3" />
                </div>
                <div className="col-md-3">
                    <h3>Album 4</h3>
                    <img src="path/to/photo4.jpg" alt="Photo 4" />
                </div>
            </div>
        </div>
    );
};

export default PhotosSection;