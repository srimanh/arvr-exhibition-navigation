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
  const pitch = Math.atan2(dy, Math.hypot(dx,dz));
  const yaw = Math.atan2(-dx,-dz);
  const look = camera.components['look-controls'];
  if (look) {
    look.pitchObject.rotation.x = pitch;
    look.yawObject.rotation.y = yaw;
  }
  camera.setAttribute('rotation', {x: pitch*180/Math.PI, y: yaw*180/Math.PI, z: 0});
  document.querySelector('#status').textContent = `${details[key].name} — viewpoint selected.`;
  document.querySelector('#description').textContent = details[key].description;
  document.querySelector('#camera-readout').textContent = `Camera position: ${destination.position.join(', ')} · Looking towards: ${destination.target.join(', ')}`;
  const item = document.createElement('li'); item.textContent = details[key].name;
  const history = document.querySelector('#history'); history.appendChild(item);
  while (history.children.length > 5) history.firstChild.remove();
}
const viewport = document.querySelector('#viewport');
const visitorCamera = document.querySelector('#visitor-camera');
viewport.addEventListener('pointerdown', () => viewport.focus());
viewport.addEventListener('focus', () => visitorCamera.setAttribute('wasd-controls', 'enabled', true));
viewport.addEventListener('blur', () => {
  visitorCamera.setAttribute('wasd-controls', 'enabled', false);
  const movement = visitorCamera.components['wasd-controls'];
  if (movement && movement.velocity) movement.velocity.set(0, 0, 0);
  if (movement && movement.keys) movement.keys = {};
});
let readoutFrame = 0;
function updateLiveReadout() {
  if (++readoutFrame % 10 === 0) {
    const p = visitorCamera.getAttribute('position');
    const r = visitorCamera.getAttribute('rotation');
    document.querySelector('#camera-readout').textContent = `Live camera position: ${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)} · Rotation: ${r.x.toFixed(1)}, ${r.y.toFixed(1)}, ${r.z.toFixed(1)} degrees`;
  }
  requestAnimationFrame(updateLiveReadout);
}
requestAnimationFrame(updateLiveReadout);
const movementKeys = ['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'];
viewport.addEventListener('keydown', event => {
  if (!movementKeys.includes(event.code)) return;
  event.preventDefault();
  visitorCamera.components['wasd-controls'].keys[event.code] = true;
});
viewport.addEventListener('keyup', event => {
  delete visitorCamera.components['wasd-controls'].keys[event.code];
});
document.querySelectorAll('[data-view]').forEach(button => {
  button.addEventListener('click', () => visit(button.dataset.view));
});
