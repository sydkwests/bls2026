import React from 'react';
import PageHeader from '../components/PageHeader';
import Competitions from '../components/Competitions';

const Events: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Competitions &" 
        subtitle="Showcase your talent on a national stage. Engage in high-impact challenges."
        highlight="Events"
      />
      <Competitions />
      {/* Additional Expo Details could go here */}
    </>
  );
};

export default Events;