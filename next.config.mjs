/** @type {import('next').NextConfig} */
const nextConfig = {
  // This enables the static HTML export
  output: 'export',
  
  // This is needed for static exports on GitHub Pages
  // if you use the <Image> component
  images: {
    unoptimized: true,
  },
}

export default nextConfig