const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    : "https://i.ibb.co/SxwvX8d/noimage.jpg";
};

export default getImagePath;

