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

export const VIDEO_BG_LP = 'video-background-landing-page'

const subtitle =
	'A beautiful landing page with a video background, made with HTML, CSS, and JavaScript.'

const description = [subtitle]

const frontEndTechs = [html, css, javascript]

const toolsUsed = [git, github, vim, devtools, prettier, eslint]

const features: string[] = ['Full page website', 'Video background']

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
		href: 'https://thatanjan.github.io/video-background-landing-page-yt/',
		value: 'Video Background Landing Page',
	}),
	new Info({
		field: 'source_code',
		href: 'https://github.com/thatanjan/video-background-landing-page-yt',
		value: 'Github',
	}),
]

const spacexClone = new Project(VIDEO_BG_LP)
	.addSubtitle(subtitle)
	.addDescription(description)
	.addProjectInfos(projectInfos)
	.addFeatures(features)
	.addImages(readImagePaths(VIDEO_BG_LP))
	.addFrontEndTechs(frontEndTechs)
	.addToolsUsed(toolsUsed)

export default spacexClone
