import React from 'react';

const About = (props) => {
    let params = new URLSearchParams(props.location.search);
    return (
        <div>
            This is About Page
            Name is {params.get('name')}
        </div>
    )
};

export default About