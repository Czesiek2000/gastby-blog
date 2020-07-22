import React from 'react';
import styled from 'styled-components';

class HomePost extends React.Component {
    render() {
        return (
            <div className="postsContainer">
                <h1>Newest Posts</h1>
                <div className="posts">
                    <div className="postContainer">
                        <img src={"https://picsum.photos/200/300"}/>
                        <h3 className="postTitle">Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt eget eros ut molestie. Quisque condimentum molestie quam, sit amet varius turpis commodo et. Nulla luctus eget mauris a scelerisque. Aenean rutrum, sapien quis luctus consequat, libero dui gravida arcu, vel iaculis leo magna nec velit. Nulla suscipit tristique vestibulum. </p>
                        <a href="#">Read More ..</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePost;