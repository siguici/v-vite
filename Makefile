.PHONY: install ci build check fix test release pr-release

install: node_modules pnpm-lock.yaml

node_modules: package.json packages/v-vite/package.json
	pnpm i -r --frozen-lockfile

pnpm-lock.yaml: package.json packages/v-vite/package.json
	pnpm up -r
	pnpm fix

ci: install
	pnpm run ci

fix: install
	pnpm fix

build: fix
	pnpm build

check: build
	pnpm check

test: check
	pnpm test

pr-release: test
	pnpx pkg-pr-new publish ./packages/*

release: test
	pnpm release
