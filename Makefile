push:
	bun run build
	aws s3 cp out s3://dev.nknguyen.glossary --recursive --exclude ".git/*" --exclude "Makefile" --exclude "**.DS_Store" --exclude ".env.default" --exclude "CHANGELOG.md" --exclude "README.md" --exclude "CONTRIBUTING.md" --exclude "StructureMap.md"

push_test:
	bun run build
	aws s3 cp out s3://tests3.genkimiru.jp --recursive --exclude ".git/*" --exclude "Makefile" --exclude "**.DS_Store" --exclude ".env.default" --exclude "CHANGELOG.md" --exclude "README.md" --exclude "CONTRIBUTING.md" --exclude "StructureMap.md"

install:
	bun install

dev:
	bun dev

build:
	bun run build

install_bun:
	curl -fsSL https://bun.sh/install | bash -s "bun-v1.0.4"