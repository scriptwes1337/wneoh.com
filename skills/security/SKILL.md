# Security Skill

This skill governs security practices and the pre-push security gate.

## Two Levels of Security

### Level 1: Baseline Security (Always Active)

During normal implementation:

- Never commit secrets
- Never expose credentials
- Validate untrusted input
- Enforce authorization
- Use parameterized database access
- Prevent injection vulnerabilities
- Prevent XSS
- Protect sensitive data
- Validate redirects and external URLs
- Secure file uploads
- Use safe cookie/session practices
- Handle authentication correctly
- Follow least privilege
- Avoid logging secrets
- Avoid exposing stack traces in user-facing responses
- Audit new dependencies

### Level 2: Full Pre-Push Security Audit

Before every push, perform comprehensive security review.

## Pre-Push Security Gate

### Step 1: Inspect Pending Changes

```bash
git diff           # Review unstaged changes
git diff --staged  # Review staged changes
```

### Step 2: Security Review Checklist

- [ ] Trust boundaries identified
- [ ] Authentication implications reviewed
- [ ] Authorization implications reviewed
- [ ] User input boundaries inspected
- [ ] Data access patterns reviewed
- [ ] API endpoints reviewed
- [ ] Server actions reviewed
- [ ] Secrets handling reviewed
- [ ] External URLs validated
- [ ] File uploads reviewed (if applicable)
- [ ] Common web vulnerabilities checked

### Step 3: Run Security Tools

```bash
npm audit              # Check for vulnerable dependencies
npm run lint           # Lint can catch some issues
npm run typecheck      # Type safety catches some issues
```

### Step 4: External Security Review

If `security-review` external skill is available, invoke it for comprehensive analysis.

### Step 5: Classify Findings

**Critical:** Immediate exploitation possible, severe impact
**High:** Significant vulnerability, should fix before push
**Medium:** Potential issue, evaluate context
**Low:** Minor concern or theoretical issue

### Step 6: Fix Blocking Findings

Fix all Critical and High severity findings.
Address Medium severity findings that are material to the change.

### Step 7: Re-validate

```bash
npm run test           # Tests pass
npm run build          # Build succeeds
```

### Step 8: Document

Update `docs/SECURITY.md` for architecture changes.
Create security report in `security-reports/` for significant findings.

## Common Vulnerability Checks

### Injection

- Use parameterized queries
- Never concatenate user input into queries
- Sanitize output appropriately
- Use ORM/query builders correctly

### XSS (Cross-Site Scripting)

- React handles most XSS automatically
- Be careful with `dangerouslySetInnerHTML`
- Sanitize user-generated content
- Use appropriate Content Security Policy

### Authentication

- Never store passwords in plain text
- Use secure session management
- Implement proper logout
- Protect against session fixation
- Use HTTPS

### Authorization

- Check permissions server-side
- Never trust client-side authorization alone
- Implement role-based access correctly
- Protect API routes

### CSRF (Cross-Site Request Forgery)

- Use Next.js built-in CSRF protection
- Validate origin for state-changing requests
- Use SameSite cookies appropriately

### Secrets Management

- Never commit secrets to repository
- Use environment variables
- Use `.env.local` for local secrets (already in .gitignore)
- Use secure secret management in production

### Input Validation

- Validate on server-side, not just client
- Use type checking
- Validate format, length, range
- Sanitize before use

### File Uploads

- Validate file type (magic bytes, not just extension)
- Limit file size
- Store outside web root
- Generate new filenames
- Scan for malware if possible

### Dependencies

- Run `npm audit` regularly
- Update vulnerable packages
- Review new dependencies before adding
- Check license compatibility

## Security Documentation

### `docs/SECURITY.md`

Documents:
- Security architecture
- Authentication approach
- Authorization model
- Data protection
- Secret management
- Security policies

### `security-reports/`

Contains:
- Security audit reports
- Vulnerability assessments
- Remediation records

## Reporting Format

```markdown
# Security Report

**Date:** YYYY-MM-DD
**Auditor:** [Agent/Tool]
**Scope:** [What was reviewed]

## Findings

### [SEVERITY] Finding Title

**Location:** File:line
**Description:** What was found
**Risk:** Potential impact
**Recommendation:** How to fix
**Status:** Open/Fixed/Accepted

## Summary

- Critical: X
- High: X
- Medium: X
- Low: X

## Next Steps

[Actions required]
```

## Blocking Conditions

Do NOT push with known:

- Critical security vulnerabilities
- High-severity security vulnerabilities
- Material medium-severity vulnerabilities introduced by the change
- Failing tests
- Type errors
- Build failures
- Lint errors indicating correctness problems

## Incident Response

If security issue found in production:

1. Assess severity and impact
2. Contain if necessary
3. Fix the vulnerability
4. Deploy fix
5. Review related code
6. Document in security report
7. Notify affected users if required

## External Tools

Consider integrating:

- `npm audit` — Dependency vulnerabilities
- GitHub Dependabot — Automated alerts
- GitHub Security Advisories
- `security-review` external skill

## Environment Variables

- Never commit `.env.local` or `.env.production`
- Use `.env.example` to document required variables
- Validate environment variables at startup
- Provide clear error messages for missing variables
