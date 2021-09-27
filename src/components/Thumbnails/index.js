import React from "react";
import "./style.css";


class Thumbnails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        photos: [],
    };

        this.searchPhotos = this.searchPhotos.bind(this);
    }

    async searchPhotos() {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=4`);
        const data = await res.json();
        return data;
    }

    async componentDidMount() {
        const photos = await this.searchPhotos();
        this.setState({ photos });
        document.getElementById("title").textContent = photos[0].title;
        document.getElementById("pictures").src = photos[0].url;
    }

    render() {

        const click = (title, url) => {
            document.getElementById("title").textContent = title;
            document.getElementById("pictures").src = url;
        }

        return (
            <div>
            {this.state.photos.map(photo => (
                <img className="img-photo" src={photo.url} onClick={() => click(photo.title, photo.url)} />
            ))}
            </div>
        );
    }
}

export default Thumbnails;