# Drop your Instagram photos here

Save photos from @Vee_jeans_backuppage into this folder using these exact filenames:

```
founder.jpg       — Vivian (the founder)
face-1.jpg
face-2.jpg
face-3.jpg
face-4.jpg
face-5.jpg
face-6.jpg
face-7.jpg
```

## How to download from Instagram

1. Open the post on Instagram in a browser
2. Right-click the image → "Save image as…"
3. Rename to one of the filenames above
4. Drop into this folder

## After adding files

Open `lib/faces.ts` and replace the Unsplash placeholder URL with the local
path. For example, change:

```ts
image: 'https://images.unsplash.com/photo-...',
```

to:

```ts
image: '/instagram/founder.jpg',
```

The image bank is centralised — one edit per face updates the website.
