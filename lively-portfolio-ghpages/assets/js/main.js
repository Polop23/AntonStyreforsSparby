// Small helpers
document.getElementById('y').textContent = new Date().getFullYear();

// Optional: cursor trail (very light), disabled if prefers-reduced-motion
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced){
  let trail = document.createElement('canvas');
  trail.width = window.innerWidth; trail.height = window.innerHeight;
  trail.className = 'cursor-trail';
  Object.assign(trail.style, {position:'fixed', inset:0, zIndex:0, pointerEvents:'none', mixBlendMode:'multiply'});
  document.body.appendChild(trail);
  const ctx = trail.getContext('2d');
  let dots = [];
  window.addEventListener('resize', ()=>{trail.width=innerWidth; trail.height=innerHeight;});
  window.addEventListener('mousemove', (e)=>{
    dots.push({x:e.clientX, y:e.clientY, r:10, a:0.35, h: (performance.now()/20)%360});
  });
  function tick(){
    ctx.clearRect(0,0,trail.width,trail.height);
    for (let i=dots.length-1; i>=0; i--){
      const d = dots[i];
      ctx.fillStyle = `hsla(${d.h}, 90%, 60%, ${d.a})`;
      ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI*2); ctx.fill();
      d.r *= 0.96; d.a *= 0.95;
      if (d.a < 0.02) dots.splice(i,1);
    }
    requestAnimationFrame(tick);
  }
  tick();
}
