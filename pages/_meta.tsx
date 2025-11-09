import { Github, Newspaper, MessageSquare, ShieldCheck, BookOpen, Server, Layout, Puzzle, FileSignature } from "lucide-react";

export default {
  "getting-started": {
    title: "Başlangıç",
    type: "page"
  },
  "sign-api": {
    title: "Sign API",
    type: "page"
  },
  "verify-api": {
    title: "Verify API",
    type: "page"
  },
  "sign-ui": {
    title: "Sign UI",
    type: "page"
  },
  "devops": {
    title: "DevOps",
    type: "page"
  },
  "examples": {
    title: "Örnekler",
    type: "page"
  },
  "security": {
    title: "Güvenlik",
    type: "page"
  },
  "blog": {
    title: (
      <div className="flex items-center gap-2">
        <Newspaper className="w-4 h-4" />
        <span>Değişiklikler</span>
      </div>
    ),
    type: "page"
  },
  playground: {
    title: <div className="flex items-center gap-2"><Github className="w-4 h-4" /> <span>Repositories</span></div>,
    type: "menu",
    items: {
      verifierApi: {
        title: (
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Doğrulama API (Java)</span>
          </div>
        ),
        href: "https://github.com/mersel-dss/mersel-dss-verifier-api-java",
        newWindow: true,
      },
      docs: {
        title: (
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Dokümantasyon</span>
          </div>
        ),
        href: "https://github.com/mersel-dss/mersel-dss-docs",
        newWindow: true,
      },
      signerApi: {
        title: (
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4" />
            <span>Sunucu İmzalama API (Java)</span>
          </div>
        ),
        href: "https://github.com/mersel-dss/mersel-dss-server-signer-java",
        newWindow: true,
      },
      ui: {
        title: (
          <div className="flex items-center gap-2">
            <Layout className="w-4 h-4" />
            <span>Kullanıcı Arayüzü (TypeScript)</span>
          </div>
        ),
        href: "https://github.com/mersel-dss/mersel-dss-ui",
        newWindow: true,
      },
      browserExtensions: {
        title: (
          <div className="flex items-center gap-2">
            <Puzzle className="w-4 h-4" />
            <span>Tarayıcı Eklentileri</span>
          </div>
        ),
        href: "https://github.com/mersel-dss/dss-mersel-dss-agent-browser-extensions",
        newWindow: true,
      },
      agentSigner: {
        title: (
          <div className="flex items-center gap-2">
            <FileSignature className="w-4 h-4" />
            <span>Agent İmzalama (Java)</span>
          </div>
        ),
        href: "https://github.com/mersel-dss/mersel-dss-agent-signer-java",
        newWindow: true,
      },
    },
  },
};

