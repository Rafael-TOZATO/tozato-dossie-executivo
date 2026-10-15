'use client'

import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  CircleGauge,
  ExternalLink,
  FileCheck2,
  GitBranch,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
  X,
} from 'lucide-react'

const certifications = [
  { issuer: 'Microsoft', title: 'Foundry Agentic Engineer', category: 'IA & Agentes', short: 'Agentes autônomos e modelos de fundamentação', color: 'cyan' },
  { issuer: 'IBM / DIO', title: 'Bootcamp IBM Bob: IA de Nível Empresarial', category: 'IA Generativa & Agentes', short: 'MCP, governança e custom modes', color: 'violet' },
  { issuer: 'Confluent', title: 'Pipeline Real-Time End-to-End com Confluent Cloud', category: 'Engenharia de Dados', short: 'Streaming, Iceberg e observabilidade', color: 'amber' },
  { issuer: 'Universia', title: 'Fundamentos de IA Generativa', category: 'IA Generativa', short: 'Fundamentos e aplicações de IA', color: 'green' },
  { issuer: 'Santander / DIO', title: 'Trilha RAG com ChromaDB, LlamaIndex e Python', category: 'IA & Engenharia de Dados', short: 'RAG, vetorização e bases de conhecimento', color: 'rose' },
  { issuer: 'DIO', title: 'Lab Padrões de Projeto com Java e Spring', category: 'Engenharia de Software', short: 'GoF, SOLID e arquitetura backend', color: 'blue' },
  { issuer: 'Power BI / Microsoft', title: 'Dashboard Analítico Financeiro & Governança', category: 'Data Analytics & BI', short: 'DAX, modelagem dimensional e storytelling', color: 'teal' },
]

const categories = [
  { label: 'IA & Agentes', value: 3, color: '#22d3ee' },
  { label: 'Data & BI', value: 2, color: '#a78bfa' },
  { label: 'Eng. Software', value: 1, color: '#34d399' },
  { label: 'Eng. Dados', value: 1, color: '#fbbf24' },
]

const issuers = [
  { label: 'Microsoft', value: 2 },
  { label: 'DIO', value: 2 },
  { label: 'Confluent', value: 1 },
  { label: 'Santander', value: 1 },
  { label: 'Universia', value: 1 },
]

const links = {
  github: 'https://github.com/Rafael-TOZATO',
  app: 'https://tozato-dev-hub.vercel.app',
  linkedin: 'https://www.linkedin.com/in/rafaeltozato81',
  dio: 'https://web.dio.me/users/ornelas_tozato',
  medium: 'https://medium.com/@ornelas.tozato',
}

function KpiCard({ icon: Icon, label, value, detail, accent }: { icon: typeof Target; label: string; value: string; detail: string; accent: string }) {
  return (
    <article className="kpi-card">
      <div className={`kpi-icon ${accent}`}><Icon aria-hidden="true" /></div>
      <div className="kpi-copy"><span>{label}</span><strong>{value}</strong><small>{detail}</small></div>
      <ArrowUpRight className="kpi-arrow" aria-hidden="true" />
    </article>
  )
}

export function ExecutiveDashboard() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todas')
  const [showAll, setShowAll] = useState(false)

  const filtered = useMemo(() => certifications.filter((item) => {
    const matchesCategory = activeCategory === 'Todas' || item.category.includes(activeCategory)
    const haystack = `${item.title} ${item.issuer} ${item.category} ${item.short}`.toLowerCase()
    return matchesCategory && haystack.includes(query.toLowerCase())
  }), [activeCategory, query])

  const visible = showAll ? filtered : filtered.slice(0, 4)
  const donut = 'conic-gradient(#22d3ee 0 43%, #a78bfa 43% 72%, #34d399 72% 86%, #fbbf24 86% 100%)'

  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand-mark"><span>RT</span><div><strong>TOZATO</strong><small>EXECUTIVE HUB</small></div></div>
        <nav className="side-nav" aria-label="Navegação principal">
          <a className="active" href="#overview"><CircleGauge aria-hidden="true" /> Visão geral</a>
          <a href="#credentials"><FileCheck2 aria-hidden="true" /> Credenciais <span>07</span></a>
          <a href="#analytics"><BarChart3 aria-hidden="true" /> Analytics</a>
          <a href="#governance"><ShieldCheck aria-hidden="true" /> Governança</a>
        </nav>
        <div className="sidebar-bottom"><div className="live-status"><i /> Base auditável <strong>ONLINE</strong></div><p>Última atualização<br /><strong>15 OUT 2026</strong></p></div>
      </aside>

      <section className="main-content">
        <header className="topbar"><div className="breadcrumb">PORTFÓLIO / <strong>DOSSIÊ EXECUTIVO</strong></div><div className="top-actions"><label className="search-box"><Search aria-hidden="true" /><input aria-label="Buscar no dossiê" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar certificações..." />{query && <button onClick={() => setQuery('')} aria-label="Limpar busca"><X aria-hidden="true" /></button>}<kbd>⌘ K</kbd></label><a className="icon-link" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness aria-hidden="true" /></a><a className="icon-link" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch aria-hidden="true" /></a></div></header>

        <div className="content-wrap" id="overview">
          <div className="hero-row"><div><div className="eyebrow"><span /> PERFIL PROFISSIONAL / 2026</div><h1>Dossiê Técnico <em>Executivo</em></h1><p className="hero-subtitle">Engenharia de Software, Inteligência Artificial, Dados & BI</p></div><div className="hero-profile"><div className="avatar">RT</div><div><strong>Rafael Ornelas Tozato</strong><span>Eng. Químico · IA & Data Analytics</span></div><CheckCircle2 aria-label="Perfil verificado" className="verified" /></div></div>

          <section className="kpi-grid" aria-label="Indicadores principais">
            <KpiCard icon={FileCheck2} label="Certificações oficiais" value="07" detail="Registros verificados" accent="cyan" />
            <KpiCard icon={Sparkles} label="Emissores globais" value="05" detail="Instituições reconhecidas" accent="violet" />
            <KpiCard icon={Target} label="Áreas de domínio" value="04" detail="Competências estratégicas" accent="green" />
            <KpiCard icon={ShieldCheck} label="Auditabilidade" value="100%" detail="Documentação disponível" accent="amber" />
          </section>

          <section className="analytics-grid" id="analytics">
            <article className="panel donut-panel"><div className="panel-heading"><div><span className="section-kicker">ANÁLISE DE COMPETÊNCIAS</span><h2>Distribuição por categoria</h2></div><button className="ghost-button" aria-label="Mais opções"><ChevronDown aria-hidden="true" /></button></div><div className="donut-wrap"><div className="donut" style={{ background: donut }}><div><strong>07</strong><span>certificações</span></div></div><div className="legend">{categories.map((item) => <div className="legend-item" key={item.label}><i style={{ backgroundColor: item.color }} /><span>{item.label}</span><strong>{item.value}</strong></div>)}</div></div></article>
            <article className="panel bar-panel"><div className="panel-heading"><div><span className="section-kicker">MAPA DE EMISSORES</span><h2>Instituições por volume</h2></div><span className="chart-period">2024 — 2026</span></div><div className="bars">{issuers.map((item) => <div className="bar-row" key={item.label}><span>{item.label}</span><div className="bar-track"><div className="bar-fill" style={{ width: `${(item.value / 2) * 100}%` }}><b>{item.value}</b></div></div></div>)}</div><div className="bar-note"><TrendingIcon /> Maior concentração em <strong>Microsoft</strong> e <strong>DIO</strong></div></article>
          </section>

          <section className="credentials-section" id="credentials"><div className="section-title-row"><div><span className="section-kicker">REGISTRO DOCUMENTAL</span><h2>Matriz de credenciais</h2></div><span className="result-count">{filtered.length.toString().padStart(2, '0')} REGISTROS ENCONTRADOS</span></div><div className="filters" role="toolbar" aria-label="Filtrar credenciais">{['Todas', 'IA', 'Data', 'Software'].map((category) => <button key={category} className={activeCategory === category ? 'filter active' : 'filter'} onClick={() => { setActiveCategory(category); setShowAll(false) }}>{category}</button>)}</div><div className="credential-grid">{visible.map((item) => <article className="credential-card" key={item.title}><div className={`credential-dot ${item.color}`} /><div className="credential-main"><div className="credential-meta"><span>{item.issuer}</span><Badge status="CONCLUÍDO" /></div><h3>{item.title}</h3><p>{item.short}</p><div className="credential-footer"><span>{item.category}</span><a href={links.github} target="_blank" rel="noreferrer">Ver registro <ExternalLink aria-hidden="true" /></a></div></div></article>)}</div>{filtered.length > 4 && <button className="load-more" onClick={() => setShowAll(!showAll)}>{showAll ? 'Recolher registros' : 'Ver todas as credenciais'} <ChevronDown aria-hidden="true" className={showAll ? 'rotate' : ''} /></button>}</section>

          <section className="governance-panel" id="governance"><div className="governance-copy"><span className="section-kicker">NOTA EXECUTIVA</span><h2>Um perfil técnico orientado a impacto.</h2><p>Profissional multidisciplinar que conecta engenharia de processos, desenvolvimento de software, inteligência artificial e analytics para transformar complexidade operacional em decisões claras e soluções escaláveis.</p><div className="governance-tags"><span><CheckCircle2 /> Evidências verificadas</span><span><CheckCircle2 /> Ecossistema ativo</span><span><CheckCircle2 /> Foco em inovação</span></div></div><div className="governance-action"><div className="action-icon"><GitBranch /></div><span>ECOSSISTEMA DE CÓDIGO</span><strong>Projetos, laboratórios<br />e aplicações em produção.</strong><a href={links.github} target="_blank" rel="noreferrer" className="primary-button">Acessar repositórios <ArrowUpRight aria-hidden="true" /></a></div></section>

          <footer className="footer"><span>© 2026 RAFAEL ORNELAS TOZATO</span><span>ENGENHARIA · IA · DADOS · BI</span><div><a href={links.app} target="_blank" rel="noreferrer">PWA Hub</a><a href={links.medium} target="_blank" rel="noreferrer">Articles</a><a href={links.dio} target="_blank" rel="noreferrer">DIO</a></div></footer>
        </div>
      </section>
    </main>
  )
}

function Badge({ status }: { status: string }) { return <span className="status-badge"><i />{status}</span> }
function TrendingIcon() { return <ArrowUpRight aria-hidden="true" /> }

export { links }


