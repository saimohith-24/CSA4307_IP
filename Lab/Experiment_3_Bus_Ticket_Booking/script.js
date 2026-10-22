function showNotice(message) {
  document.getElementById('modalTitle').textContent = 'Quick Help';
  document.getElementById('modalText').textContent = message;
  document.getElementById('modalExtra').innerHTML = '';
  document.getElementById('modal').classList.add('open');
  document.getElementById('modal').setAttribute('aria-hidden', 'false');
}
function openPanel(title, message) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalText').textContent = message;
  const extra = document.getElementById('modalExtra');
  if (title === 'Login' || title === 'Register') {
    extra.innerHTML = '<form id="quickForm"><label for="quickUser">Username</label><input id="quickUser" required placeholder="Enter username"><label for="quickPass">Password</label><input id="quickPass" type="password" required placeholder="Enter password"><button class="button primary full" type="submit">Continue</button><p id="quickMessage" class="form-message"></p></form>';
    document.getElementById('quickForm').addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('quickMessage').textContent = title + ' submitted successfully (demo).';
    });
  } else {
    extra.innerHTML = '';
  }
  document.getElementById('modal').classList.add('open');
  document.getElementById('modal').setAttribute('aria-hidden', 'false');
}
function closePanel() {
  document.getElementById('modal').classList.remove('open');
  document.getElementById('modal').setAttribute('aria-hidden', 'true');
}
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target.id === 'modal') closePanel();
});
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closePanel(); });
document.getElementById('demoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('fullName').value.trim();
  const choice = document.getElementById('choice').value;
  document.getElementById('formMessage').textContent = 'Thank you, ' + name + '! Your ' + choice + ' request was submitted successfully (demo).';
  this.reset();
});
