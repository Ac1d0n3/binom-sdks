import {
    trigger,
    animate,
    transition,
    style,
    query
  } from '@angular/animations';
  
  export const routerFadeIn = trigger('routerFadeIn', [
    transition('* => *', [
      query(
        ':enter',
        [
          style({
            opacity: 0,
            position: 'absolute',
            height: '100%',
            width: '100%'
          })
        ],
        { optional: true }
      ),
      query(
        ':leave',
        // here we apply a style and use the animate function to apply the style over 0.3 seconds
        [
          style({
            opacity: 1,
            position: 'absolute',
            height: '100%',
            width: '100%'
          }),
          animate('0.2s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({
            opacity: 0,
            position: 'relative',
            height: '100%',
            width: '100%'
          }),
          animate('1.5s', style({ opacity: 1 }))
        ],
        { optional: true }
      )
    ])
  ]);