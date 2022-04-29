import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Location = () => {
    const position = [23.82140941121883, 90.4467790971856]
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                <Col>
                </Col>
                <Col>
                    <MapContainer center={position} zoom={23} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                    </Col>
            </Row>

        </div>
    );
};

export default Location;