import styles from './style.scss'; // eslint-disable-line no-unused-vars
import vars from './merge-vars.json'; // eslint-disable-line no-unused-vars

import {shrinkElementsContent, checkDisclaimerContent, hideEmptyCTALinks} from '../../../assets/js/common/helpers';

const ctaLinks = '.cta';

const disclaimerElements = {
    content: '.disclaimer-content',
    button: '.disclaimer-button',
    closeButton: '.disclaimer-close',
    copy: '.disclaimer-copy',
};

const templateElements = [
    {
        selector: '.headline',
        maxSize: 33,
    }, {
        selector: '.headline2',
        maxSize: 45,
    }, {
        selector: '.persistent-disclaimer',
        maxSize: 26,
    }, {
        selector: ctaLinks,
        maxSize: 20,
    }, {
        selector: disclaimerElements.copy,
        maxSize: 295,
    }
];

window.onload = function() {
    shrinkElementsContent(templateElements);
    checkDisclaimerContent(disclaimerElements);
    hideEmptyCTALinks(ctaLinks);
};
