import React from 'react';

import SiteNav from '/src/components/SiteNav';
import WhatWeTreat from '/src/components/WhatWeTreat';
import Services from '/src/components/Services';
import WhatToExpect from '/src/components/WhatToExpect';
import CTA from '/src/components/CTA'

import Footer from '/src/components/Footer';

function WhatWeTreatPage() {

  return (
    <>
      <SiteNav />
      <WhatWeTreat />
      <WhatToExpect />
      <Services />
      <CTA />
      <Footer />
    </>
  )
}

export default WhatWeTreatPage;
