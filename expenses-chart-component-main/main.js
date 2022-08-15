const el = document.getElementById('container');

const hiddenDiv = document.getElementById('hidden-div');

// ✅ Show hidden DIV on hover
el.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv.style.display = 'block';

  // 👇️ if you used visibility property to hide div
  // hiddenDiv.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
el.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv.style.display = 'none';

  // 👇️ if you used visibility property to hide div
  // hiddenDiv.style.visibility = 'hidden';
});

// =========== SECOND ELEMENT =============
const el1 = document.getElementById('container1');

const hiddenDiv1 = document.getElementById('hidden-div1');

// ✅ Show hidden DIV on hover
el1.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv1.style.display = 'block';

  // 👇️ if you used visibility property to hide div
  // hiddenDiv.style.visibility = 'visible';
});

// ✅ (optionally) Hide DIV on mouse out
el1.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv1.style.display = 'none';

  // 👇️ if you used visibility property to hide div
  // hiddenDiv.style.visibility = 'hidden';
});