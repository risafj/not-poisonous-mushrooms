// based on https://onesheep.org/insights/animate-on-scroll-with-tailwind-css

import { useEffect } from 'react';

const animateOnScrollOver = (entries: any) => {
  entries.forEach((entry: any) => {

    // Is the element in the viewport?
    if (entry.isIntersecting) {

      // Add the fadeIn class:
      entry.target.classList.add('animate-fadeIn');
    } else {
      // If you want the item to fade in on EACH scroll over, use this as well
      // entry.target.classList.remove('animate-fadeIn');
    }
  });
};

export const useScrollAnimations = () => {
  
  // useEffect required because the document has to load before we can target anything
  useEffect(() => {
    // Get all the elements you want to show on scroll
    const targets = document.querySelectorAll('.js-show-on-scroll');

    // Set up a new observer
    const observer = new IntersectionObserver(animateOnScrollOver);

    // Loop through each of the targets
    targets.forEach(function(target) {
    // Hide the element. Note that this is a shortcut - realistically
    // it seems more reliable to add this to the element directly instead
    // of here, because I imagine this will add with a one-frame delay
      target.classList.add('opacity-0');
      // Add the element to the watcher
      observer.observe(target);
    });
  }, []);
};
