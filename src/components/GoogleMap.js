import React, { Component } from 'react';

export default class GoogleMap extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.map.setCenter({ lat: nextProps.lat, lng: nextProps.lng })
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.$map, {
      center: { lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lng) },
      zoom: 10
    })
    this.marker = new google.maps.Marker({
      position: { lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lng) },
      map: this.map
    })
  }
  render() {
    return (
      <div className="cell">
        <div ref={(el) => { this.$map = el; }} style={{ height: '100%' }}></div>
      </div>
    );
  }
}
