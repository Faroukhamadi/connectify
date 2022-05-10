export default function downloadBtnText(width) {
  switch (true) {
    case width < 768:
      return 'Download from App Store';
    case width >= 768 && width < 1024:
      return 'Download from App Store';
    case width >= 1280 && width <= 1536:
      return 'Download on your Laptop';
    default:
      return 'Download on your Desktop';
  }
}
