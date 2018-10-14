import React, { Component } from 'react'

class Video extends Component {
    render() {
        return (
            <div>
                <div className="embed-responsive embed-responsive-21by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/0QTUMAPjMP8?rel=0" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}

export default Video