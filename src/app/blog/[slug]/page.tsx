import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPost, formatDate } from "@/lib/blog-data";
import { ArrowLeft, ArrowRight, Clock, Calendar, Linkedin } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Articulo no encontrado | Up To Marketing" };
  }

  return {
    title: `${post.title} | Up To Marketing`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <Header />
      <main>
        {/* Article header */}
        <section className="bg-gradient-to-br from-blue-800 to-blue-700 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-200 text-sm mb-8 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>

            <span className="inline-block bg-copper-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-blue-200 text-sm">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">SB</span>
                </div>
                <span className="font-medium text-white">{post.author}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} de lectura</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article body + sidebar */}
        <section className="bg-bg-primary py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-12">
              {/* Main content */}
              <article className="max-w-3xl">
                <div className="bg-white border border-border rounded-xl p-8 lg:p-12">
                  {paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-text-primary text-lg leading-relaxed mb-6 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Author bio */}
                <div className="bg-white border border-border rounded-xl p-8 mt-8">
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex-shrink-0 flex items-center justify-center">
                      <span className="text-white text-xl font-semibold">
                        SB
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-primary text-lg mb-1">
                        Santiago Brito
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-3">
                        Fundador de Up To Marketing. Especialista en estrategia
                        digital y sistemas de captacion para despachos
                        profesionales. Enfoque basado en datos, tecnologia y
                        resultados medibles.
                      </p>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors duration-200"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="bg-gradient-to-br from-blue-800 to-blue-700 rounded-xl p-8 lg:p-10 mt-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Necesitas ayuda con el marketing de tu despacho?
                  </h3>
                  <p className="text-blue-200 mb-6 max-w-lg mx-auto">
                    Solicita un diagnostico gratuito y descubre que oportunidades
                    de captacion estas dejando pasar.
                  </p>
                  <Button href="/contacto" variant="primary" size="lg">
                    Solicitar diagnostico gratuito
                  </Button>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-6">
                  {/* CTA card */}
                  <div className="bg-white border border-border rounded-xl p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-3">
                      Diagnostico gratuito
                    </p>
                    <h4 className="font-semibold text-text-primary mb-2">
                      Descubre que oportunidades tiene tu despacho
                    </h4>
                    <p className="text-text-secondary text-sm mb-4">
                      Analizamos tu presencia digital y te damos
                      recomendaciones accionables en 48 horas.
                    </p>
                    <Button
                      href="/contacto"
                      variant="primary"
                      size="sm"
                      className="w-full"
                    >
                      Solicitar diagnostico
                    </Button>
                  </div>

                  {/* Related articles */}
                  <div className="bg-white border border-border rounded-xl p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">
                      Articulos relacionados
                    </p>
                    <div className="space-y-4">
                      {relatedPosts.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/blog/${related.slug}`}
                          className="block group"
                        >
                          <span className="text-copper-500 text-xs font-medium">
                            {related.category}
                          </span>
                          <h5 className="text-sm font-medium text-text-primary leading-snug group-hover:text-blue-600 transition-colors duration-200 mt-0.5">
                            {related.title}
                          </h5>
                          <div className="flex items-center gap-1 text-blue-600 text-xs font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Leer
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
