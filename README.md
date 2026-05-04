# Shared Run Test Project

Minimal Playwright project for verifying Shared Runs.

## Setup

```bash
npm install
```

## Run with shared shards

Replace `TESTOMATIO` with your project's reporter API key.

```bash
# Shard 1
TESTOMATIO=tstmt_xxx TESTOMATIO_TITLE="Shared Run Test" \
TESTOMATIO_SHARED_RUN=1 TESTOMATIO_CREATE=1 \
npx playwright test --shard=1/2

# Shard 2
TESTOMATIO=tstmt_xxx TESTOMATIO_TITLE="Shared Run Test" \
TESTOMATIO_SHARED_RUN=1 TESTOMATIO_CREATE=1 \
npx playwright test --shard=2/2
```

## Test with TESTOMATIO_PROCEED

```bash
TESTOMATIO=tstmt_xxx TESTOMATIO_TITLE="Shared Run Test" \
TESTOMATIO_SHARED_RUN=1 TESTOMATIO_PROCEED=1 TESTOMATIO_CREATE=1 \
npx playwright test --shard=1/2
```
