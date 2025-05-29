Project Structure for ecommerce-spa

```text
ecommerce-spa/
├── 📁 node_modules/            # npm dependencies
├── 📁 public/                  # static assets
├── 📁 src/                     # application source code
│   ├── 📁 components/          # reusable UI components
│   │    └── 📄 ProductCard.tsx # (future) product display component
│   │
│   ├── 📁 contexts/            # React contexts (auth, cart) - later steps
│   │
│   ├── 📁 models/              # TypeScript interfaces and types
│   │    ├── 📄 index.ts        # barrel file exporting models
│   │    └── 📄 product.ts      # Product interface
│   │
│   ├── 📁 pages/               # route-level components (Login, Products, Cart)
│   │    └── (to be created)    
│   │
│   ├── 📁 utils/               # utility functions/helpers
│   │
│   ├── 📄 App.tsx              # root React component + routing setup
│   ├── 📄 index.tsx            # React entry point, renders <App />
│   ├── 📄 react-app-env.d.ts   # React TypeScript declarations (auto-generated)
│   └── 📄 setupTests.ts        # test setup (optional)
│
├── 📄 package.json
├── 📄 tsconfig.json            # TypeScript configuration
└── 📄 README.md
```