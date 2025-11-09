import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { RainbowButton } from '@/components/ui/rainbow-button'
import { ShimmerBadge } from '@/components/ui/shimmer-badge'
import { Callout } from '@/components/ui/callout'
import { Separator } from '@/components/ui/separator'
import { Sun, Moon, Search as SearchIcon, Github, ChevronRight, Sparkles, Zap, Lock, TrendingUp, Rocket, BookOpen, Box, GitBranch, Monitor, Palette, MousePointer, Globe, Shield, FileText, ClipboardList, Clock, Flag, Ticket, Wrench, Star, CheckCircle, Heart, Users, GitPullRequest, Edit } from 'lucide-react'
import { GitHub } from '@mui/icons-material'

function HomePage() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Force apply theme class to html element
    if (mounted && resolvedTheme) {
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(resolvedTheme)
    }
  }, [mounted, resolvedTheme])

  return (
    <div className="homepage-root min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent hover:from-violet-500 hover:via-purple-500 hover:to-primary transition-all duration-700 ease-in-out">
              Sign Platform
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/getting-started/quick-start" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Başlangıç
              </Link>
              <Link href="/sign-api/overview" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Sign API
              </Link>
              <Link href="/verify-api/overview" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Verify API
              </Link>
              <Link href="/sign-ui/overview" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Sign UI
              </Link>
              <Link href="/devops/docker" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                DevOps
              </Link>
              <Link href="/examples/curl" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Örnekler
              </Link>
              <Link href="/security/best-practices" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Güvenlik
              </Link>
              <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
                  setTheme(newTheme)
                  console.log('Theme changed to:', newTheme)
                  console.log('HTML class:', document.documentElement.className)
                }}
                className="relative"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/mersel-dss" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center space-y-8">
          <div className="flex flex-col items-center gap-6">
            <div className="relative group">
              {/* Outer glow - light & dark mode */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-300/40 via-violet-300/40 to-purple-300/40 dark:from-purple-600/30 dark:via-violet-600/30 dark:to-purple-600/30 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />
              
              {/* Badge */}
              <ShimmerBadge className="animate-in fade-in slide-in-from-top-3 duration-1000 relative">
                <Sparkles className="w-4 h-4" />
                <span>Production-ready Dijital İmza Platformu</span>
              </ShimmerBadge>
            </div>
            
            <div className="relative inline-block animate-in fade-in slide-in-from-top-4 duration-1000 delay-200 group cursor-default">
              {/* Light mode glow - daha hafif */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-300/30 via-violet-300/30 to-purple-300/30 rounded-2xl blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700 dark:from-purple-600/50 dark:via-violet-600/50 dark:to-purple-600/50 dark:opacity-60 dark:group-hover:opacity-90" />
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-200/25 via-violet-200/25 to-purple-200/25 rounded-xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 dark:from-purple-500/40 dark:via-violet-500/40 dark:to-purple-500/40 dark:opacity-50 dark:group-hover:opacity-80" />
              
              {/* Text - light mode için koyu, dark mode için açık */}
              <div className="relative flex items-center gap-2 text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-700 via-violet-600 to-purple-700 bg-clip-text text-transparent group-hover:from-purple-800 group-hover:via-violet-700 group-hover:to-purple-800 dark:from-purple-300 dark:via-violet-200 dark:to-purple-300 dark:group-hover:from-purple-200 dark:group-hover:via-white dark:group-hover:to-purple-200 transition-all duration-500">
                <Zap className="w-6 h-6 text-purple-600 group-hover:text-purple-700 dark:text-purple-400 dark:group-hover:text-purple-300 transition-colors" />
                Bugün Kullanmaya Başlayabilirsiniz 🚀
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
            Sign Platform
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Enterprise seviye dijital imzalama ve zaman damgası çözümleri. Modern, güvenli ve ölçeklenebilir mimari ile PDF, XML ve SOAP belgelerini dijital olarak imzalayın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 dark:from-purple-600 dark:to-violet-600 dark:hover:from-purple-500 dark:hover:to-violet-500" asChild>
              <Link href="/getting-started/quick-start">
                <Zap className="mr-2 h-5 w-5" />
                5 Dakikada Başlat
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:border-purple-400 hover:bg-purple-50 dark:border-purple-500/30 dark:text-purple-200 dark:hover:border-purple-400/50 dark:hover:bg-purple-950/30" asChild>
              <Link href="/sign-api/overview">
                <BookOpen className="mr-2 h-5 w-5" />
                API Dökümantasyonu
              </Link>
            </Button>
          </div>
        </div>

        {/* Community Contribution Callout */}
        <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Callout 
            variant="info" 
            title="Topluluk İle Büyüyen Bir Proje 💜"
            className="relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-transparent dark:from-purple-500/10 rounded-full blur-2xl" />
            <div className="relative space-y-3">
              <p className="text-purple-800/90 dark:text-purple-200/90">
                <strong>Şeffaflık ve işbirliği</strong> bizi güçlü kılar. Bu dokümantasyonun hazırlanmasında <strong>yapay zeka destekli araçlardan</strong> faydalandık. 
                Bu sebeple, bazı yerlerde hatalara veya eksik bilgilere rastlayabilirsiniz.
              </p>
              <p className="text-purple-800/90 dark:text-purple-200/90">
                Ancak güzel haber şu ki: Bu <strong>açık kaynak bir proje</strong>! 🎉 Amacımız, Türkiye'deki dijital imza ekosisteminde çalışan <strong>tüm firmalara, geliştiricilere ve meraklılara</strong> değer katmak. 
                Sizin deneyimleriniz, düzeltmeleriniz ve katkılarınız bu projeyi çok daha değerli hale getirecek.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300">
                  <Users className="w-4 h-4" />
                  <span className="font-medium">Birlikte daha iyisini yapabiliriz</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300">
                  <Edit className="w-4 h-4" />
                  <span className="font-medium">Her sayfada "Bu sayfayı düzenle" butonu var</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-700 dark:text-purple-300">
                  <GitPullRequest className="w-4 h-4" />
                  <span className="font-medium">Pull request'lerinizi bekliyoruz</span>
                </div>
              </div>
              <Separator className="my-4 bg-purple-200/50 dark:bg-purple-800/30" />
              <div className="space-y-3 bg-purple-50/50 dark:bg-purple-900/10 rounded-lg p-4 border border-purple-200/50 dark:border-purple-800/20">
                <p className="text-purple-800/90 dark:text-purple-200/90 leading-relaxed">
                  <strong>Mersel</strong> olarak, tüm sektör paydaşlarının yanında olmaya ve <strong>e-Dönüşüm ekosistemine</strong> katkı sunmaya devam edeceğiz. 
                  Her katkınız, hem sizin hem de tüm topluluğun gelişimine hizmet edecek. 
                </p>
                <p className="text-purple-700 dark:text-purple-300 italic leading-relaxed">
                  Tüm katkı verenler, proje içinde ve farklı platformlarda özenle duyurulacak, emeği geçenlerin isimleri daima ön planda olacak.
                </p>
              </div>
              <p className="text-purple-800 dark:text-purple-200 font-semibold pt-3 flex items-center gap-2 justify-center text-base">
                <Heart className="w-5 h-5 fill-purple-600 dark:fill-purple-400 text-purple-600 dark:text-purple-400" />
                Katkılarınız için şimdiden teşekkürler!
                <Heart className="w-5 h-5 fill-purple-600 dark:fill-purple-400 text-purple-600 dark:text-purple-400" />
              </p>
            </div>
          </Callout>
        </div>

        {/* Platform Components */}
        <Section title="Platform Repositories" icon={<GitHub fontSize={'large'} />} className="mt-24">
          <div className="grid gap-6">
            <ComponentCard
              icon={<Monitor className="w-10 h-10" />}
              title="Server Signer API - Sunucu Tabanlı İmzalama"
              description="Production-ready REST API servisi. RFC 3161 uyumlu zaman damgası, PAdES/XAdES/WS-Security imzalama ve TÜBİTAK ESYA entegrasyonu."
              features={[
                'Multi-certificate keystore yönetimi',
                'RFC 3161 zaman damgası servisi',
                'Production-ready Prometheus metrikleri',
                'Docker & Kubernetes desteği'
              ]}
              links={[
                { text: 'API Dökümanları', href: '/sign-api/overview' },
                { text: 'Scalar API Explorer', href: '/sign-api/scalar-api-docs' },
                { text: 'GitHub Repo', href: 'https://github.com/mersel-dss/mersel-dss-server-signer-java' }
              ]}
            />
            <ComponentCard
              icon={<Palette className="w-10 h-10" />}
              title="Sign UI - Web Arayüzü"
              description="Server API için modern React arayüzü. API ile yapılabilen tüm imzalama işlemlerinin kullanıcı dostu arayüzden gerçekleştirilmesini sağlar."
              features={[
                'Modern topbar layout & responsive design',
                'TanStack Query ile optimistic updates',
                'Otomatik generate edilen TypeScript client',
                'Tailwind CSS & shadcn/ui components'
              ]}
              links={[
                { text: 'UI Dökümanları', href: '/sign-ui/overview' },
                { text: 'Component Kılavuzu', href: '/sign-ui/components' },
                { text: 'GitHub Repo', href: 'https://github.com/mersel-dss/mersel-dss-ui' }
              ]}
            />
            <ComponentCard
              icon={<MousePointer className="w-10 h-10" />}
              title="Agent Signer - Masaüstü İmzalama Aracı"
              badge="1-2 hafta içinde"
              description="Kullanıcı bilgisayarındaki mali mühür veya e-imza kartlarına erişen, tıkla-çalıştır JAR uygulaması."
              features={[
                'Platform bağımsız JAR executable',
                'USB Token ve akıllı kart desteği',
                'Lokal güvenli imzalama',
                'Sunucu donanım bağımlılığından bağımsız'
              ]}
            />
            <ComponentCard
              icon={<Globe className="w-10 h-10" />}
              title="Browser Extensions - Tarayıcı Eklentileri"
              badge="Yakında"
              description="Web uygulamalarından direkt lokal imzalama desteği sağlayan browser agent."
              features={[
                'Chrome, Firefox, Edge desteği',
                'Native messaging ile güvenli cihaz erişimi',
                'Web uygulamalarından direkt imzalama',
                'Kolay entegrasyon'
              ]}
            />
            <ComponentCard
              icon={<Shield className="w-10 h-10" />}
              title="Verify API - İmza Doğrulama Servisi"
              description="Bağımsız, yüksek performanslı imza doğrulama servisi. Herhangi bir donanım bağımlılığı olmadan çalışır."
              features={[
                'Donanım bağımlılığı yok',
                'Horizontal scaling desteği',
                'Yüksek performanslı doğrulama',
                'PAdES, XAdES desteği',
                'Güvenilir kök sertifika resolver sistemi',
                'DSS SimpleReport ve DetailedReport desteği'
              ]}
              links={[
                { text: 'API Dökümanları', href: '/verify-api/overview' },
                { text: 'Scalar API Explorer', href: '/verify-api/scalar-api-docs' },
                { text: 'GitHub Repo', href: 'https://github.com/mersel-dss/mersel-dss-verifier-api-java' }
              ]}
            />
          </div>
        </Section>

        {/* Core Features */}
        <Section title="Temel Özellikler" icon={<Sparkles className="w-8 h-8" />} className="mt-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<FileText className="w-8 h-8" />}
              title="PAdES İmzalama"
              description="PDF belgelerine ETSI ve Tübitak standartlarına uygun dijital imza. Long-term validation (LTV) desteği."
              href="/sign-api/overview"
            />
            <FeatureCard
              icon={<ClipboardList className="w-8 h-8" />}
              title="XAdES İmzalama"
              description="XML belgelerini ETSI ve Tübitak standardında imzalayın. e-Fatura, e-Arşiv ve GIB entegrasyonları."
              href="/sign-api/overview"
            />
            <FeatureCard
              icon={<Lock className="w-8 h-8" />}
              title="WS-Security İmzalama"
              description="SOAP mesajlarını OASIS WS-Security standardı ile güvenli hale getirin."
              href="/sign-api/overview"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="RFC 3161 Zaman Damgası"
              description="Qualified timestamp servisi ile belgelere yasal geçerlilik kazandırın."
              href="/sign-api/timestamp"
            />
            <FeatureCard
              icon={<Flag className="w-8 h-8" />}
              title="TÜBİTAK Entegrasyonu"
              description="Ulusal zaman damgası otoritesi (ESYA) ile native entegrasyon."
              href="/sign-api/tubitak-integration"
            />
            <FeatureCard
              icon={<Ticket className="w-8 h-8" />}
              title="Esnek Sertifika Yönetimi"
              description="Dosya tabanlı (P12/PFX), akıllı kart ve HSM desteği. Multi-certificate keystore yönetimi."
              href="/sign-api/certificate-selection"
            />
          </div>
        </Section>

        {/* Technology Stack */}
        <Section title="Teknoloji Stack" icon={<Wrench className="w-8 h-8" />} className="mt-24">
          <div className="grid gap-6 md:grid-cols-3">
            <TechStack
              title="Backend"
              items={[
                'Java 8+ - Platform bağımsız, stabil runtime',
                'Spring Boot 2.7 - Production-ready framework',
                'DSS 6.3 - European Commission Digital Signature Services',
                'BouncyCastle - Kriptografik işlemler'
              ]}
            />
            <TechStack
              title="Frontend"
              items={[
                'React 18 - Modern UI library',
                'TypeScript - Type-safe development',
                'Vite - Lightning fast build tool',
                'TanStack Query - Async state management',
                'Tailwind CSS - Utility-first styling'
              ]}
            />
            <TechStack
              title="Infrastructure & Monitoring"
              items={[
                'Docker & Docker Compose - Containerization',
                'Kubernetes - Container orchestration',
                'Prometheus - Metrics collection',
                'Grafana - Visualization dashboards',
                'AlertManager - Alert routing'
              ]}
            />
          </div>
        </Section>

        {/* Why Sign Platform */}
        <Section title="Neden Sign Platform?" icon={<Star className="w-8 h-8" />} className="mt-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <WhyCard
              icon={<Zap className="h-10 w-10 text-purple-600 dark:text-purple-400" />}
              title="Production-Ready"
              description="Prometheus metrikleri, health check'ler, structured logging ve error handling ile production ortamı için hazır."
            />
            <WhyCard
              icon={<Lock className="h-10 w-10 text-purple-600 dark:text-purple-400" />}
              title="Güvenli"
              description="ETSI standartları, long-term validation, secure key management ve audit logging ile güvenli altyapı."
            />
            <WhyCard
              icon={<TrendingUp className="h-10 w-10 text-purple-600 dark:text-purple-400" />}
              title="Ölçeklenebilir"
              description="Stateless mimari, horizontal scaling, load balancing ve distributed deployment desteği."
            />
            <WhyCard
              icon={<Rocket className="h-10 w-10 text-purple-600 dark:text-purple-400" />}
              title="Kolay Entegrasyon"
              description="RESTful API, OpenAPI/Swagger dökümantasyonu, ready-to-use client'lar ve comprehensive examples."
            />
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm mt-24">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Sign Platform
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Enterprise seviye dijital imza ve zaman damgası çözümleri.
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/mersel-dss" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-purple-700 dark:text-purple-400">Hızlı Erişim</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/getting-started/quick-start" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Hızlı Başlangıç
                  </Link>
                </li>
                <li>
                  <Link href="/sign-api/overview" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Sign API Dökümanları
                  </Link>
                </li>
                <li>
                  <Link href="/verify-api/overview" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Verify API Dökümanları
                  </Link>
                </li>
                <li>
                  <Link href="/sign-ui/overview" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    UI Dökümanları
                  </Link>
                </li>
                <li>
                  <Link href="/examples/curl" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Kod Örnekleri
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-purple-700 dark:text-purple-400">Kaynaklar</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/devops/docker" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    DevOps Kılavuzu
                  </Link>
                </li>
                <li>
                  <Link href="/security/best-practices" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Güvenlik
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Değişiklikler
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-purple-700 dark:text-purple-400">Topluluk</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Heart className="w-4 h-4 fill-purple-600 dark:fill-purple-400 text-purple-600 dark:text-purple-400" />
                  <span>Açık Kaynak</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Topluluk Destekli</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <GitPullRequest className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Katkıya Açık</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-border/50" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <span>© {new Date().getFullYear()}</span>
              <a href="https://mersel.io" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">MERSEL YAZILIM A.S.</a>
              <span>- Tüm hakları saklıdır.</span>
            </p>
            <p className="flex items-center gap-2 italic">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>e-Dönüşüm ekosisteminde birlikte büyüyoruz</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Components
function Section({ title, icon, children, className = '' }: { title: string; icon?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <section className={className}>
      <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-3">
        {icon && <span className="text-primary">{icon}</span>}
        <span className="bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">{title}</span>
      </h2>
      {children}
    </section>
  )
}

function ComponentCard({ icon, title, description, features, links, badge }: {
  icon: React.ReactNode
  title: string
  description: string
  features?: string[]
  links?: { text: string; href: string }[]
  badge?: string
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <Card 
      className={`transition-all duration-300 border-border relative overflow-hidden ${isHovered ? 'shadow-lg shadow-purple-200/30 dark:shadow-purple-900/30' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-purple-50 via-violet-50/50 to-purple-50 dark:from-purple-900/10 dark:via-purple-800/5 dark:to-purple-900/10 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />
      <CardHeader 
        className="cursor-pointer transition-colors hover:bg-transparent relative"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4 flex-1">
            <div className={`text-primary transition-transform duration-300 ${isExpanded ? 'scale-110' : ''}`}>
              {icon}
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg mb-2 flex items-center gap-2">
                {title}
                {badge && <Badge variant="secondary" className="text-xs">{badge}</Badge>}
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
          <ChevronRight 
            className={`h-5 w-5 transition-all duration-300 ${
              isExpanded ? 'rotate-90 text-primary' : 'text-muted-foreground'
            }`} 
          />
        </div>
      </CardHeader>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <CardContent className="pt-0 relative">
          <Separator className="mb-4" />
          {features && (
            <ul className="space-y-2 mb-4">
              {features.map((feature, i) => (
                <li 
                  key={i} 
                  className="flex items-center gap-2 text-sm text-muted-foreground animate-in fade-in slide-in-from-left-2"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          )}
          {links && (
            <div className="flex flex-wrap gap-2">
              {links.map((link, i) => {
                const getLinkIcon = (text: string) => {
                  if (text.includes('API Döküman') || text.includes('Döküman')) return <BookOpen className="mr-1.5 h-3.5 w-3.5" />
                  if (text.includes('Scalar') || text.includes('Explorer')) return <Box className="mr-1.5 h-3.5 w-3.5" />
                  if (text.includes('GitHub') || text.includes('Repo')) return <GitBranch className="mr-1.5 h-3.5 w-3.5" />
                  if (text.includes('Component') || text.includes('Kılavuz')) return <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                  return null
                }
                
                return (
                  <Button 
                    key={i} 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="animate-in fade-in slide-in-from-bottom-2"
                    style={{ animationDelay: `${(features?.length || 0) * 50 + i * 50}ms` }}
                  >
                    <Link href={link.href}>
                      {getLinkIcon(link.text)}
                      {link.text}
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                )
              })}
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  )
}

function FeatureCard({ icon, title, description, href }: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}) {
  return (
    <Link href={href} className="group block">
      <Card className="h-full transition-all border-border/50 relative overflow-hidden group-hover:shadow-lg group-hover:shadow-purple-200/40 dark:group-hover:shadow-purple-900/20 group-hover:border-purple-200 dark:group-hover:border-purple-800/30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-violet-50/30 to-purple-50/50 dark:from-purple-900/5 dark:via-transparent dark:to-purple-900/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <CardHeader className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 group-hover:scale-105 transition-all duration-300 shrink-0">{icon}</div>
            <CardTitle className="text-xl text-foreground/90 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">{title}</CardTitle>
          </div>
          <CardDescription className="text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

function TechStack({ title, items }: {
  title: string
  items: string[]
}) {
  return (
    <Card className="border-border transition-all group relative overflow-hidden hover:shadow-lg hover:shadow-purple-200/40 dark:hover:shadow-purple-900/20 hover:border-purple-200 dark:hover:border-purple-800/30">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-violet-50/50 to-transparent dark:from-purple-900/10 dark:via-purple-800/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardHeader className="relative">
        <CardTitle className="text-purple-700 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm group/item">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 ring-4 ring-purple-200/50 dark:ring-purple-500/20 group-hover/item:ring-purple-300 dark:group-hover/item:ring-purple-400/40 group-hover/item:scale-110 transition-all" />
              <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function WhyCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="border-border transition-all group relative overflow-hidden hover:shadow-lg hover:shadow-purple-200/40 dark:hover:shadow-purple-900/20 hover:border-purple-200 dark:hover:border-purple-800/30">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 via-violet-50/10 to-transparent dark:from-purple-900/10 dark:via-purple-800/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardHeader className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="shrink-0 group-hover:scale-105 transition-transform duration-300">{icon}</div>
          <CardTitle className="text-xl group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">{title}</CardTitle>
        </div>
        <CardDescription className="group-hover:text-foreground/80 transition-colors">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default HomePage