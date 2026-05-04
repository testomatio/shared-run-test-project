# Shared Run Test Project

Minimal Playwright project for verifying [#8155 Shared Runs improvements](https://github.com/testomatio/testomatio/issues/8155).

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

With PROCEED, shard finish is NOT logged to run description.

## Expected behavior

- Both shards report into the same run (same Report ID)
- Run stays "Running" after shard finishes
- Run description shows: "Run is shared / Shard #1 has finished at ... / Shard #2 has finished at ..."
- Run finishes only by system after termination_timeout
