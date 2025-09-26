# Escala Fácil

Sistema de gestão de escalas simples e eficiente, desenvolvido com Next.js, TypeScript e Ant Design.

## 🚀 Funcionalidades

- ✅ Criação e gerenciamento de escalas
- ✅ Compartilhamento por link
- ✅ Sistema de respostas online
- ✅ Escalas eliminatórias e acumulativas
- ✅ Exportação de dados (CSV)
- ✅ Design responsivo
- ✅ SEO otimizado
- ✅ Monetização com Google AdSense
- ✅ Google Analytics integrado

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Ant Design** - Componentes UI
- **Tailwind CSS** - Estilização
- **Google AdSense** - Monetização
- **Google Analytics** - Métricas

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/escala-facil.git
cd escala-facil
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp env.example .env.local
```

4. Edite o arquivo `.env.local` com suas credenciais:
```env
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-SEU_CLIENT_ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-SEU_MEASUREMENT_ID
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
NEXT_PUBLIC_GOOGLE_VERIFICATION=seu-codigo-verificacao
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente no painel do Vercel
3. Faça o deploy

### Outros provedores

```bash
npm run build
npm start
```

## 📊 Configuração do Google AdSense

1. Acesse [Google AdSense](https://www.google.com/adsense/)
2. Crie uma conta e obtenha seu Publisher ID
3. Substitua `ca-pub-XXXXXXXXXXXXXXXX` no arquivo `.env.local`
4. Configure os slots de anúncios nos componentes AdSense

## 📈 Configuração do Google Analytics

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma propriedade e obtenha o Measurement ID
3. Substitua `G-XXXXXXXXXX` no arquivo `.env.local`

## 🔍 SEO

O projeto inclui:
- Meta tags otimizadas
- Sitemap.xml automático
- Robots.txt configurado
- Structured data (JSON-LD)
- Open Graph tags
- Twitter Cards

## 📱 Responsividade

O design é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🎨 Customização

### Cores
As cores podem ser customizadas no arquivo `tailwind.config.ts`

### Componentes
Os componentes Ant Design podem ser customizados através de CSS ou styled-components

## 📄 Páginas Legais

- `/privacidade` - Política de Privacidade
- `/termos` - Termos de Uso

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte, envie um email para suporte@escalafacil.com.br ou abra uma issue no GitHub.

## 🎯 Roadmap

- [ ] Autenticação de usuários
- [ ] Notificações por email
- [ ] API REST
- [ ] App mobile
- [ ] Integração com calendários
- [ ] Relatórios avançados

---

Desenvolvido com ❤️ para facilitar a gestão de escalas