
import React from 'react';
import PageHeader from '../components/PageHeader';
import AboutContent from '../components/About';
import Leadership from '../components/Leadership';
import Committees from '../components/Committees';

const About: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="About" 
        subtitle="We are uniting changemakers to reshape a future where business success and planetary stewardship are inseparable."
        highlight="The Centre"
      />
      <AboutContent />
      <Leadership />
      <Committees />
    </>
  );
};

export default About;
