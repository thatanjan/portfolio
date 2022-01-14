import Project from 'classes/Project/Project'
import Info from 'classes/Project/ProjectInfo'

import {
	html,
	css,
	javascript,
	git,
	github,
	vim,
	devtools,
	prettier,
	eslint,
} from 'data/skills/AllSkills'

import readImagePaths from 'utils/readImagePaths'

export const HULU_LP_CLONE = 'hulu-landing-page-clone'

const subtitle =
	'A clone of the Hulu landing page, made with HTML, CSS, and JavaScript.'

const description = [subtitle]

const frontEndTechs = [html, css, javascript]

const toolsUsed = [git, github, vim, devtools, prettier, eslint]

const features: string[] = [
	'Responsive Website',
]

const projectInfos = [
	new Info({
		field: 'category',
		value: 'Landing Page',
	}),
	new Info({
		field: 'type',
		value: 'Front End web application',
	}),
	new Info({
		field: 'live_demo',
		href: 'https://thatanjan.github.io/hulu-landing-page-clone-yt/',
		value: 'Hulu Landing Page Clone',
	}),
	new Info({
		field: 'source_code',
		href: 'https://github.com/thatanjan/hulu-landing-page-clone-yt',
		value: 'Github',
	}),
]

const huluClone = new Project(HULU_LP_CLONE)
	.addSubtitle(subtitle)
	.addDescription(description)
	.addProjectInfos(projectInfos)
	.addFeatures(features)
	.addImages(readImagePaths(HULU_LP_CLONE))
	.addFrontEndTechs(frontEndTechs)
	.addToolsUsed(toolsUsed)

export default huluClone
