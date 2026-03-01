# public/images/works/ — Your Own Photos Go Here

This folder is where you upload Napoleon's actual project photos.

## How to add photos:

1. Copy your image files into THIS folder
   - Supported formats: .jpg, .jpeg, .png, .webp
   - Recommended size: 1200px wide or wider, compressed to under 500KB each
   - Use tools like https://squoosh.app to compress images

2. Open `app/gallery/page.tsx` and add entries to the `portfolio` array:

```js
{
  type: "image",
  category: "Living Room",   // or Kitchen, Bedroom, Apartment, Commercial
  title: "Your Project Name",
  src: "/images/works/your-filename.jpg",
  alt: "Brief description of the photo",
},
```

3. For video thumbnails (the preview image before a TikTok plays), put the
   image here too and reference it as:
   thumbnail: "/images/works/your-thumbnail.jpg"

## Folder structure example:
```
public/
  images/
    works/
      living-room-project-1.jpg
      kitchen-reveal-2.jpg
      apartment-douala.jpg
      video-thumb-1.jpg
      video-thumb-2.jpg
      video-thumb-3.jpg
```

Once images are added, delete the placeholder items in gallery/page.tsx.
