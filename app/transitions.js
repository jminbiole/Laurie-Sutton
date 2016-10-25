const time2 = 5000;
export default function(){
  this.transition(
    this.fromRoute('page'),
    this.toRoute('about'),
    this.use('toLeft', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('toRight', {
      use: [`flyTo`, { time2 }],
    })
  );
  this.transition(
    this.fromRoute('page'),
    this.toRoute('blogs'),
    this.use('toUp', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('toDown', {
      use: [`flyTo`, { time2 }],
    })
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('blogs'),
    this.use('toUp', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('toDown', {
      use: [`flyTo`, { time2 }],
    })
  );
}
