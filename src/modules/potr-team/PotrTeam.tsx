import React from 'react';

export const PotrTeam = () => {
  return (
    <section className="potr-team" id="about-us">
      <h2 className="potr-team__title">Meet the POTR team!</h2>

      <h3 className="potr-team__name potr-team__name--top outlined">Martin</h3>

      <div className="potr-team__card">
        <div className="potr-team__img" />

        <p className="potr-team__description">
          Andy and Martin are experienced product designers with a love of
          plants and the environment. They have over ten years combined industry
          experience in bringing products to market at some of the worlds
          largest consumer product companies.
          <br /> <br />
          Having studied Product Design Engineering together at the Glasgow
          School of Art, they have a long history of working as a team on a
          variety of design projects.
        </p>
      </div>

      <h3 className="potr-team__name potr-team__name--bottom outlined">Andy</h3>
    </section>
  );
};
