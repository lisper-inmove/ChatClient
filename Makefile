dev:
	npm run dev
api:
	cd src/proto && make api-typescript
entity:
	cd src/proto && make entity-typescript
start:
	rm -rf .next && npm run build && npm run start
