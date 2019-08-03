import React from 'react';

export default function Character({ info }) {
  return (
    <div>
      <h3>{info.name}</h3>
      <p>Height: {info.height} </p>
      <p>Mass: {info.mass} </p>
      <p>Hair Color: {(info.hair_color)}</p>
      <p>Skin Color: {(info.skin_color)}</p>
      <p>Eye Color: {(info.eye_color)}</p>
      <p>Birth Year: {info.birth_year}</p>
      <p>Gender: {(info.gender)}</p>
    </div>
  )
}