import { Github, Newspaper, MessageSquare } from "lucide-react";

export default {
  "getting-started": {
    title: "Başlangıç",
    type: "page"
  },
  "sign-api": {
    title: "Sign API",
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
    title: <div className="flex items-center gap-2"><Github /> <span>Repositories</span></div>,
    type: "menu",
    items: {
      chat: {
        title: (
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <span>A.I. Chatbot</span>
          </div>
        ),
        href: "/chat/playground",
        newWindow: true,
      },
    },
  },
};

