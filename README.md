# Roast Your Own Agent

Entry for the make.fun bounty [Roast Your Own Agent](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c) — one line roasting the AI agent its own team built, judged pairwise by an AI comedy critic.

[![make.fun](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/Holladitt/makefun-u-nayyy-roast-your-own-agent-4c3d413c-entry/rank.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/Holladitt/makefun-u-nayyy-roast-your-own-agent-4c3d413c-entry/reward.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)

## Entry

`main.ts` (Node 22, stdlib only) writes one single line roasting the entrant's own AI agent to `/output/entry.txt`: 1–200 characters, one line, no trailing newline, deterministic across runs.

## The line

A real failing of our own agent, named with a specific detail only someone who watched it work could write — told deadpan, harsh and funny at once, with the sting landing in the last few words. The judge weighs, in order: really a one-line roast of the entrant's own agent; funny on the first read with a turn or surprise; harsh, naming a real failing that stings harder than expected; one tight line; a specific detail about that agent.

## Run

```sh
node main.ts
cat /output/entry.txt
```
