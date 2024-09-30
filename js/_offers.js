
const offerBtns = document.querySelectorAll('.offer_btn');
offerBtns.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    const offerItem = btn.closest('.offer_item');
    const offerSum = offerItem.querySelector('.offer_sum');
    const offerTopick = offerItem.querySelector('.offer_topick');
    if(offerItem) {
      offerItem.style.backgroundColor = '#9564aa';
    }
    if(offerSum) {
      offerSum.style.color = '#fff';
    }
    if(offerTopick) {
      offerTopick.classList.add('show-topick');
    }
  })

  btn.addEventListener('mouseleave', () => {
    const offerItem = btn.closest('.offer_item');
    const offerSum = offerItem.querySelector('.offer_sum');
    const offerTopick = offerItem.querySelector('.offer_topick');
    if(offerItem) {
      offerItem.style.backgroundColor = '';
    }
    if(offerSum) {
      offerSum.style.color = '';
    }
    if(offerTopick) {
      offerTopick.classList.remove('show-topick');
    }
  })
})
