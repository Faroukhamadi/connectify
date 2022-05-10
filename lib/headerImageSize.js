export default function headerImageSize(width) {
  switch (true) {
    case width < 768:
      return 45;
    case width >= 768 && width < 1024:
      return 85;
    case width >= 1280 && width <= 1536:
      return 100;
    default:
      return 40;
  }
}
