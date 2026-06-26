export interface Subtopic {
  label: string;
  done: boolean;
}

export interface Topic {
  id: string;
  label: string;
  state: 'completed' | 'active' | 'planned';
  description: string;
  subtopics: Subtopic[];
  dependsOn: string[];
}

export interface RoadmapTab {
  id: string;
  label: string;
  topics: Topic[];
}

export const tabs: RoadmapTab[] = [
  {
    id: 'internet',
    label: 'Internet',
    topics: [
      {
        id: 'internet',
        label: 'Internet',
        state: 'planned',
        description: 'How data travels across networks — packets, IP addressing, and routing fundamentals.',
        subtopics: [
          { label: 'How the Internet works (packets, IP, routing)', done: false },
          { label: 'IP addressing (IPv4, IPv6, subnet masks)', done: false },
          { label: 'TCP vs UDP', done: false },
          { label: 'NAT & private IP ranges', done: false },
        ],
        dependsOn: [],
      },
      {
        id: 'http',
        label: 'HTTP',
        state: 'planned',
        description: 'The protocol that powers the web — request/response cycle, methods, and status codes.',
        subtopics: [
          { label: 'Request methods (GET, POST, PUT, PATCH, DELETE)', done: false },
          { label: 'Status codes (1xx–5xx)', done: false },
          { label: 'Headers (caching, CORS, auth, content-type)', done: false },
          { label: 'HTTP/1.1 vs HTTP/2 vs HTTP/3', done: false },
          { label: 'HTTPS / TLS handshake', done: false },
        ],
        dependsOn: ['internet'],
      },
      {
        id: 'dns',
        label: 'DNS',
        state: 'planned',
        description: 'How domain names resolve to IP addresses — record types, resolution chain, and caching.',
        subtopics: [
          { label: 'DNS record types (A, AAAA, CNAME, MX, TXT, NS)', done: false },
          { label: 'Resolution chain (recursive → authoritative)', done: false },
          { label: 'DNS caching (TTL, browser cache, ISP cache)', done: false },
          { label: 'DNSSEC fundamentals', done: false },
        ],
        dependsOn: ['internet'],
      },
      {
        id: 'browsers',
        label: 'Browsers',
        state: 'planned',
        description: 'How browsers parse, render, and display web pages — the critical rendering path.',
        subtopics: [
          { label: 'Navigation & resource loading', done: false },
          { label: 'DOM & CSSOM construction', done: false },
          { label: 'Render tree, layout, paint, compositing', done: false },
          { label: 'Developer tools (network, performance, elements)', done: false },
        ],
        dependsOn: ['http'],
      },
      {
        id: 'hosting',
        label: 'Hosting',
        state: 'planned',
        description: 'Where web applications live — from shared hosting to cloud platforms.',
        subtopics: [
          { label: 'Shared vs VPS vs cloud hosting', done: false },
          { label: 'Static site hosting (Vercel, Netlify, Pages)', done: false },
          { label: 'Domain registration & nameservers', done: false },
          { label: 'SSH & SFTP basics', done: false },
        ],
        dependsOn: ['dns'],
      },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    topics: [
      {
        id: 'javascript',
        label: 'JavaScript',
        state: 'planned',
        description: 'The language of the web — modern ES6+ syntax, DOM APIs, and Node.js fundamentals.',
        subtopics: [
          { label: 'Syntax, data types, and operators', done: false },
          { label: 'DOM manipulation & event handling', done: false },
          { label: 'Fetch API & AJAX', done: false },
          { label: 'ES6+ features (modules, arrow, async/await, destructuring)', done: false },
          { label: 'Node.js fundamentals (module system, npm, fs, http)', done: false },
        ],
        dependsOn: [],
      },
      {
        id: 'typescript',
        label: 'TypeScript',
        state: 'planned',
        description: 'Typed superset of JavaScript — static checking, interfaces, and generics.',
        subtopics: [
          { label: 'Type system & type inference', done: false },
          { label: 'Interfaces, types, and unions', done: false },
          { label: 'Generics & utility types', done: false },
          { label: 'Enums, tuples, and type guards', done: false },
        ],
        dependsOn: ['javascript'],
      },
      {
        id: 'python',
        label: 'Python',
        state: 'planned',
        description: 'General-purpose language for backends, scripting, and data work.',
        subtopics: [
          { label: 'Core syntax & data structures', done: false },
          { label: 'Standard library (os, pathlib, json, re, datetime)', done: false },
          { label: 'Virtual environments & pip', done: false },
          { label: 'Type hints & dataclasses', done: false },
        ],
        dependsOn: [],
      },
      {
        id: 'php',
        label: 'PHP',
        state: 'planned',
        description: 'Server-side language powering Laravel — OOP, namespaces, and Composer.',
        subtopics: [
          { label: 'Syntax, OOP, and namespaces', done: false },
          { label: 'Composer & autoloading (PSR-4)', done: false },
          { label: 'PDO & database interaction', done: false },
          { label: 'PHP 8+ features (attributes, enums, match)', done: false },
        ],
        dependsOn: [],
      },
      {
        id: 'dart',
        label: 'Dart',
        state: 'planned',
        description: 'Client-optimized language for Flutter — async patterns and sound null safety.',
        subtopics: [
          { label: 'Syntax & sound null safety', done: false },
          { label: 'Async programming (Future, Stream, async/await)', done: false },
          { label: 'Packages & pub.dev', done: false },
          { label: 'Dart for Flutter (widgets, state, rendering)', done: false },
        ],
        dependsOn: ['javascript'],
      },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    topics: [
      {
        id: 'html',
        label: 'HTML',
        state: 'planned',
        description: 'The markup foundation — semantic structure, forms, accessibility, and SEO.',
        subtopics: [
          { label: 'Semantic HTML elements', done: false },
          { label: 'Forms & validation (HTML5 constraint API)', done: false },
          { label: 'SEO meta tags & structured data', done: false },
          { label: 'Accessibility (ARIA, roles, keyboard nav)', done: false },
        ],
        dependsOn: [],
      },
      {
        id: 'css',
        label: 'CSS',
        state: 'planned',
        description: 'Visual styling — layouts, responsive design, custom properties, and utility frameworks.',
        subtopics: [
          { label: 'Flexbox & Grid layout', done: false },
          { label: 'Responsive design (media queries, container queries)', done: false },
          { label: 'Custom properties & calc()', done: false },
          { label: 'Tailwind CSS (utility-first workflow)', done: false },
        ],
        dependsOn: ['html'],
      },
      {
        id: 'react',
        label: 'React',
        state: 'planned',
        description: 'UI component library — declarative rendering, state management, and routing.',
        subtopics: [
          { label: 'Components & props', done: false },
          { label: 'State & effects (useState, useEffect)', done: false },
          { label: 'Context & hooks (useReducer, useRef, custom hooks)', done: false },
          { label: 'React Router (routes, params, navigation)', done: false },
        ],
        dependsOn: ['css', 'javascript'],
      },
      {
        id: 'framer',
        label: 'Framer Motion',
        state: 'planned',
        description: 'Declarative animation library for React — gestures, layout animations, and variants.',
        subtopics: [
          { label: 'Basic animations (motion.div, animate, initial)', done: false },
          { label: 'Gestures (drag, hover, tap, whileInView)', done: false },
          { label: 'Layout animations (layoutId, AnimatePresence)', done: false },
          { label: 'Variants & staggered children', done: false },
        ],
        dependsOn: ['react'],
      },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    topics: [
      {
        id: 'rest',
        label: 'REST APIs',
        state: 'planned',
        description: 'API design principles — resource modeling, HTTP semantics, and best practices.',
        subtopics: [
          { label: 'Resource naming & endpoint design', done: false },
          { label: 'HTTP verbs & idempotency', done: false },
          { label: 'Status codes & error responses', done: false },
          { label: 'Pagination, filtering, and sorting', done: false },
        ],
        dependsOn: [],
      },
      {
        id: 'auth',
        label: 'Authentication',
        state: 'planned',
        description: 'Identity and access control — tokens, sessions, and OAuth flows.',
        subtopics: [
          { label: 'JWT (access + refresh tokens, claims, verification)', done: false },
          { label: 'OAuth 2.0 / Social login', done: false },
          { label: 'Session-based auth (cookies, store, expiry)', done: false },
          { label: 'Password hashing & salting (bcrypt, argon2)', done: false },
        ],
        dependsOn: ['rest'],
      },
      {
        id: 'laravel',
        label: 'Laravel',
        state: 'planned',
        description: 'PHP full-stack framework — elegant syntax, Eloquent ORM, and Filament admin.',
        subtopics: [
          { label: 'Routing, controllers, and middleware', done: false },
          { label: 'Eloquent ORM (relationships, scopes, mutators)', done: false },
          { label: 'Blade templating & components', done: false },
          { label: 'Filament admin (resources, forms, tables, widgets)', done: false },
        ],
        dependsOn: ['auth'],
      },
      {
        id: 'django',
        label: 'Django',
        state: 'planned',
        description: 'Python batteries-included framework — ORM, admin, REST framework.',
        subtopics: [
          { label: 'Models, migrations, and the ORM', done: false },
          { label: 'Views (FBV, CBV) & templates', done: false },
          { label: 'Django REST Framework (serializers, viewsets)', done: false },
          { label: 'Admin customization & signals', done: false },
        ],
        dependsOn: ['auth'],
      },
      {
        id: 'express',
        label: 'Node / Express',
        state: 'planned',
        description: 'JavaScript runtime and minimal web framework — routing, middleware, error handling.',
        subtopics: [
          { label: 'Routes & middleware chain', done: false },
          { label: 'Error handling & validation', done: false },
          { label: 'Environment variables & config', done: false },
          { label: 'Express with TypeScript', done: false },
        ],
        dependsOn: ['auth', 'javascript'],
      },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    topics: [
      {
        id: 'sql',
        label: 'SQL',
        state: 'planned',
        description: 'Relational database language — querying, joining, indexing, and normalization.',
        subtopics: [
          { label: 'SELECT, WHERE, JOIN types', done: false },
          { label: 'Aggregation (GROUP BY, HAVING, window functions)', done: false },
          { label: 'Indexing & query performance', done: false },
          { label: 'Normalization & schema design', done: false },
        ],
        dependsOn: [],
      },
      {
        id: 'postgresql',
        label: 'PostgreSQL',
        state: 'planned',
        description: 'Advanced open-source RDBMS — data types, constraints, and JSON support.',
        subtopics: [
          { label: 'Data types & constraints', done: false },
          { label: 'CTEs & recursive queries', done: false },
          { label: 'JSON/JSONB & full-text search', done: false },
          { label: 'Role management & permissions', done: false },
        ],
        dependsOn: ['sql'],
      },
      {
        id: 'sqlite',
        label: 'SQLite',
        state: 'planned',
        description: 'Embedded database engine — zero-config, ideal for prototyping and mobile.',
        subtopics: [
          { label: 'Embedded database use cases', done: false },
          { label: 'PRAGMAs & configuration', done: false },
          { label: 'When to use vs PostgreSQL', done: false },
        ],
        dependsOn: ['sql'],
      },
      {
        id: 'orms',
        label: 'ORMs',
        state: 'planned',
        description: 'Object-relational mapping — bridging code and database schemas.',
        subtopics: [
          { label: 'Eloquent ORM (relationships, eager loading, accessors)', done: false },
          { label: 'SQLAlchemy (declarative models, sessions, queries)', done: false },
          { label: 'Prisma (schema, migrations, relations)', done: false },
        ],
        dependsOn: ['postgresql', 'sqlite'],
      },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps',
    topics: [
      {
        id: 'git',
        label: 'Git',
        state: 'planned',
        description: 'Version control — branching strategies, collaboration workflows, and history rewriting.',
        subtopics: [
          { label: 'Branch, merge, and rebase', done: false },
          { label: 'Interactive rebase & reset (soft, mixed, hard)', done: false },
          { label: 'GitHub Flow & GitFlow', done: false },
          { label: 'Hooks & GitHub Actions integration', done: false },
        ],
        dependsOn: [],
      },
      {
        id: 'docker',
        label: 'Docker',
        state: 'planned',
        description: 'Containerization — reproducible environments, multi-service orchestration.',
        subtopics: [
          { label: 'Containers vs images (Dockerfile, build, run)', done: false },
          { label: 'Docker Compose (services, volumes, networks)', done: false },
          { label: 'Multi-stage builds & layer optimization', done: false },
          { label: 'Docker registry & tags', done: false },
        ],
        dependsOn: ['git'],
      },
      {
        id: 'cicd',
        label: 'CI / CD',
        state: 'planned',
        description: 'Automated pipelines — testing, building, and deploying on every push.',
        subtopics: [
          { label: 'GitHub Actions (workflows, jobs, steps, matrix)', done: false },
          { label: 'Automated testing in CI', done: false },
          { label: 'Deployment strategies (blue/green, rolling)', done: false },
          { label: 'Environment secrets & variables', done: false },
        ],
        dependsOn: ['docker'],
      },
      {
        id: 'cloudflare',
        label: 'Cloudflare',
        state: 'planned',
        description: 'CDN, DNS, and security — proxying, SSL, WAF, and DDoS protection.',
        subtopics: [
          { label: 'DNS management & proxied records', done: false },
          { label: 'SSL/TLS modes (flexible, full, strict)', done: false },
          { label: 'WAF rules & rate limiting', done: false },
          { label: 'DDoS protection & caching', done: false },
        ],
        dependsOn: ['dns'],
      },
      {
        id: 'linux',
        label: 'Linux',
        state: 'planned',
        description: 'The server operating system — CLI, permissions, processes, and systemd.',
        subtopics: [
          { label: 'CLI commands (ls, grep, sed, awk, find)', done: false },
          { label: 'File permissions & user management', done: false },
          { label: 'Process management (ps, top, kill, systemd)', done: false },
          { label: 'Package managers (apt, yum, brew)', done: false },
        ],
        dependsOn: [],
      },
    ],
  },
  {
    id: 'security',
    label: 'Security',
    topics: [
      {
        id: 'https',
        label: 'HTTPS / TLS',
        state: 'planned',
        description: 'Encryption in transit — certificate management, TLS handshake, and cipher suites.',
        subtopics: [
          { label: 'TLS handshake (client hello, server hello, cert, key exchange)', done: false },
          { label: 'Certificate management (Let\'s Encrypt, certbot, renewal)', done: false },
          { label: 'Cipher suites & TLS versions (1.2 vs 1.3)', done: false },
          { label: 'mTLS for service-to-service auth', done: false },
        ],
        dependsOn: [],
      },
      {
        id: 'owasp',
        label: 'OWASP Top 10',
        state: 'planned',
        description: 'The most critical web application security risks and how to mitigate them.',
        subtopics: [
          { label: 'SQL Injection (parameterized queries, ORM safety)', done: false },
          { label: 'Cross-Site Scripting (XSS — stored, reflected, DOM)', done: false },
          { label: 'Cross-Site Request Forgery (CSRF tokens, SameSite)', done: false },
          { label: 'Broken authentication & session management', done: false },
        ],
        dependsOn: ['https'],
      },
      {
        id: 'auth-bp',
        label: 'Auth Best Practices',
        state: 'planned',
        description: 'Secure authentication patterns — hashing, rate limiting, and MFA.',
        subtopics: [
          { label: 'Password hashing (bcrypt, argon2, PBKDF2)', done: false },
          { label: 'Rate limiting & brute-force protection', done: false },
          { label: 'Session management (rotation, expiry, invalidation)', done: false },
          { label: 'Multi-factor authentication (TOTP, SMS, recovery codes)', done: false },
        ],
        dependsOn: ['https'],
      },
      {
        id: 'cors',
        label: 'CORS',
        state: 'planned',
        description: 'Cross-Origin Resource Sharing — how browsers enforce origin policy.',
        subtopics: [
          { label: 'Same-origin policy', done: false },
          { label: 'CORS headers (Access-Control-Allow-Origin, etc.)', done: false },
          { label: 'Preflight requests & OPTIONS method', done: false },
          { label: 'Credentials & wildcard origins', done: false },
        ],
        dependsOn: ['https'],
      },
    ],
  },
];
