<!--
Sync Impact Report
- Version change: 1.0.0 → 2.0.0
- Modified principles: renamed generic book principles into robotics-book principles
- Added sections: Content Architecture, Technical Accuracy and Reproducibility, Publishing Workflow
- Removed sections: generic book wording that did not reflect the physical AI / humanoid robotics scope
- Templates requiring updates: ✅ `.specify/templates/plan-template.md`, ✅ `.specify/templates/spec-template.md`, ✅ `.specify/templates/tasks-template.md`, ✅ `.codex/rules/guidelines.md`
- Deferred items: none
-->
# Physical AI & Humanoid Robotics Constitution

## Core Principles

### I. Reader Value First
Every chapter, appendix, example, and diagram MUST help the reader understand
physical AI or humanoid robotics more clearly or more safely. Content that does
not improve comprehension, application, or reference utility MUST be cut,
merged, or rewritten before publication.

### II. Spec-Gated Content Creation
No chapter, appendix, architectural change, or publishing change MAY begin
without an approved spec. Specs are the source of truth for scope, learning
goals, terminology, examples, and acceptance criteria. If the request is
ambiguous, Codex MUST ask clarifying questions before drafting content.

### III. Chapter Structure Must Stay Consistent
The book MUST preserve a stable structure across intro, parts, chapters, and
appendices. Part ordering, chapter numbering, heading hierarchy, and sidebar
labels MUST remain synchronized with `docs/`, `specs/`, `plans/`, `tasks/`, and
`sidebars.ts`. Any structural change MUST be reflected everywhere in the same
change set.

### IV. Terminology Must Be Canonical
Core terms such as Physical AI, embodied intelligence, ROS 2, VLA, simulation,
digital twin, locomotion, manipulation, and human-robot interaction MUST be used
consistently. Each term MUST have one canonical spelling and one canonical
meaning. New terminology MUST be introduced in the spec before it appears in a
chapter or appendix.

### V. Technical Accuracy and Reproducibility
Examples, commands, code, model names, APIs, hardware references, and robotics
workflows MUST be accurate, testable, and aligned with the repository state or
explicitly labeled as assumptions. A chapter MAY not publish an example unless it
has been checked for correctness and reproducibility at the intended level of
detail.

### VI. Documentation and Publishing Synchronization
`docs/`, `README.md`, `docusaurus.config.ts`, and `sidebars.ts` MUST stay in sync
with specs, plans, and tasks. Reader-facing changes MUST update the relevant
documentation and navigation in the same change set or remain blocked until the
sync is complete.

### VII. Codex Must Follow the Approved Spec
Codex MUST implement only approved work, follow the current spec and plan, and
document major decisions, tradeoffs, and updates. Codex MUST stop and ask for
clarification when requirements are incomplete, conflicting, or unsafe to infer.

## Content Architecture

The project is organized around a learning path:

- `docs/intro.md` sets the book context and reader expectations.
- `docs/part-*/chapter-*.md` carries the instructional progression.
- `docs/appendices/` provides installation and reference material.
- `specs/001-physical-ai-book/spec.md` defines the book-level learning contract.
- `plans/001-physical-ai-book/plan.md` captures architecture and sequencing.
- `tasks/001-physical-ai-book/tasks.md` decomposes delivery into testable work.

This architecture MUST be respected when adding, removing, or renaming content.
New chapters SHOULD only be introduced when they advance the book's learning
progression and do not duplicate existing material.

## Publishing and Quality Gates

All reader-facing changes MUST pass the following gates before publication:

1. The spec is approved and current.
2. Terminology is consistent across affected files.
3. Examples are correct, complete, and aligned with the chapter intent.
4. Docusaurus navigation and page organization match the content structure.
5. The result is ready for GitHub Pages without broken links or orphaned pages.

Additional quality rules:

- Chapter intros and appendix references MUST explain why the material exists.
- Safety-sensitive robotics guidance MUST include assumptions, boundaries, and
  any required disclaimers or operational constraints.
- Hardware, simulation, and ROS examples MUST be versioned or scoped tightly
  enough that readers can tell what environment they apply to.

## Governance

This constitution overrides ad hoc prompts, inconsistent naming, and any content
workflow that bypasses approved specs. All contributors, including Codex, MUST
treat it as the final authority for the project unless a newer constitution
amendment is ratified.

Amendments require:

- A written rationale tied to reader impact and maintenance impact.
- A semantic version bump:
  - MAJOR for incompatible governance or structure changes.
  - MINOR for new principles or materially expanded obligations.
  - PATCH for clarifications and wording fixes.
- Updates to every affected template, doc, or navigation file.
- A ratification date and last-amended date in ISO format.

Compliance checks MUST happen during spec review, plan review, task breakdown,
and before publishing to GitHub Pages. If a change conflicts with this
constitution, the change MUST be revised or rejected.

**Version**: 2.0.0 | **Ratified**: 2026-06-20 | **Last Amended**: 2026-06-20
