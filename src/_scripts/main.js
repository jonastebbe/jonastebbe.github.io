// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import Blazy from 'blazy';

$(() => {
  new Link(); // Activate Link modules logic
  var bLazy = new Blazy({
  });
  bLazy.revalidate();
});
