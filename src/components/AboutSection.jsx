import React from 'react';

const AboutSection = () => {
    return (
        <div className="container">
            <h2>About Section</h2>
            <div className="row">
                <div className="col-md-6">
                    <h3>Company Information</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vitae nisi dignissim, sagittis est vel, dignissim elit. Suspendisse potenti.</p>
                </div>
                <div className="col-md-6">
                    <h3>Team Members</h3>
                    <ul>
                        <li>John Doe</li>
                        <li>Jane Smith</li>
                        <li>Mark Johnson</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;