import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import mapMarker from "./img/mapmarker.svg";
import { Controller } from "./Controller";
// import "./App.css";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoibWF4NDMiLCJhIjoiY2ptcXJycGo4MXQ0djN2cDUwYTUwcnN1eiJ9.dyz_ArSvxmcNQ4NL0HPHWQ";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: -73.54063,
      latitude: 45.593163,
      zoom: 12,
      showLocations: true
    };
  }

  onViewportChange(viewport) {
    const { latitude, longitude, zoom } = viewport;
    this.setState({ latitude, longitude, zoom });
  }

  render() {
    const { latitude, longitude, zoom, showLocations } = this.state;
    const { innerWidth: width, innerHeight: height } = window;
    const viewport = {
      width,
      height,
      longitude,
      latitude,
      zoom,
      pitch: 0,
      bearing: 0
    };

    return (
      <div>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={vp => this.onViewportChange(vp)}
        >
          <Controller
            onLocationClicked={() =>
              this.setState({ showLocations: !showLocations })
            }
            onViewportChange={vp => this.onViewportChange(vp)}
          />
          <Marker
            latitude={45.593163}
            longitude={-73.54063}
            offsetLeft={-25}
            offsetTop={-50}
          >
            <img
              src={mapMarker}
              style={{ height: "50px", width: "50px" }}
              alt="Photo-ticket"
            />
          </Marker>
        </ReactMapGL>
      </div>
    );
  }
}

export default App;
