import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-primary text-center mb-4">
          Ultimas publicaciones
        </h2>
        <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-14">
          Ideas practicas sobre marketing digital para despachos profesionales.
          Sin teoria vacia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-white border border-border rounded-xl overflow-hidden"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative bg-gradient-to-br from-blue-800 to-blue-600 h-48">
                  <span className="absolute top-3 left-3 bg-copper-500/90 text-white text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <p className="text-white text-sm font-medium p-4 pt-12">
                    {post.title}
                  </p>
                </div>
              </Link>
              <div className="p-6">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-semibold text-text-primary mb-2 hover:text-blue-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-text-secondary text-sm mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-medium text-sm"
                >
                  Leer articulo &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/blog" className="text-blue-600 font-semibold">
            Ver todas las publicaciones &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
