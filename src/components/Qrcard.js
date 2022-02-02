import React from "react";
import { Card, Container, Image, Title } from "./styles/Qrcode.styled";
import qrimg from "../images/image-qr-code.png";

const Qrcard = () => {
  return (
    <Container>
      <Card>
        <Image src={qrimg} alt="" />
        <Title>
          <h1>Improve Your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to next level
          </p>
        </Title>
      </Card>
    </Container>
  );
};

export default Qrcard;
