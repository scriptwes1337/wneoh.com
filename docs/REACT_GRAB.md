# React Grab Development Workflow

This document describes how to use React Grab for component context extraction during development.

## What is React Grab?

React Grab (or equivalent) allows you to hover or select a UI element during development and copy its component/source context to paste into the agent chat. This helps precisely identify what needs changing.

## Setup

React Grab is a development-only tool. It should NOT be a production dependency.

### Installation

If using the `react-grab` external skill or a similar tool, follow its installation instructions.

The goal is to enable:
1. Hover or select an interface element
2. Copy its component/source context
3. Paste the context into the agent chat

### Information Exposed

React Grab should provide:

- Component name
- Source file path
- Source line (where possible)
- Relevant JSX/HTML
- CSS selector
- Element context

## Usage Workflow

1. Start the development server: `npm run dev`
2. Open the application in your browser
3. Use React Grab to inspect elements
4. Copy context to clipboard
5. Paste into agent chat with your request

## Alternative: Browser DevTools

If React Grab is not available, use Chrome DevTools MCP or browser developer tools:

1. Inspect element in browser
2. Find component name in React DevTools
3. Find source file
4. Provide context to agent

## External Skill

Load the `react-grab` external skill when available for specialized capabilities.

Do not duplicate external skill contents in local skills.

## Development-Only

Ensure React Grab is:
- Only included in development builds
- Not shipped to production
- Removed from production bundle via tree-shaking or conditional imports
