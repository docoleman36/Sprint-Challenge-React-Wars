import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: lightgray;
  width: 300px;
  border-radius: 30%;
  margin-bottom: 20px;
  border: black solid 1px;

`;

export default function Character({ info }) {
  return (
    <Container>
      <h3>{info.name}</h3>
      <div>
        <p>Height: {info.height} </p>
        <p>Mass: {info.mass} </p>
        <p>Hair Color: {(info.hair_color)}</p>
        <p>Skin Color: {(info.skin_color)}</p>
        <p>Eye Color: {(info.eye_color)}</p>
        <p>Birth Year: {info.birth_year}</p>
        <p>Gender: {(info.gender)}</p>
      </div>
    </Container>
  )
}



