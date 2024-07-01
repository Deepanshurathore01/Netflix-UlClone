function circleChaptakaro() {
  var xscale = 1;
  var yscale = 1;
  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function(dets) {
    xscale = gsap.utils.clamp(0.8, 1.2, 1 + (dets.clientX - xprev) * 0.01);
    yscale = gsap.utils.clamp(0.8, 1.2, 1 + (dets.clientY - yprev) * 0.01);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(dets.clientX, dets.clientY, xscale, yscale);
  });
}

function circleMouseFollower(clientX, clientY, xscale, yscale) {
  document.querySelector('#mincircle').style.transform = `translate(${clientX}px, ${clientY}px) scale(${xscale}, ${yscale})`;
}

circleChaptakaro();
