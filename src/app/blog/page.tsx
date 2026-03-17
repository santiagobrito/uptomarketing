import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { blogPosts, formatDate } from "@/lib/blog-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Up To Marketing",
  description:
    "Ideas practicas sobre marketing digital para despachos profesionales. Estrategia, SEO, publicidad, CRM y automatizacion.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-blue-800 to-blue-700 py-20 lg:py-28 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='white'/%3E%3C/svg%3E")`,
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Ideas practicas sobre marketing digital para despachos
              profesionales.
            </p>
          </div>
        </section>

        {/* Articles grid */}
        <section className="bg-bg-primary py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-border rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-lg"
                >
                  {/* Image placeholder */}
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative bg-gradient-to-br from-blue-800 to-blue-600 h-48">
                      <span className="absolute top-3 left-3 bg-copper-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="absolute bottom-3 right-3 bg-white/10 text-white/70 text-xs px-2 py-1 rounded">
                        {post.funnel}
                      </div>
                    </div>
                  </Link>

                  <div className="p-6">
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="font-semibold text-lg text-text-primary mb-2 leading-snug hover:text-blue-600 transition-colors duration-200">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">
                            SB
                          </span>
                        </div>
                        <div>
                          <p className="text-text-primary text-xs font-medium">
                            {post.author}
                          </p>
                          <p className="text-text-secondary text-xs">
                            {formatDate(post.date)}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors duration-200"
                      >
                        Leer articulo
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
