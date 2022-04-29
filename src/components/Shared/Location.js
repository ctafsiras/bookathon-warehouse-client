import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Location = () => {
    const position = [51.505, -0.09]
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                <Col>
                </Col>
                <Col>
                    <MapContainer style={{height: '100px'}} center={position} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            {/* <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup> */}
                        </Marker>
                    </MapContainer>
                </Col>
            </Row>

        </div>
    );
};

export default Location;