const IMAGE_URL = process.env.PUBLIC_URL;
export const images = {
  bgItem: `${IMAGE_URL}/image/bg-category/bitmap.png`,
};

export type ImagesType = keyof typeof images;
