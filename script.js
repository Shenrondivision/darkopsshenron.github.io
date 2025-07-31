const viewer = document.getElementById('carViewer');
let interiorVisible = false;

function setLandscape(imageFile) {
  viewer.environmentImage = `assets/${imageFile}`;
}

function toggleInterior() {
  if (!interiorVisible) {
    viewer.src = 'assets/interior.glb';
  } else {
    viewer.src = 'assets/car.glb';
  }
  interiorVisible = !interiorVisible;
}
