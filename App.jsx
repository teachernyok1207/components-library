import React from 'react';
import Badges from './components/Badges/index';
import Banner from './components/Banners/index';
import Cards from './components/Cards/index';
import Tooltip from './components/Tooltip/index';
import Toast from './components/ToastPopup/index';
import Testimonials from './components/Testimonials/index';

export default function App() {
  // Colors for Badges
  const badgeColor = [
    'gray',
    'red',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
    'pink',
  ];

  // Colors for Banners
  const bannerStyle = [
    {
      theme: 'success',
      color: 'green',
      icon: 'fa-solid fa-circle-check',
      title: 'Congratulations!',
    },
    {
      theme: 'warning',
      color: 'yellow',
      icon: 'fa-solid fa-triangle-exclamation',
      title: 'Attention',
    },
    {
      theme: 'error',
      color: 'red',
      icon: 'fa-solid fa-circle-xmark',
      title: 'There is a problem with your application',
    },
    {
      theme: 'neutral',
      color: 'blue',
      icon: 'fa-solid fa-circle-info',
      title: 'Update Available',
    },
  ];

  return (
    <div className="all-content">
      <h1>Components Library++</h1>

      <Badges>
        <Badges.Squared color={badgeColor} badgeStyle="squared" />
        <Badges.Pill color={badgeColor} badgeStyle="pill" />
      </Badges>

      <Banner>
        <Banner.MultiLine theme={bannerStyle} />
        <Banner.SingleLine theme={bannerStyle} />
      </Banner>

      <Cards>
        <div className="cards">
          <div className="cards-icon-div">
            <i className="fa-solid fa-cloud-arrow-up cards-icon"></i>
          </div>
          <p className="cards-title">Easy Deployment</p>
          <p className="cards-text">
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
            magna sit morbi lobortis.
          </p>
        </div>
      </Cards>

      <Tooltip>
        <div className="tooltip-header" role="tooltip">
          <i className="fa-solid fa-inbox"></i>
          <span className="tooltip-title">Archive notes</span>
        </div>
        <p className="tooltip-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
          tenetur.
        </p>
      </Tooltip>

      <Toast />

      <Testimonials>
        <Testimonials.Image />
        <Testimonials.Plain />
      </Testimonials>
    </div>
  );
}
