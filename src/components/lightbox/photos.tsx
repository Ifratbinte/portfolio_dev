const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) => `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "Osq7UAVxIOI", width: 1080, height: 780 },
  { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
];

const photos = unsplashPhotos.map((photo) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;

  return {
    src: unsplashLink(photo.id, width, height),
    width,
    height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: unsplashLink(photo.id, breakpoint, height),
        width: breakpoint,
        height,
      };
    }),
  };
});

export default photos;
