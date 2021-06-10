import { animation, style, animate } from '@angular/animations';

export const fadeUpAnimation = animation([
  style({ opacity: '0', transform: 'translate(0,{{offset}})' }),
  animate('{{duration}} {{delay}} cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: '1', transform: 'translate(0,0)' }))
]);

export const fadeInAnimation = animation([
  style({ opacity: '0' }),
  animate('{{duration}} {{delay}} cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: '1' }))
]);

export const fadeRightAnimation = animation([
    style({ opacity: '0', transform: 'translate({{offset}},0)' }),
    animate('{{duration}} {{delay}} cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: '1', transform: 'translate(0,0)' }))
]);

export const fadeLeftAnimation = animation([
    style({ opacity: '0', transform: 'translate({{offset}},0)' }),
    animate('{{duration}} {{delay}} cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: '1', transform: 'translate(0,0)' }))
]);
