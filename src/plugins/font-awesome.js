import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGoogle, faFacebook, } from '@fortawesome/free-brands-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';


library.add(faGoogle, faFacebook);

library.add(fasStar, farStar);

export default FontAwesomeIcon;
