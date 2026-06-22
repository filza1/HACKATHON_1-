# hackathon_book

Book project for _From Digital Intelligence to Embodied Intelligence_.

## What is in this repo

- `specs/001-physical-ai-book/spec.md` - approved book specification
- `specs/001-physical-ai-book/plan.md` - implementation plan and roadmap
- `specs/001-physical-ai-book/tasks.md` - delivery checklist
- `docs/` - Docusaurus book content
- `sidebars.ts` - navigation structure
- `docusaurus.config.ts` - site configuration

## Local workflow

```bash
npm install
npm run start
```

Build and preview:

```bash
npm run build
npm run serve
```

## Vercel deployment

This project is configured as a static Docusaurus site for Vercel.

- Build command: `npm run build`
- Output directory: `build`

If you import the GitHub repo into Vercel, these settings are already defined
in `vercel.json`.

## Content rules

- Follow the approved spec and constitution.
- Keep chapter names, file names, and sidebar labels synchronized.
- Scope examples to explicit environments and versions.
- Update docs and navigation together when structure changes.

## Current status

The repository now contains the Docusaurus site skeleton and chapter roadmap.
Chapter files are staged as maintainable markdown entries that can be expanded
incrementally.
