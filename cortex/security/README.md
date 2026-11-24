# Security Protocols & Audit Hub

This directory contains system threat models, penetration test reports, security audit matrices, and hardening logs.

## Guidelines
- Follow the 20 Vibe-Coded Traps defense standards (`PEN_TEST_VIBECODED_APP_SECURITY_STANDARD_V1_0`).
- Ensure all crypto tokens use CSPRNG (`crypto.randomBytes()`).
- Enforce constant-time string comparisons (`crypto.timingSafeEqual()`).
