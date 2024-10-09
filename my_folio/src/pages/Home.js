import React from 'react';
import PText from '../components/PText';
import Button from '../components/Button';

export default function Home() {
  return (
    <div>
      <div className="hero__info">
        <PText />
        <Button btnLink="/projects" btnText="See my works" />
      </div>
      <h1>Home</h1>
    </div>
  );
}
