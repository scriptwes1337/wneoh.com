# Security

This document describes the security architecture and policies for this repository.

## Security Architecture

### Baseline Security (Always Active)

- Never commit secrets to repository
- Never expose credentials in client code
- Validate all untrusted input
- Enforce authorization server-side
- Use parameterized database queries
- Prevent injection vulnerabilities
- Protect sensitive data
- Use HTTPS in production
- Follow least privilege principle

### Pre-Push Security Gate

Before every push, the security review process must be completed.

See `skills/security/SKILL.md` for the complete process.

## Authentication

Project-specific. Define during project initialization.

Options include:
- NextAuth.js / Auth.js
- Clerk
- Supabase Auth
- Custom authentication

## Authorization

Project-specific. Define during project initialization.

Best practices:
- Role-based access control (RBAC)
- Permission checks on server-side
- Never trust client-side authorization alone
- Clear permission matrix documented in PRD

## Data Protection

### Sensitive Data

- Never log secrets or sensitive data
- Encrypt sensitive data at rest
- Use HTTPS for data in transit
- Implement appropriate access controls

### PII Handling

- Minimize PII collection
- Store only what's necessary
- Implement appropriate retention policies
- Follow applicable regulations (GDPR, CCPA, etc.)

## Secrets Management

### Local Development

Use `.env.local` for secrets (already in `.gitignore`):

```bash
# .env.local (DO NOT COMMIT)
DATABASE_URL=postgresql://...
API_KEY=secret_key
```

### Environment Variables

- Document required variables in `.env.example`
- Validate variables at application startup
- Provide clear errors for missing variables
- Never commit actual values

### Production

Use secure secret management:
- Vercel Environment Variables
- AWS Secrets Manager
- HashiCorp Vault
- Other secure vaults

## Dependencies

### Security Auditing

```bash
npm audit           # Check for vulnerabilities
npm audit fix       # Fix vulnerabilities
```

Run regularly and before every push.

### Adding Dependencies

Before adding a dependency:
1. Verify it's actively maintained
2. Check for known vulnerabilities
3. Evaluate security implications
4. Document architectural dependencies

## Common Vulnerability Prevention

### Injection Prevention

- Use parameterized queries
- Never concatenate user input into queries
- Use ORM/query builders correctly
- Sanitize output where necessary

### XSS Prevention

- React handles most XSS automatically
- Avoid `dangerouslySetInnerHTML` when possible
- Sanitize user-generated content
- Implement Content Security Policy

### CSRF Prevention

- Next.js provides built-in protection
- Validate origin for state-changing requests
- Use SameSite cookies appropriately

### File Uploads

- Validate file type (check magic bytes, not just extension)
- Limit file size
- Store outside web root when possible
- Generate new filenames
- Consider malware scanning

## Security Checklist

### For Every Change

- [ ] No secrets committed
- [ ] No credentials in client code
- [ ] Input validation in place
- [ ] Authorization checked server-side
- [ ] No injection vulnerabilities introduced

### Before Every Push

- [ ] `npm audit` shows no critical/high vulnerabilities
- [ ] Security-sensitive code reviewed
- [ ] Authentication/authorization implications considered
- [ ] External URLs validated
- [ ] See `skills/security/SKILL.md` for full checklist

## Security Reporting

Security reports are stored in `security-reports/` directory.

Report format:

```markdown
# Security Report

Date: YYYY-MM-DD
Auditor: [Agent/Tool]
Scope: [What was reviewed]

## Findings

### [SEVERITY] Finding Title

Location: File:line
Description: [What was found]
Risk: [Potential impact]
Recommendation: [How to fix]
Status: Open/Fixed/Accepted

## Summary

Critical: X
High: X
Medium: X
Low: X
```

## Incident Response

If a security issue is discovered:

1. **Assess** — Determine severity and impact
2. **Contain** — Limit exposure if necessary
3. **Fix** — Implement security fix
4. **Deploy** — Push fix to production
5. **Review** — Check related code for similar issues
6. **Document** — Create security report
7. **Notify** — Inform affected users if required

## External Security Tools

Consider integrating:
- GitHub Dependabot
- GitHub Security Advisories
- Snyk
- `security-review` external skill

## Contact

For security concerns, contact the project maintainer.
