#!/bin/bash

# Pre-Push Quality Gate
# Run this script before pushing changes

set -e

echo "🔍 Running pre-push quality gate..."
echo ""

# 1. Run tests
echo "📦 Running tests..."
npm run test
echo ""

# 2. Type check
echo "🔧 Running type check..."
npm run typecheck
echo ""

# 3. Lint
echo "🧹 Running linter..."
npm run lint
echo ""

# 4. Build
echo "🏗️  Running build..."
npm run build
echo ""

# 5. Security audit
echo "🔒 Running security audit..."
npm audit --audit-level=moderate
echo ""

echo "✅ Pre-push quality gate passed!"
echo ""
echo "Remember to:"
echo "  - Review pending changes (git diff)"
echo "  - Update CHANGELOG.md if needed"
echo "  - Run security review for sensitive changes"
echo ""
