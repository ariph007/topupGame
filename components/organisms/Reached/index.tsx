import React from 'react';
import ReachedItem from '../../molecules/ReachedItem';

export default function Reached() {
  return (
    <section className='reached pt-50 pb-50'>
      <div className='container-fluid'>
        <div className='d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4'>
          <ReachedItem
            title='290M+'
            description='Players Top Up'
            divider={false}
          />
          <ReachedItem title='12.500+' description='Games Available' divider />
          <ReachedItem title='99,9%' description='Happy Players' divider />
          <ReachedItem title='4.7%' description='Rating Worldwide' divider />
        </div>
      </div>
    </section>
  );
}
