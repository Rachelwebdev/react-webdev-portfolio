import Loader from 'react-loaders';
import './Contact.scss';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Sidebar from '../Sidebar/Sidebar';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yz5xn5o',
        'template_sqvnelr',
        form.current,
        'Ng4uAkBkngl1tFbTD',
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Message NOT sent');
        },
      );
  };

  return (
    <>
      <Sidebar />
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact me</h1>
          <p>
            I am interested in full time opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, do not hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    id=""
                    cols="30"
                    rows="10"
                  />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Rachel Isaac,
          <br />
          Dubai, UAE
          <br />
          <span className="my-email">rachelisaac995@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Rachel lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Contact;
