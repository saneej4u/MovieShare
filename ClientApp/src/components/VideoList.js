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
                    {videos.map((video) => <div class="col-4 col-md-4" key={video.id}>
                        <div>
                            <iframe width="100%" src={video.videoLinks} title="YouTube video1" allowfullscreen></iframe>
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