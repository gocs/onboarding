include .env
export

.PHONY: build
build:
	npm run build --emptyOutDir 

.PHONY: i
i:
	npm i

.PHONY: dev
dev:
	npm run dev

.PHONY: dbinit
dbinit:
	wget -q https://github.com/pocketbase/pocketbase/releases/download/v0.16.7/pocketbase_0.16.7_linux_amd64.zip
	unzip pocketbase_0.16.7_linux_amd64.zip
	rm -rf pocketbase_0.16.7_linux_amd64.zip CHANGELOG.md LICENSE.md

.PHONY: db
db:
	pocketbase serve --dir pb_data/ --http $(POCKETBASE_HTTP)
