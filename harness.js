// Supplied camera navigation and accessible controls. Do not edit.
const details = {
  energy: {name: 'Energy Display', description: 'Solar-panel exhibit: inspect the panel face and its cell grid.'},
  mechanisms: {name: 'Mechanisms Display', description: 'Door exhibit: inspect the yellow hinge and the partially open door.'},
  entrance: {name: 'Entrance', description: 'Entrance: energy exhibit on the left; door mechanism on the right.'}
};
function validVector(v) { return Array.isArray(v) && v.length === 3 && v.every(Number.isFinite); }
function visit(key) {
  const destination = destinations[key];
  if (!destination || !validVector(destination.position) || !validVector(destination.target)) {
    document.querySelector('#status').textContent = 'Destination incomplete: enter its position and target in student.js.';
    return;
  }
  const [x,y,z] = destination.position;
  const [tx,ty,tz] = destination.target;
  const dx = tx-x, dy = ty-y, dz = tz-z;
  if (Math.hypot(dx,dy,dz) === 0) {
    document.querySelector('#status').textContent = 'Position and target must be different.';
    return;
  }
  const camera = document.querySelector('#visitor-camera');
  camera.setAttribute('position', {x,y,z});
  camera.setAttribute('rotation', {
    x: Math.atan2(dy, Math.hypot(dx,dz))*180/Math.PI,
    y: Math.atan2(-dx,-dz)*180/Math.PI,
    z: 0
  });
  document.querySelector('#status').textContent = `${details[key].name} — viewpoint selected.`;
  document.querySelector('#description').textContent = details[key].description;
  document.querySelector('#camera-readout').textContent = `Camera position: ${destination.position.join(', ')} · Looking towards: ${destination.target.join(', ')}`;
  const item = document.createElement('li'); item.textContent = details[key].name;
  const history = document.querySelector('#history'); history.appendChild(item);
  while (history.children.length > 5) history.firstChild.remove();
}
document.querySelectorAll('[data-view]').forEach(button => {
  button.addEventListener('click', () => visit(button.dataset.view));
});
