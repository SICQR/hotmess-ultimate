# Age Verification SOP (UK Online Safety compliance)

**Scope:** Any feature that could expose pornography or 18+ sexual content.

**Controls:** 
- Hard gate before access to 18+ sections.
- Acceptable verification methods: photo ID with biometric match; third-party certified AV provider; payment card + additional checks.
- Unacceptable: self-declaration alone.

**Signals to store (minimised):** verification token, provider, timestamp, expiry. No raw ID images persisted unless required by the provider contract.

**Fallback:** deny access if verification fails or cannot be completed.

**Moderation:** live shows/call-ins: delay buffer; keyword/host moderation; kill-switch.

**Incident response:** remove content, preserve logs, notify provider, document actions.
