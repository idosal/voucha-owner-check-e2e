# VOUCHA owner-check e2e fixture

This public repository exists to verify that VOUCHA can challenge pull
requests from repository owners, not only first-time contributors.

The important policy is in `.github/voucha.yml`:

- `trust.default_author_associations: []` removes the default owner/member/
  collaborator exemption.
- `require_approval: never` lets an owner-created smoke-test PR go straight to
  the challenge.
- `min_changed_lines: 0` and `skip_paths: []` keep tiny fixture PRs eligible.
