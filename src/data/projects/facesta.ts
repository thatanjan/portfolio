import Project from 'classes/Project/Project'
import Info from 'classes/Project/ProjectInfo'

import {
	javascript,
	react,
	redux,
	nextjs,
	typescript,
	mui,
	nodejs,
	express,
	mongodb,
	graphql,
	mongoose,
	git,
	github,
	vim,
	devtools,
	prettier,
	eslint,
} from 'data/skills/AllSkills'

import readImagePaths from 'utils/readImagePaths'

export const FACESTA = 'facesta'

const subtitle =
	'Facesta is a social media Platform inspired from Facebook and Instagram.'

const description = [
	subtitle,
	`It has user authentication, Newsfeed, picture upload and almost every feature that a social media application needs.`,
]

const frontEndTechs = [javascript, react, redux, nextjs, typescript, mui]

const backEndTechs = [nodejs, express, typescript, mongodb, graphql, mongoose]

const toolsUsed = [git, github, vim, devtools, prettier, eslint]

const features: string[] = [
	'User Authentication',
	'User authorization',
	'Newsfeed',
	'User profile',
	'Post creation',
	'Post interaction',
	'Follow other users',
	'Photo upload',
]

const projectInfos = [
	new Info({
		field: 'category',
		value: 'Social Media',
	}),
	new Info({
		field: 'type',
		value: 'Full stack web application',
	}),
	new Info({
		field: 'live_demo',
		href: 'https://facesta.vercel.app/',
		value: 'Facesta',
	}),
	new Info({
		field: 'source_code',
		href: 'https://github.com/thatanjan/facesta',
		value: 'Github',
	}),
]

const facesta = new Project(FACESTA)
	.addSubtitle(subtitle)
	.addDescription(description)
	.addProjectInfos(projectInfos)
	.addFeatures(features)
	.addImages(readImagePaths(FACESTA))
	.addFrontEndTechs(frontEndTechs)
	.addBackEndTechs(backEndTechs)
	.addToolsUsed(toolsUsed)

export default facesta
