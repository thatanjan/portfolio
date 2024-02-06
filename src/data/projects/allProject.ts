import facesta from 'data/projects/facesta'
import culesCoding from 'data/projects/culesCoding'
import culesShop from 'data/projects/culesShop'
import spacexClone from 'data/projects/spacexLandingPageClone'
import huluClone from 'data/projects/huluLandingPageClone'
import teslaClone from 'data/projects/teslaLandingPageClone'
import videoBackgroundLandingPage from 'data/projects/videoBackgroundLandingPage'
import fullPageLandingPage from 'data/projects/fullpageLandingPage'

import Project from 'classes/Project/Project'

export class ProjectPath {
	params: {
		project: string
	}

	constructor(param: string) {
		this.params = { project: param }
	}
}

const allProject: Project[] = [
	facesta,
	culesCoding,
	spacexClone,
	huluClone,
	teslaClone,
	videoBackgroundLandingPage,
	fullPageLandingPage,
	culesShop,
]

export const allProjectPaths = allProject.map(
	({ title }: Project) => new ProjectPath(title),
)

export default allProject
