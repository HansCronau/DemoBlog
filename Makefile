install: docker-compose.common.yml
	docker-compose -f docker-compose.common.yml run --rm common npm install

start: docker-compose.common.yml
	docker-compose up

build: docker-compose.common.yml
	docker-compose -f docker-compose.common.yml run --rm common npm run-script build

test: docker-compose.common.yml
	docker-compose -f docker-compose.common.yml run --rm common npm test
