function toggleDetails(courseElement) {
  const details = courseElement.querySelector('.details');
  details.style.display = (details.style.display === 'block') ? 'none' : 'block';
}
