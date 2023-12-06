import { Head, Html, Preview, Body, Container, Text, Heading } from "@react-email/components";
import * as React from "react";

export default function EmailFinance() {
  return (
    <Html>
      <Head />
      <Preview>Hi</Preview>
      <Body style={main}>
        <Container style={Container}>
          <Heading style={h1}>CARRYBOY MOTORHOME</Heading>
          <Text style={h2}>Name : Natsakorn</Text>
          <Text style={h2}>Last Name : Liangsorn</Text>
          <Text style={h2}>Phone : 096 764 0387</Text>
          <Text style={h2}>Email : natsakorn.ls@gmail.com</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff"
};

const h1 = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '30px',
  color: '#dd0000'
};

const h2 = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '17px',
  margin: '5px 0',
  color: '#000000'
};