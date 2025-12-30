<script>
const video = document.querySelector('.hover-video');

video.addEventListener('mouseover', () => {
    video.play();
});

video.addEventListener('mouseout', () => {
    video.pause();
});
</script>
<script>
  function goToPage(page) {
    window.location.href = page;
  }
</script>
