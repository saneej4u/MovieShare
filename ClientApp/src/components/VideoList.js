import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

export class VideoList extends Component {
    static displayName = VideoList.name;

    constructor(props) {
        super(props);
        this.state = { videos: [], loading: true };
    }

    componentDidMount() {
        this.populateVideos();
    }

    static renderVideosTable(videos) {
        return (
            <div class="container">
                <div class="row">
                    {videos.map((video) => <div class="col-12 col-md-12 px-2 p-4" key={video.id}>

                        <div class="row px-2">
                            <div class="col-6 col-md-6">
                                <iframe width="100%" height="300" src={video.videoLinks} title="YouTube video1" allowfullscreen></iframe>
                            </div>
                            <div class="col-6 col-md-6">
                                <h3> {video.title} </h3>
                                <strong>Description </strong>
                                <p>  {video.description}</p>
                            </div>
                        </div>

                    </div>)}
                </div>
            </div>

        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : VideoList.renderVideosTable(this.state.videos);

        return (
            <div>
                <br />
                <h2> Welcome to movie share </h2>
                <br />
                {contents}
            </div>
        );
    }

    async populateVideos() {
        const token = await authService.getAccessToken();
        const response = await fetch('videos', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ videos: data, loading: false });
    }
}