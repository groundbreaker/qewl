include .env
.PHONY := default init release
.DEFAULT_GOAL = default

default:
	@ mmake help

# init project
init:
	@ yarn

# create release VERSION on github
#
# VERSION should being with a v and be in SemVer format.
release:
	$(eval VERSION=$(filter-out $@, $(MAKECMDGOALS)))
	$(if ${VERSION},@true,$(error "VERSION is required"))
	git commit --allow-empty -am ${VERSION}
	git push
	hub release create -m ${VERSION} -e ${VERSION}

# compile and watch 
dev:
	@ yarn dev

# build
build:
	@ yarn build

%:
	@ true
